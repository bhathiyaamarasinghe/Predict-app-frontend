import { Link } from "react-router-dom";

import { Container, Row, Media } from "reactstrap";
import "../styles/sideBar.css";
import PersonImg from "../../../assets/images/man.png";

const SideBar = (props) => {
  return (
    <Container>
      {/* <Collapse> */}
      <Row className="bar">
        {/* title */}
        <div style={{ margin: "0", padding: "10%" }}>
          <i class="fab fa-500px"></i> Teams.co
        </div>

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
          <div className="option"> Upload </div>
          <div className="option"> <Link style={{textDecoration:'none' , color:'inherit'}} to="/predict">Predict</Link></div>
          <div className="option"> Results</div>
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
    </Container>
  );
};

export default SideBar;
