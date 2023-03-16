import { Routes,Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainLayout from "./layout/MainLayout";
import Main from "./pages/Main"

function App() {
  return (
    <>
        <Header/>
      <Routes>
        <Route path="/" element={<MainLayout/>} >
      <Route index element = {<Main/>}>
      </Route>
        </Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
