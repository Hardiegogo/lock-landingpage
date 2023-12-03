import "./Notification.scss";
import Bell from "../../assets/icons/Bell";
import AutoCarousel from "../infinite-auto-carousel/AutoCarousel";

function Notification() {
  return (
    <div className="notification">
      <div className="notificationInfo">
        <header>
          <Bell />
        </header>
        <h4>Get notified when a highly correlated whale makes a move</h4>
        <p>
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </p>
      </div>
      <div className="notificationCarousel">
        <AutoCarousel />
      </div>
    </div>
  );
}

export default Notification;
