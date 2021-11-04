import "./styles/upload.css";
import UploadCard from "./shared/uploadCard";
import { Container, Row, Col, Button } from "reactstrap";
import PdfUploadImg from "../../assets/images/cloud-computing.png";
import ConfigUploadImg from "../../assets/images/settings (1).png";
import { useHistory } from "react-router-dom";

import { uploadPDF, uploadConfig } from "./service";

function Upload() {
  var PDFs = [];
  var Configs = [];
  let history = useHistory();

  const handleStart = () => {
    PDFs.map((file) => {
      uploadPDF(file);
      return file;
    });

    Configs.map((file) => {
      uploadConfig(file);
      return file;
    });

    PDFs = [];
    Configs = [];

    history.push("/predict");
  };

  const addPDF = (file) => {
    PDFs.push(Object.assign(file));
  };

  const addConfig = (file) => {
    Configs.push(Object.assign(file));
  };

  return (
    <Container className="container">
      <Row>
        <Col
          style={{
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10vh",
          }}
        >
          <UploadCard
            id="dragPDF"
            title="Drag and Drop PDFs"
            imgPath={PdfUploadImg}
            altText="pdf upload image"
            accept={"application/pdf"}
            callBack={addPDF}
          />
          <UploadCard
            id="dragConfig"
            title="Drag and Drop Config Files"
            imgPath={ConfigUploadImg}
            altText="config upload image"
            accept={""}
            callBack={addConfig}
          />
          <Button
            rounded
            color="primary"
            style={{
              width: "100px",
              borderRadius: "20px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              backgroundColor: "#786ef8",
            }}
            onClick={handleStart}
          >
            Start
          </Button>{" "}
        </Col>
      </Row>
    </Container>
  );
}

export default Upload;
