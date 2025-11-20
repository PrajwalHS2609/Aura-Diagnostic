import React from "react";
import "./HomeWidget.css";
import HomeWidgetContent2 from "./HomeWidgetContent2";
const HomeWidget = () => {
  return (
    <div className="homeWidgetContainer">
      <div className="homeWidgetWrapper">
        <div className="homeWidgetContent">
          <Image
            src="https://images.unsplash.com/photo-1624957485502-cd76eb9ac7fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJsb29kJTIwdGVzdGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
        <div className="homeWidgetContent">
          <HomeWidgetContent2 />
        </div>
      </div>
    </div>
  );
};

export default HomeWidget;
