import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/index";

export default function SidebarTest() {
  return (
    <ProSidebar>
      <Logo />
      <Menu iconShape="square">
        <MenuItem>
          Dashboard
          <Link to="/" />
        </MenuItem>

        <SubMenu title="Menu">
          <MenuItem>
            Tables
            <Link to="/tables" />
          </MenuItem>
          <MenuItem>
            Student Dashboard
            <Link to="/studentdashboard" />
          </MenuItem>
          {/* <MenuItem>
            Profile Card
            <Link to="/profilecard" />
          </MenuItem> */}
          <MenuItem>
            Settings
            <Link to="/settings" />
          </MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
}
