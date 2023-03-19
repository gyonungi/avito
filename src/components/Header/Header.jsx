import NavBar from "./NavBar/NavBar";
import s from "./Header.module.css"
const Header = () => {
  return (
    <header className={s.header}>
      <NavBar/>
    </header>
  );
};

export default Header;
