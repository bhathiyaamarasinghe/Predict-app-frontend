import { useCallback } from "react";
import { Button } from "reactstrap";
import "../styles/uploadCard.css";
import Dropzone from "react-dropzone";

const UploadCard = (props) => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const fd = new FormData();
      fd.append("file", file, file.name);
      props.callBack(fd);
      return file;
    });
  }, []);

  const enterDrag = (e) => {
    console.log(e.id);
    if (e.id == "dragPDF") {
      e.style.border = "10px red solid";
    } else if (e.id == "dragConfig") {
      e.style.border = "10px red solid";
    }
  };

  return (
    <div>
      <div
        id={props.id}
        className="cardFrame"
        onDragOver={(e) => enterDrag(e.target)}
        onDragEnter={(e) => enterDrag(e.target)}
      >
        <Dropzone onDrop={onDrop} accept={props.accept}>
          {({ getRootProps, getInputProps, isDragActive }) => (
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
                  style={{
                    width: "100px",
                    borderRadius: "20px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    backgroundColor: "#373360",
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
