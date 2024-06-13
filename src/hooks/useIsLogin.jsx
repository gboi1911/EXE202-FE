import { useSelector } from "react-redux";
export function useIsLogin() {
  const { user } = useSelector((state) => state.profile);
  return {
    isLogin: user,
  };
}
