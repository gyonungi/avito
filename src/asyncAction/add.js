import { json } from "react-router-dom";
import { createAddError, getAdd } from "../store/reducers/add";

export const getAdds = () => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:8090/ads`);
    const data = res.json();

    data
      .then((result) => {
        dispatch(getAdd(result));
      })
      .catch((err) => {});
  };
};

export const getUserAdds = (id, cb) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:8090/ads?user_id=${id}`);
    const data = res.json();

    data
      .then((result) => {
        dispatch(getAdd(result));
        cb(result);
      })
      .catch((err) => {});
  };
};

export const getAddsUserId = (id) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:8090/ads?user_id=${id}`);
    const data = res.json();

    data
      .then((result) => {
        dispatch(getAdd(result));
      })
      .catch((err) => {});
  };
};

export const toCreateAdd = (userDate, token) => {
  return async (dispatch) => {
    try {
      const body = new FormData();

      let title = userDate.title;
      let description = userDate.description;
      let price = userDate.price;
      body.append("files", userDate.files[0]);

      await fetch(
        `http://localhost:8090/ads?title=${title}&descriptipn=${description}&price=${price}
       `,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${token}`,
          },
          body: body,
        }
      );
    } catch (err) {
      dispatch(createAddError);
    }
  };
};

export const CreateAddText = (userDate, token) => {
  return async (dispath) => {
    try {
      const body = new FormData();
      await fetch(
        `http://localhost:8090/adstext
      `,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(userDate),
        }
      );
    } catch (err) {
      dispath(createAddError);
    }
  };
};
