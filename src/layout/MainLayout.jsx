import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <div className="container">
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default MainLayout;
