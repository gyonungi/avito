import { getAdd } from "../store/reducers/add";

export const getAddsId = (pk,cb) => {
    return async (dispatch) => {
      const res = await fetch(`http://localhost:8090/ads/${pk}`);
      const data = res.json();
      data
        .then((result) => {
           dispatch(getAdd(result))
           cb(result)
        })
        .catch((err) => {});
    };
  };

  export const deleteAddsId = (pk,token) => {
    return async (dispatch) => {
      const res = await fetch(`http://localhost:8090/ads/${pk}`,{
        method: "DELETE",
        headers: { "content-type": "application/json" ,
        authorization: `Bearer ${token}`,
    },
      });
      const data = res.json();
      data
        .then((result) => {
           dispatch(getAdd(result))
        })
        .catch((err) => {});
    };
  };

  export const editAddsId = (pk,token) => {
    return async (dispatch) => {
      const res = await fetch(`http://localhost:8090/ads/${pk}`,{
        method: "PATCH",
        headers: { "content-type": "application/json" ,
        authorization: `Bearer ${token}`,
    },
      });
      const data = res.json();
      data
        .then((result) => {
           dispatch(getAdd(result))
        })
        .catch((err) => {});
    };
  };