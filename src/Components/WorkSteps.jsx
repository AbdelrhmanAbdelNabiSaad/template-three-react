import React from "react";
import work from '../assets/work-steps.png'
import work1 from '../assets/work-steps-1.png'
import work2 from '../assets/work-steps-2.png'
import work3 from '../assets/work-steps-3.png'
import WorkBox from "./workBox";

function WorkSteps() {
    const works = [
      {
        image: work1,
        title: "Bussiness Analysis",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
                recusandae debitis vel`,
      },
      {
        image: work2,
        title: "Architecture",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
                recusandae debitis vel`,
      },
      {
        image: work3,
        title: "Development",
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
                recusandae debitis vel`,
      },
    ];
    return (
      <>
        <div className="work-steps" id="work-steps">
          <h2 className="main-title">How It Work ?</h2>
          <div className="container">
            <div className="image">
              <img src={work} alt="" />
            </div>
            <div className="info">
              {works.map((work, index) => (
                <WorkBox work={work} key={index} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
}

export default WorkSteps;