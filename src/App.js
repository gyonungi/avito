import { Routes, Route } from "react-router-dom";
import CreateAdds from "./components/CreateAdds/CreateAdds";
import AuthLayot from "./layout/AuthLayot";
import MainLayout from "./layout/MainLayout";
import Description from "./pages/DescriptionPage/Descrip";
import LogIn from "./pages/LoginPage/LogIn";
import Main from "./pages/MainPage/Main";
import Profile from "./pages/ProfilePage/Profile";
import Registration from "./pages/RegistrationPage/Registration";
import SellProfile from "./pages/SellProfilePage/SellProfile";
import Reviews from "./components/Reviews/Reviews.jsx";
import EditAdd from "./components/EdditAdd/EditAdd";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="/ads/:id" element={<Description />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sellprofile/:id" element={<SellProfile />} />
          <Route path="/createadd" element={<CreateAdds />} />
          <Route path="/rev/:id" element={<Reviews />} />
          <Route path="/edit/:id" element={<EditAdd />} />
        </Route>
        <Route path="/auth" element={<AuthLayot />}>
          <Route path="/auth/reg" element={<Registration />} />
          <Route path="/auth/log" element={<LogIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
