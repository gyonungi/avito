import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const MainLayout = () => {
  const token = document.cookie.split("=")[1];
  const accessToken = JSON.parse(token);
  return (
    <div className="container">
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default MainLayout;
