import React from "react";
import "./NotificationCard.scss";
import Stats from "../../../../assets/icons/Stats";
import Checkmark from "../../../../assets/icons/Checkmark";
function NotificationVariant() {
  return (
    <div className="notificationCard variant">
      <div>
        <Stats />
        <p className="save">
          <Checkmark />
        </p>
      </div>
      <div className="variantInfo">
        <h3>Notify me when any wallets move more than</h3>
        <div>
          <select name="" id="">
            <option value="">$1,000.00</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default NotificationVariant;
