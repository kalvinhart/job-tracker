import SidePanel from "../SidePanel/SidePanel";
import Container from "../Container/Container";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <SidePanel />
      <Container>
        <Header />
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
