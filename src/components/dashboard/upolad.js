import "./styles/upload.css";
import UploadCard from "./shared/uploadCard";
import { Container, Row, Col, Button } from "reactstrap";
import PdfUploadImg from "../../assets/images/cloud-computing.png";
import ConfigUploadImg from "../../assets/images/settings (1).png";

function Upload() {
  return (
    <Container className="container">
      <Row>
        <Col
          // xs="6" sm="6" md="6" lg="6" xl="6"
          style={{ margin: "auto" }}
        >
          <UploadCard
            title="Drag and Drop PDFs"
            imgPath={PdfUploadImg}
            altText="pdf upload image"
            accept={"application/pdf"}
          />
          <div style={{ height: "3vh" }}></div>
          <UploadCard
            title="Drag and Drop Config Files"
            imgPath={ConfigUploadImg}
            altText="config upload image"
            accept={""}
          />
        </Col>
        <Col
          // xs="3"
          // sm="3"
          // md="3"
          // lg="3"
          // xl="3"
          style={{ textAlign: "center", alignItems: "end" }}
        >
          <div style={{ height: "90%" }}></div>
          <Button
            rounded
            color="primary"
            style={{
              width: "100px",
              borderRadius: "20px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            Start
          </Button>{" "}
        </Col>
      </Row>
    </Container>
  );
}

export default Upload;
