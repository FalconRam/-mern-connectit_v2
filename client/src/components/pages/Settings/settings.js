import React from "react";

import { useHistory } from "react-router-dom";

const Settings = () => {
    const history = useHistory();
   let user = JSON.parse(localStorage.getItem("profile"));
   if (!user) {
     if (window.location.pathname !== "/auth") history.push("/auth");
   }
  return (
    <>
      <div className="customMargin">Comming Soon...</div>
    </>
  );
};

export default Settings;
