import "./Auth.scss";
import { Outlet } from "react-router-dom";
function Auth() {
  return (
    <div id="auth-layout">
      <Outlet />
    </div>
  );
}
export default Auth;
