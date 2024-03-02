import Sidebar from "../components/Sidebar";
import User from "../components/User";
import Map from "../components/map";
import { app } from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
