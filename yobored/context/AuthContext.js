import AppURL from "../API/AppURL";
import CreateDataContext from "./CreateDataContext";
import axios from "axios";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const headers = {
  "x-api-key": "Zjc2MDQ0MmExNDg5NDgzNzE386nux08D52wO7uTfE32TypyzZaueDYTaGUz",
};

// const params = {
//   username: "33486aee-e78f-4dc4-b9fa-695d39ad3de8",
//   password: password,
//   build_version: "2.1.6",
//   firebase_token: "",
//   device_model: "",
//   user_alias: username,
//   public_key:
//     "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCt2WXGAyLxIT1ja0qm9X33xuIwcNxd9k8e+HrZygsQgLTVoX/WVVgv3eAMctoQ/pJv9tzaGfVwz5WJIzjec22E/5jp8ruPl71agYPdIr9wqPI1f0JZ3DxoUuShKm4o9xyd4cDD01hA96mv8hFxamoVc7vIbmxqP3mXBdrKxgrZ/QIDAQAB",
//   password: "123456",
//   os_version: "15.2",
//   device_type: "2",
// };

// let config = {
//   headers: headers,
//   params: params,
// };

const signup = (dispatch) => {
  return async ({ username, password }) => {
    console.log(username);
    console.log(password);
    try {
      const response = await axios({
        method: "post",
        url: "https://dev-users-service.yobored.com/api/v1/signup.json",
        headers: headers,
        data: {
          username: "22597eb6-7b2e-4ea8-9873-3071991f13f4",
          password: password,
          build_version: "2.1.6",
          firebase_token: "",
          device_model: "Simulator iPhone14,2",
          user_alias: username,
          public_key:
            "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDP3qHzPSUSfvEzN6RcxEX5MHFqsVCnKxlgNMVIW2GN6ZajMgPWeze7Mog7Uy1dQiBZL3emK8J2fmN4rkR8Fw+l5y9PsLHagGz7DouZxzeOQ/wVaG1zApesw8lX6d6GYEPuIA+vllIS1+zi7Pp4I4Rn7pqy9k/tl9wgba51nKBIlwIDAQAB",
          os_version: "15.2",
          device_type: "2",
        },
      });

      console.log(response);
    } catch (err) {
      console.log(err);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };
};

export const { Provider, Context } = CreateDataContext(
  authReducer,
  { signup },
  { token: null, errorMessage: "" }
);
