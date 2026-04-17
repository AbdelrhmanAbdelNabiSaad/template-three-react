import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

function MainLayout() {
  return (
    <>
      <Header />
      <div>
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
