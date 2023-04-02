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