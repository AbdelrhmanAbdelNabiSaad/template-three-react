import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PlanBox({ plan, index }) {
    const { img, title, amount, time, list } = plan;
    return (
      <>
        {index == 1 ? (
          <div className="box popular">
            <div className="label">Most Popular</div>
            <div className="title">{title}</div>
            <img src={img} alt="Image" />
            <div className="price">
              <span className="amount">{amount}</span>
              <span className="time">{time}</span>
            </div>
            <ul>
              {list.map((li) => (
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  {li}
                </li>
              ))}
            </ul>
            <a href="#">Choose Plan</a>
          </div>
        ) : (
          <div className="box">
            <div className="title">{time}</div>
            <img src={img} alt="Image" />
            <div className="price">
              <span className="amount">{amount}</span>
              <span className="time">{time}</span>
            </div>
            <ul>
              {list.map((li) => (
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  {li}
                </li>
              ))}
            </ul>
            <a href="#">Choose Plan</a>
          </div>
        )}
      </>
    );
}

export default PlanBox;