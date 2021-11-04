import { Row, Col, Button } from "reactstrap";
import "./styles/main.css";
import TestImg from "../../assets/images/test.jpg";
import PlusImg from "../../assets/images/plus.png";
import MinusImg from "../../assets/images/minus.png";

const Main = (props) => {
  return (
    <Row>
      <Col className="pdfPreviewContainer" xs="12" sm="12" md="9" lg="9" xl="9">
        <div className="pdfPreview" style={{ border: "1px solid red" }}>
          <img className="img" src={TestImg} alt={"item.altText"} />
        </div>
        <div>
          <Col xs="6" sm="6" md="6" lg="6" xl="6" style={{ padding: "0 2%" }}>
            <div
              style={{
                display: "flex",
                width: "100px",
                justifyContent: "space-between",
              }}
            >
              <img
                className="imgBtn zoom"
                src={MinusImg}
                alt={"item.altText"}
              />
              <img className="imgBtn zoom" src={PlusImg} alt={"item.altText"} />
            </div>
          </Col>
        </div>
      </Col>
      <Col xs="12" sm="12" md="3" lg="3" xl="3">
        <div className="options" style={{ border: "1px solid red" }}>
          fsfsdfsf
        </div>
      </Col>
    </Row>
  );
};

export default Main;
