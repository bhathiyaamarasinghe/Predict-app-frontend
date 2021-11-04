import "../styles/progressIndicator.css";
import { Progress } from "reactstrap";

const ProgressBar = (props) => {
  return (
    <div
      className="progressBar"
      style={{ verticalAlign: "center", padding: "30vh 0" }}
    >
      <div className="cardFrameProgress">
        <h5>{"Document is Scanning..."}</h5>
        <div style={{ padding: "10%" }}>
          <Progress color="success" value="25" />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
