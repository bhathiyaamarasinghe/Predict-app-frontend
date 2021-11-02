import axios from "axios";
import { PDF_UPLOAD, CONFIG_UPLOAD } from "../../constants";

export const uploadPDF = (props) => {
  axios
    .post(PDF_UPLOAD, props, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const uploadConfig = (props) => {
  axios
    .post(CONFIG_UPLOAD, props, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const downloadPDF = (props) => {};

export const downloadConfig = (props) => {};
