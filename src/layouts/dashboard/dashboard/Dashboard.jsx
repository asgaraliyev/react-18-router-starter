import "./Dashboard.scss";
import { Outlet } from "react-router-dom";
import Header from "../../../components/common/header/Header";
import Menu from "../../../components/common/menu/Menu";
function Dashboard() {
  return (
    <div id="dashboard-layout">
      <Header/>
      <Menu/>
      <Outlet />
    </div>
  );
}
export default Dashboard;
