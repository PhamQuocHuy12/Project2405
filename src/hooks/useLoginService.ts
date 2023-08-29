import { useMutation, useQueryClient } from "react-query";
import { loginWithEmail } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "../common/queryKeys";
import { ILoginProps } from "../interfaces";
import { ROUTER_NAME } from "../common/routers";

function useLoginService() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const loginMutation = useMutation({
    mutationFn: ({ email, password }: ILoginProps) =>
      loginWithEmail(email, password),
  });
  const { isLoading } = loginMutation;

  const handleLogin = (email: string, password: string) => {
    loginMutation.mutate(
      { email, password },
      {
        onSuccess(data) {
          queryClient.setQueryData(QUERY_KEYS.ACCOUNT_INFO, data);
          navigate(ROUTER_NAME.HOME);
        },
        onError(error, variables, context) {
          console.log({ error, variables, context });
        },
      }
    );
  };

  return { handleLogin, isLoading };
}

export default useLoginService;
