import AppURL from "../API/AppURL";
import CreateDataContext from "./CreateDataContext";
import axios from "axios";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

const headers = {
  "x-api-key": "Zjc2MDQ0MmExNDg5NDgzNzE386nux08D52wO7uTfE32TypyzZaueDYTaGUz",
  "Content-Type": "application/json",
};

const params = {
  username: "f34629a2-5ff2-4101-a385-58ff5ccb725b",
  user_alias: "love",
  password: "123456",
};

let config = {
  headers: headers,
  params: params,
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await axios({
        method: "post",
        url: "https://dev-users-service.yobored.com/api/v1/login-with-username-password.json",
        data: params, // you are sending body instead
        headers: headers,
      });

      console.log(response).data;
    } catch (err) {
      console.log(err);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };

// const signup =
//   (dispatch) =>
//   async ({ email, password }) => {
//     try {
//       const response = await trackerApi.post("/signup", { email, password });
//       await AsyncStorage.setItem("token", response.data.token);
//       dispatch({ type: "signup", payload: response.data.token });

//       navigate("TrackList");
//     } catch (err) {
//       dispatch({
//         type: "add_error",
//         payload: "Something went wrong with sign up",
//       });
//     }
//   };

export const { Provider, Context } = CreateDataContext(
  authReducer,
  { signup },
  { token: null, errorMessage: "" }
);
