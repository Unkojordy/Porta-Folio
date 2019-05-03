import React from "react";
import ProfilePic from "../../../static/assets/images/auth/profilePic.jpg";

export default  function() {
  return ( 
  <div className="content-page-wrapper">
    <div
      className="left-column"
      style={{
        background: "url(" + ProfilePic + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      />      
      <div className="right-column">
      Bacon ipsum dolor amet boudin fatback pork tri-tip capicola picanha. 
      Chuck landjaeger pork belly meatloaf beef ribs, pork turducken prosciutto 
      capicola andouille strip steak t-bone spare ribs pork loin ham hock. 
      Tail turducken pork chop, ball tip meatball andouille spare ribs burgdoggen 
      cupim salami biltong pork belly landjaeger. Shank pastrami burgdoggen t-bone 

      Ham hock burgdoggen jerky tenderloin, kevin pancetta salami kielbasa pork 
      belly short ribs alcatra swine capicola.
      </div>
  </div>
  )
}