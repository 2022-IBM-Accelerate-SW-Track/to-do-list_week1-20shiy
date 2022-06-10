import React, { Component } from 'react';
import "./About.css";
import profile_image from "../assets/LinShiying.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src = {profile_image}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Shiying Lin</div>
        <div className="brief_description">
          Hi! This is Shiying
        </div>
      </div>
    </div>
  </div>

    )
  }
}