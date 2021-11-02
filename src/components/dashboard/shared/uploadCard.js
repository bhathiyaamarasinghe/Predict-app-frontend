import { useState, useCallback } from "react";
import { Button } from "reactstrap";
import "../styles/uploadCard.css";
import Dropzone from "react-dropzone";
import { uploadPDF } from "../service";

const UploadCard = (props) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const fd = new FormData();
      fd.append("file", file, file.name);
      uploadPDF(fd);
      return file;
    });
  }, []);

  return (
    <div>
      <div className="cardFrame">
        <Dropzone onDrop={onDrop} accept={props.accept}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <img
                  className="cardImage"
                  src={props.imgPath}
                  alt={props.altText}
                />
                <h5>{props.title}</h5>
                <Button
                  color="primary"
                  style={{
                    width: "100px",
                    borderRadius: "20px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                >
                  Upload
                </Button>{" "}
              </div>
            </section>
          )}
        </Dropzone>
      </div>
    </div>
  );
};

export default UploadCard;
