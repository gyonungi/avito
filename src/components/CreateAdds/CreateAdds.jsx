import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toCreateAdd } from "../../asyncAction/add";
import s from "./CreateAdds.module.css";

const CreateAdds = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const { refresh_token } = JSON.parse(token);
  function handleClick(){
    navigate("/")
  }
  function CreateAdd(e) {
    e.preventDefault();
    let dto = {
      title,
      description,
      price,
      files:[files],
    };
    dispath(toCreateAdd(dto,refresh_token))
  }

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [files, setFiles] = useState("");
  return (
    <>
      <div className={s.containerBg}>
        <div className={s.modalBlock}>
          <div className={s.modalContent}>
            <h3 className={s.modalTitle}>Новое объявление</h3>
            <div className={s.modalBtnClose}>
              <div className={s.modalBtnCloseLine}></div>
            </div>
            <form
              onSubmit={(e) => CreateAdd(e)}
              className={s.modalFormNewArt}
              id="formNewArt"
             
            >
              <div className={s.formNewArtBlock}>
                <label for="title">Название</label>
                <input
                  className={s.formNewArtInput}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  name="name"
                  id="title"
                  placeholder="Введите название"
                />
              </div>
              <div className={s.formNewArtBlock}>
                <label for="description">Описание</label>
                <textarea
                  className={s.formNewArtArea}
                  onChange={(e) => setDescription(e.target.value)}
                  name="text"
                  id="description"
                  cols="auto"
                  rows="10"
                  placeholder="Введите описание"
                ></textarea>
              </div>
              <div className={s.formNewArtBlock}>
                <p className={s.formNewArtP}>
                  Фотографии товара<span>не более 5 фотографий</span>
                </p>
                <div className={s.formNewArtBarImg}>
                  <div className={s.formNewArtImg}>
                  

                    <label htmlFor="files" className={s.formNewArtImgCover}>
                      <input
                        type="file"
                        id="files"
                        name="preview"
                        onChange={(e) => setFiles(e.target.files[0])}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className={s.formNewArtBlock}>
                <label for="price">Цена</label>
                <input
                  className={s.formNewArtInputPrice}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  name="price"
                  id="price"
                />
                <div className={s.formNewArtInputPriceCover}></div>
              </div>

              <button onClick={handleClick} className={s.formNewArtBtnPub} id="btnPublish">
                Опубликовать
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAdds;
