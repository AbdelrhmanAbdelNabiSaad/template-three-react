import React from "react";
import event from '../assets/events.png'

function Event() {
    return (
      <>
        <div className="event" id="event">
          <div className="dots dots-up"></div>
          <div className="dots dots-down"></div>
          <h2 className="main-title">Latest Event</h2>
          <div className="container">
            <img src={event} alt="" />
            <div className="info">
              <div className="time">
                <div className="unit">
                  <span>15</span>
                  <span>Days</span>
                </div>
                <div className="unit">
                  <span>88</span>
                  <span>Hours</span>
                </div>
                <div className="unit">
                  <span>45</span>
                  <span>Miuntes</span>
                </div>
                <div className="unit">
                  <span>55</span>
                  <span>Seconds</span>
                </div>
              </div>
              <h2 className="title">Tech Master Event 2026</h2>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
                tenetur doloremque iusto ut adipisci quam ratione aliquam
                excepturi nulla in harum, veritatis porro
              </p>
            </div>
            <div className="subscribe">
              <form action="#">
                <input type="email" placeholder="Enter Your Email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </>
    );
}

export default Event;