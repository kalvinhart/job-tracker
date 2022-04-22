import SidePanel from "../SidePanel/SidePanel";
import Container from "../Container/Container";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <SidePanel />
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
