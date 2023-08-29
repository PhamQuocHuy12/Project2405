import { Box, Button, IconButton, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./schema";
import TextInput from "../../components/FormInput/TextInput";
import useRegisterService from "../../hooks/useRegisterService";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();
  const { handleRegister } = useRegisterService();
  const { control, getValues, handleSubmit } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSignUpClick = () => {
    const { email, password } = getValues();
    const userInfo = { email, password };
    handleRegister(userInfo);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          bgcolor: "yellowgreen",
          height: 220,
          width: "100vw",
          alignItems: "left",
          boxSizing: "border-box",
        }}
      >
        <IconButton
          sx={{
            height: 40,
            width: 40,
            position: "absolute",
            top: 12,
            left: 12,
          }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIosNewIcon sx={{ color: "white" }} />
        </IconButton>
        <Typography fontSize={40}>Register</Typography>
      </Box>
      <Box
        sx={{
          bgcolor: "white",
          top: 200,
          width: "100vw",
          height: "calc(100vh - 200px)",
          position: "absolute",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 3,
          boxSizing: "border-box",
        }}
      >
        <TextInput
          label={"Email"}
          name={"email"}
          control={control}
          defaultValue={""}
        />
        <TextInput
          label={"Password"}
          name={"password"}
          control={control}
          defaultValue={""}
          type="password"
        />
        <Button
          sx={{
            width: "100%",
            marginTop: 2,
            marginBottom: 2,
            borderRadius: 20,
            height: 50,
          }}
          variant="contained"
          onClick={handleSubmit(onSignUpClick)}
        >
          <Typography color={"white"} fontWeight={"bold"}>
            Sign up
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default RegisterPage;
