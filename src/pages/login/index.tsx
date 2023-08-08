import { Box, Button, TextField, Typography } from "@mui/material";

function LoginPage() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          bgcolor: "yellowgreen",
          height: 220,
          width: "100vw",
          alignItems: "center",
          paddingLeft: 3,
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
        <TextField fullWidth label={"Phone Number"} />

        <Button
          sx={{
            width: "100%",
            marginTop: 2,
            marginBottom: 2,
            borderRadius: 20,
            height: 50,
          }}
          variant="contained"
        >
          <Typography color={"white"} fontWeight={"bold"}>
            Sign in
          </Typography>
        </Button>

        <Typography color={"black"} mb={2}>
          Dont have an account? Sign up
          <Box
            component="a"
            href="https://www.w3schools.com/"
            target="_blank"
            sx={{ color: "yellowgreen" }}
            onClick={() => console.log("hehe")}
          >
            {" "}
            here
          </Box>
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ flex: 1, height: "1px", bgcolor: "gray" }}></Box>
          <Typography sx={{ paddingX: 1.5 }} color={"black"}>
            or sign in with
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
