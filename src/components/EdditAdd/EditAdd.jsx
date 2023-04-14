import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SetImage, dellImage, editAddsId } from "../../asyncAction/addsdescrip";
import s from "./EditAdd.module.css";
import { closeRevModal } from "../../store/reducers/review";

const EditAdd = ({ setOpen }) => {
  const token = document.cookie.split("=")[1];
  const { refresh_token } = JSON.parse(token);
  const dispatch = useDispatch();
  const params = useParams();
  const { addList } = useSelector((state) => state.adds);
  const [file_url, setFiles] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  function EditAddss(e) {
    e.preventDefault();
    let dto = {
      title,
      description,
      price,
    };
    dispatch(editAddsId(Number(params.id), dto, refresh_token));
    setOpen();
  }
  const setImage = async (e) => {
    dispatch(SetImage(Number(params.id),e.target.files[0],refresh_token));
  }; 
  function deleteImages(file_url) {
    dispatch(dellImage(Number(params.id),file_url,refresh_token));
  }

  return (
    <>
      <div className={s.containerBg}>
        <div className={s.modalBlock}>
          <div className={s.modalContent}>
            <h3 className={s.modalTitle}>Редактировать объявление</h3>
            <div className={s.modalBtnClose} >
              <div className={s.modalBtnCloseLine}></div>
            </div>
            <form
              onSubmit={(e) => EditAddss(e)}
              className={s.modalFormNewArt}
              id="formNewArt"
              action="#"
            >
              <div className={s.FormNewArtBlock}>
                <label for="title">Название</label>
                <input
                  className={s.formNewArtInput}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  name="name"
                  id="title"
                  placeholder={addList?.title}
                />
              </div>
              <div className={s.FormNewArtBlock}>
                <label for="description">Описание</label>
                <textarea
                  className={s.formNewArtArea}
                  onChange={(e) => setDescription(e.target.value)}
                  name="text"
                  id="description"
                  cols="auto"
                  rows="10"
                  placeholder={addList?.description}
                ></textarea>
                <p className={s.formNewArtP}>
                  Фотографии товара<span>не более 5 фотографий</span>
                </p>
                <div className={s.formNewArtBarImg} >
                      {addList.images.map((item) => (
                     
                        <img  src={`http://localhost:8090/${item?.url}`} onClick={() => deleteImages(item.url)}/>
                       
                      ))}
                  <div className={s.formNewArtImg}>
                    <label htmlFor="SetImage" >
                    <div className={s.formNewArtImgCover}>
                      <img src="" alt="" />
                      </div>
                      <input
                        type="file"
                        id="SetImage"
                        name="file"
                        onChange={(e) => setImage(e)}
                        />
                    </label>
                  </div>

               
              
                </div>
              </div>
              <div className={s.FormNewArtBlock + " " + s.blockPrice}>
                <label for="price">Цена</label>
                <input
                  className={s.formNewArtInputPrice}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  name="price"
                  placeholder={addList?.price}
                  id="price"
                />
                <div className={s.formNewArtInputPriceCover}></div>
              </div>

              <button className={s.formNewArtBtnPub} id="btnPublish">
                Сохранить
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAdd;
