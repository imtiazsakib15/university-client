import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/adminRoutes";
import { facultyPaths } from "../../routes/facultyRoutes";
import { studentPaths } from "../../routes/studentRoutes";
import { useAppSelector } from "../../redux/hooks";
import { selectUser } from "../../redux/features/auth/authSlice";

const { Sider } = Layout;

const Sidebar = () => {
  const user = useAppSelector(selectUser);
  const userRole = {
    SUPER_ADMIN: "superAdmin",
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
  };
  let sidebarItems;
  console.log(user);
  switch (user!.role) {
    case userRole.SUPER_ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
        className="demo-logo-vertical"
      >
        <h3>University Management</h3>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
