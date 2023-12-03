import platform from "../../assets/platform.png";
import "./PlatformInfo.scss";
import Eye from "../../assets/eye.png";

function PlatformInfo() {
  return (
    <div className="platformInfo">
      <div className="platformImg">
        <img src={platform} />
      </div>
      <div className="platformContent">
        <header>
          <img src={Eye} style={{ width: "32px", height: "32px" }} />
        </header>
        <h4>
          Watch what the <br /> whales are doing
        </h4>
        <p>
          All whales are not equal. Know exactly what the whales impacting YOUR
          portfolio are doing.
        </p>
      </div>
    </div>
  );
}

export default PlatformInfo;
