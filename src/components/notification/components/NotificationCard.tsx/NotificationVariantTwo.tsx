import React from "react";
import "./NotificationCard.scss";
import Checkmark from "../../../../assets/icons/Checkmark";
import Clock from "../../../../assets/icons/Clock";
function NotificationVariantTwo() {
  return (
    <div className="notificationCard variant">
      <div>
        <Clock />
        <p className="save">
          <Checkmark />
        </p>
      </div>
      <div className="variantInfo Two">
        <h3>Notify me when any wallet dormant for</h3>
        <div>
          <select name="" id="">
            <option value="">{">"} 30 days</option>
          </select>
        </div>
        <h3>becomes active</h3>
      </div>
    </div>
  );
}

export default NotificationVariantTwo;
