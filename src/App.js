import { Routes, Route } from "react-router-dom";
import AuthLayot from "./layout/AuthLayot";
import MainLayout from "./layout/MainLayout";
import Description from "./pages/DescriptionPage/Descrip";
import LogIn from "./pages/LoginPage/LogIn";
import Main from "./pages/MainPage/Main";
import MyDescription from "./pages/MyDescripPage/MyDescrip";
import Profile from "./pages/ProfilePage/Profile";
import Registration from "./pages/RegistrationPage/Registration";
import SellProfile from "./pages/SellProfilePage/SellProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="/descrip" element={<Description />} />
          <Route path="/mydescrip" element={<MyDescription />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sellprofile" element={<SellProfile />} />
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
