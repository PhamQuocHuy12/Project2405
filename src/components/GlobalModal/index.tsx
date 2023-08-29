import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Button } from "@mui/material";
import { useImperativeHandle } from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown, string>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const GlobalDialog = React.forwardRef((_, ref) => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ content: "", title: "" });

  useImperativeHandle(
    ref,
    () => {
      return {
        open({ content = "", title = "" }: { content: string; title: string }) {
          setOpen(true);
          setModalContent({ content, title });
        },
        close() {
          onClose();
        },
      };
    },
    []
  );

  const onClose = () => {
    setModalContent({ content: "", title: "" });
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{modalContent.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {modalContent.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Disagree</Button>
          <Button onClick={onClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});
