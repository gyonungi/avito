import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { refreshToken } from "../asyncAction/auth";
import CreateAdds from "../components/CreateAdds/CreateAdds";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const MainLayout = () => {
  const dispath = useDispatch();
  const {modalIsOpen} = useSelector((state) => state.adds)
  useEffect(() => {
    const token = document.cookie.split("=")[1];
    if (token) {
      dispath(refreshToken(JSON.parse(token)));
    }
  },[]);

  return (
    <div className="container">
      <Header />
      {modalIsOpen && <CreateAdds/>}
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default MainLayout;
