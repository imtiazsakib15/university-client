import { Button } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { TUser, TUserInfo } from "../types";

const Login = () => {
  const { register, handleSubmit } = useForm<TUserInfo>();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TUserInfo> = async (data) => {
    const toastId = toast.loading("Logging in...");
    try {
      const result = await login(data).unwrap();

      const user = verifyToken(result.data.accessToken) as TUser;
      dispatch(setUser({ user, token: result.data.accessToken }));
      toast.success("Login successful!", { id: toastId });

      if (user.role === "superAdmin") return navigate("/admin/dashboard");
      return navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("An error occurred!", { id: toastId });
    }
  };

  return (
    <div style={{ maxWidth: "580px", margin: "0 auto", padding: "20px 0" }}>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "12px",
          }}
        >
          <label style={{ width: "90px" }} htmlFor="id">
            ID:
          </label>
          <input
            style={{ width: "100%", padding: "8px" }}
            type="text"
            id="id"
            {...register("id")}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "12px",
          }}
        >
          <label style={{ width: "90px" }} htmlFor="password">
            Password:
          </label>
          <input
            style={{ width: "100%", padding: "8px" }}
            type="password"
            id="password"
            {...register("password")}
          />
        </div>
        <Button htmlType="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
