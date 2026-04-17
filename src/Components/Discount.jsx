import React from "react";
import discount from "../assets/discount.png";

function Discount() {
  return (
    <>
      <div className="discount" id="discount">
        <div className="image">
          <div className="content">
            <h2>We Have A Discount</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi asperiores consectetur, recusandae ratione provident
              necessitatibus, cumque delectus commodi fuga praesentium beatae.
              Totam vel similique laborum dicta aperiam odit doloribus corporis.
            </p>
            <img src={discount} alt="Image" />
          </div>
        </div>
        <div className="form">
          <div className="content">
            <h2>Request A Discount</h2>
            <form action="#">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="input"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="input"
              />
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Your Phone"
                className="input"
              />
              <textarea
                name="message"
                id="message"
                              placeholder="Tell Us About Your Needs"
                              className="input"
              ></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Discount;
