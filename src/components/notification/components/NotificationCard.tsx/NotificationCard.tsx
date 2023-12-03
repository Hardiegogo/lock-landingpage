import React from "react";
import "./NotificationCard.scss";
import NotificationBell from "../../../../assets/icons/NotificationBell";
function NotificationCard() {
  return (
    <div className="notificationCard">
      <div>
        <NotificationBell />
      </div>
      <h3>We’ll be sending notifications to you here</h3>
      <div>
        <input type="email" name="" id="" />
      </div>
      <p className="save">Save</p>
    </div>
  );
}

export default NotificationCard;
