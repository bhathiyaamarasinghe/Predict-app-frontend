import "./styles/upload.css";
import SideBar from "./shared/sideBar";
import { Container, Row, Col } from "reactstrap";
import Upload from "./upolad";
import Result from "./result";
import Main from "./main";

const Dashboard = (props) => {
  return (
    <Container>
      <Row>
        <Col
          xs="2"
          sm="2"
          md="2"
          lg="2"
          xl="2"
          style={{ border: "1px solid red" }}
        >
          <SideBar />
        </Col>
        <Col style={{ border: "1px solid red" }}>
          {/* <Upload /> */}
          {/* <Result /> */}
          <Main />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
