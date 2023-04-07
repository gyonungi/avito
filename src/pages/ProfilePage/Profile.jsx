  import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { editUser, getUsers, NewPassword, SetUserAvatar } from "../../asyncAction/user";
import Card from "../../components/Card/Card";
import s from "./Profile.module.css";
import Logo from "../../images/Logo.png";
import { getAddsUserId } from "../../asyncAction/add";

const Profile = () => {
  const dispath = useDispatch();
  const { user } = useSelector((state) => state.user);
  const token = document.cookie.split("=")[1];
  const { refresh_token } = JSON.parse(token);
  const { addList } = useSelector((state) => state.adds);
  useEffect(() => {
    dispath(
      getUsers(refresh_token, (user) => dispath(getAddsUserId(Number(user.id))))
    );
    /*     dispath(getAddsUserId(Number(user.id))); */
  }, []);

  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  function ProfileUser(e) {
    e.preventDefault();
    let dto = {
      name,
      surname,
      city,
      phone,
    };
    dispath(editUser(dto, refresh_token));
  }

  const setAvatar = async (e) => {
    dispath(SetUserAvatar(e.target.files[0], refresh_token));
  };

  function handelPassword(e){
    e.preventDefault();
    let dto = {
      password_1,
      password_2,
    };
    dispath(NewPassword(dto,refresh_token))
  }
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [password_1,setPassword] = useState("");
  const [password_2,setNewpassword] = useState("");
  return (
    <>
      <div className={s.mainContainer}>
        <div className={s.mainCenterBlock}>
          <div className={s.mainMenu}>
            <NavLink className={s.menuLogoLink}>
              <img className={s.menuLogoImg} src={Logo} alt="logo" />
            </NavLink>
            <form className={s.menuForm} action="#">
              <button
                onClick={handleClick}
                className={s.menuBtn}
                id="btnGoBack"
              >
                Вернуться на&nbsp;главную
              </button>
            </form>
          </div>

          <h2 className={s.mainH2}>Здравствуйте, {user.name}!</h2>

          <div className={s.mainProfile}>
            <div className={s.profileContent}>
              <h3 className={s.profileTitle}>Настройки профиля</h3>
              <div className={s.profileSettings}>
                <div className={s.settingsLeft}>
                  <div className={s.settingsImg}>
                    <NavLink target="_self">
                      <img
                        src={
                          !user.avatar
                            ? ""
                            : `http://localhost:8090/${user.avatar}`
                        }
                        alt=""
                      />
                    </NavLink>
                  </div>
                  <label className={s.settingsChangePhoto} target="_self">
                    <input
                      onChange={(e) => setAvatar(e)}
                      type="file"
                      id="setAvatar"
                    />
                    Заменить
                  </label>
                </div>
                <div className={s.settingsRight}>
                  <form
                    onSubmit={(e) => ProfileUser(e)}
                    className={s.settingsForm}
                    action="#"
                  >
                    <div className={s.settingsDiv}>
                      <label for="fname">Имя</label>
                      <input
                        onChange={(e) => setName(e.target.value)}
                        className={s.settingsFName}
                        id="settings-fname"
                        name="fname"
                        type="text"
                        placeholder=""
                      />
                    </div>

                    <div className={s.settingsDiv}>
                      <label for="lname">Фамилия</label>
                      <input
                        onChange={(e) => setSurname(e.target.value)}
                        className={s.settingsLName}
                        id="settings-lname"
                        name="lname"
                        type="text"
                        placeholder=""
                      />
                    </div>

                    <div className={s.settingsDiv}>
                      <label for="city">Город</label>
                      <input
                        onChange={(e) => setCity(e.target.value)}
                        className={s.settingsCity}
                        id="settings-city"
                        name="city"
                        type="text"
                        placeholder=""
                      />
                    </div>

                    <div className={s.settingsDiv}>
                      <label for="phone">Телефон</label>
                      <input
                        onChange={(e) => setPhone(e.target.value)}
                        className={s.settingsPhone}
                        id="settings-phone"
                        name="phone"
                        type="tel"
                        placeholder="+79161234567"
                      />
                    </div>

                    <button className={s.settingsBtn} id="settings-btn">
                      Сохранить
                    </button>
                  </form>
                  <form onSubmit={(e)=> handelPassword(e)}>
                  <div className={s.settingsDiv}>
                      <label for="password">Старый пароль</label>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        className={s.settingsPhone}
                        id="password_1"
                        name="password_1"
                        type="password"
                        placeholder="Пароль"
                      />
                    </div>

                    <div className={s.settingsDiv}>
                      <label for="newpassword">Новый Пароль</label>
                      <input
                        onChange={(e) => setNewpassword(e.target.value)}
                        className={s.settingsPhone}
                        id="password_2"
                        name="password_2"
                        type="password"
                        placeholder="Новый Пароль"
                      />
                    </div>
                    <button className={s.settingsBtn} id="settings-btn">
                      Сохранить
                    </button>
                    </form>
                </div>
              </div>
            </div>
          </div>

          <h3 className={s.mainTitle}>Мои товары</h3>
        </div>
        <div className={s.mainContent}>
          <div className={s.cardsItem}>
            {addList.length ? (
              addList.map((item) => <Card key={item.id} date={item} />)
            ) : (
              <p>Товаров нет</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
