import { Container, Row, Col, Button } from "reactstrap";
import "./styles/result.css";

const Result = (props) => {
  return (
    <Container xs="6" sm="6" md="6" lg="6" xl="6">
      <div className="resultContainer">
        <h5 style={{ textAlign: "start" }}>Your Results</h5>

        <hr />

        <Row>
          <div>
            <Col
              className="resultCard"
              xs="6"
              sm="6"
              md="6"
              lg="6"
              xl="6"
              style={{ height: "100px" }}
            >
              <div>Uploaded Files</div>
              <div>
                <Button
                  style={{
                    color: " rgba(110, 96, 255, 255)",
                    backgroundColor: "#fff",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    border: "none",
                    borderRadius: "15px",
                    width: "60px",
                  }}
                  disabled
                >
                  65
                </Button>
              </div>
            </Col>
          </div>
          <div>
            <Col
              className="resultCard"
              style={{ height: "100px" }}
              xs="6"
              sm="6"
              md="6"
              lg="6"
              xl="6"
            >
              <div>Get predicted as csv</div>
              <div>
                <Button
                  style={{
                    color: "#fff",
                    backgroundColor: "rgba(110, 96, 255, 255)",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    border: "none",
                    borderRadius: "15px",
                    // width: "60px",
                  }}
                  disabled
                >
                  Download
                </Button>
              </div>
            </Col>
          </div>
        </Row>
      </div>
    </Container>
  );
};

export default Result;
