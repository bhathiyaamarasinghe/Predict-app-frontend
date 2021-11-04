import "./styles/dashboard.css";
import SideBar from "./shared/sideBar";
import { Row, Col } from "reactstrap";
import Upload from "./upolad";
import Result from "./result";
import Main from "./main";
import Predict from "./predict";
import ProgressBar from "./shared/progressIndicator";
import { Route } from "react-router-dom";

const Dashboard = (props) => {
  return (
    <div>
      <Row>
        <Col xs="4" sm="4" md="3" lg="2" xl="2">
          <SideBar />
        </Col>
        <Col xs="8" sm="8" md="9" lg="10" xl="10">
          <Route exact path="/" component={Upload} />
          <Route path="/upload" component={Upload} />
          <Route path="/results" component={Result} />
          <Route path="/predict" component={Predict} />
          {/* <ProgressBar /> */}
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
