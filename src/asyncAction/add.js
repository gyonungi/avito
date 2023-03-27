import { createAddError, getAdd } from "../store/reducers/add";

export const getAdds = (userDate) => {
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

export const toCreateAdd = (userDate) => {
  return async (dispatch) => {
    try {
      console.log(userDate);

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
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InF3ZXJ0eTFAbWFpbC5ydSIsInJvbGUiOiJ1c2VyIiwiZXhwIjoxNjc5ODI5NDg2fQ.Qw-kbpT7tgP_Fadbr0BUbWtrET9SxtP7oTb3820Je6Y",
          },
          body: body,
        }
      );
      console.log(userDate.detail);
    } catch (err) {
      dispatch(createAddError);
    }
  };
};
