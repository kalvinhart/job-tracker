import SidePanel from "../SidePanel/SidePanel";
import Container from "../Container/Container";
import Header from "../Header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SidePanel />
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
