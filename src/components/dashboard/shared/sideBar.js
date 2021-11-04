import { Link } from "react-router-dom";
import { Container, Row, Media } from "reactstrap";
import "../styles/sideBar.css";
import PersonImg from "../../../assets/images/man.png";

const SideBar = (props) => {
  return (
    <div>
      {/* <Collapse> */}
      <Row className="bar">
        {/* title */}
        <div style={{ margin: "0", padding: "10%" }}>Teams.co</div>

        {/* profile */}
        <div>
          <Media>
            <Media href="#">
              <img className="cardImage" src={PersonImg} alt={"item.altText"} />
            </Media>
            <Media body>
              <Media heading>Jone Doe</Media>
              Software Engineer
            </Media>
          </Media>
        </div>

        {/* options */}
        <div>
          <Link to="/upload" style={{ textDecoration: "none" }}>
            <div className="option"> Upload </div>
          </Link>
          <Link to="/predict" style={{ textDecoration: "none" }}>
            <div className="option"> Predict</div>
          </Link>
          <Link to="/results" style={{ textDecoration: "none" }}>
            <div className="option"> Results</div>
          </Link>
        </div>

        {/* footer */}
        <div>
          <div className="footer">
            <div style={{ textAlign: "right" }}>
              <i class="fas fa-ellipsis-v"></i>
            </div>
            <div style={{ textAlign: "left" }}>
              <i class="fas fa-users"></i>
              <p style={{ fontWeight: "bold" }}>Help </p>
              <p style={{ fontSize: "10px" }}>support</p>
            </div>
          </div>
        </div>
      </Row>
      {/* </Collapse> */}
    </div>
  );
};

export default SideBar;
