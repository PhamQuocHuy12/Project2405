import { createUser } from "../services/auth";
import { ILoginProps } from "../interfaces";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { ROUTER_NAME } from "../common/routers";

function useRegisterService() {
  const navigate = useNavigate();
  const registerMutation = useMutation({
    mutationFn: ({ email, password }: ILoginProps) =>
      createUser({ email, password }),
  });

  const handleRegister = ({ email, password }: ILoginProps) => {
    registerMutation.mutate(
      { email, password },
      {
        onSuccess() {
          navigate(ROUTER_NAME.LOGIN);
        },
        onError(error, variables, context) {
          console.log({ error, variables, context });
        },
      }
    );
  };
  return { handleRegister };
}

export default useRegisterService;
