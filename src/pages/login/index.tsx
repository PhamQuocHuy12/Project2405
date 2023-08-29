import { Box, Button, Typography } from "@mui/material";
import { loginSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import TextInput from "../../components/FormInput/TextInput";
import useLoginService from "../../hooks/useLoginService";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../common/colors";
import { ROUTER_NAME } from "../../common/routers";
import { useContext } from "react";
import { AppContext } from "../../contexts/appContext";

function LoginPage() {
  const navigate = useNavigate();
  const { handleLogin } = useLoginService();
  const { globalModal } = useContext(AppContext);
  const { control, getValues, handleSubmit } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(loginSchema),
  });

  const onSignInClick = () => {
    const { email, password } = getValues();
    handleLogin(email, password);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          bgcolor: COLORS.PRIMARY,
          height: 220,
          width: "100vw",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <Typography fontSize={40}>Login</Typography>
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
          onClick={handleSubmit(onSignInClick)}
          variant="contained"
        >
          <Typography color={"white"} fontWeight={"bold"}>
            Sign in
          </Typography>
        </Button>

        <Button
          sx={{
            width: "100%",
            marginTop: 2,
            marginBottom: 2,
            borderRadius: 20,
            height: 50,
          }}
          onClick={() =>
            globalModal?.current?.open({
              content: "This is content 1",
              title: "Title 1",
            })
          }
          variant="contained"
        >
          <Typography color={"white"} fontWeight={"bold"}>
            OPen
          </Typography>
        </Button>

        <Button
          sx={{
            width: "100%",
            marginTop: 2,
            marginBottom: 2,
            borderRadius: 20,
            height: 50,
          }}
          onClick={() =>
            globalModal?.current?.open({
              content: "This is content 2",
              title: "Title 2",
            })
          }
          variant="contained"
        >
          <Typography color={"white"} fontWeight={"bold"}>
            OPen 2
          </Typography>
        </Button>

        <Typography color={"black"} mb={2}>
          Dont have an account? Sign up
          <Typography
            component={"span"}
            sx={{ color: COLORS.PRIMARY }}
            onClick={() => navigate(ROUTER_NAME.REGISTER)}
          >
            {" here"}
          </Typography>
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ flex: 1, height: "1px", bgcolor: "gray" }}></Box>
          <Typography sx={{ paddingX: 1.5 }} color={"black"}>
            {"or sign in with"}
          </Typography>

          <Box sx={{ flex: 1, height: "1px", bgcolor: "gray" }}></Box>
        </Box>
        <Typography sx={{ paddingX: 1.5 }} color={"black"}>
          Comming soon
        </Typography>
      </Box>
    </Box>
  );
}

export default LoginPage;
