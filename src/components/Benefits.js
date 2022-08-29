import React from "react";
import "../index.css";

const Benefits = () => {
  return (
    <div className="benefits-main d-flex position-relative">
      <div>
        <h2>Benefits</h2>
        <p>Lorem ipsum dolor sit amet. Ut repellendus iusto .</p>
      </div>
      <div></div>
      <div className="blue-pill">
        <svg
          width="839"
          height="823"
          viewBox="0 0 839 823"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-165"
            y="423.048"
            width="1625"
            height="799"
            rx="399.5"
            transform="rotate(-45 -165 423.048)"
            fill="url(#paint0_linear_461_17)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_461_17"
              x1="647.5"
              y1="423.048"
              x2="647.5"
              y2="1222.05"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#76DBB3" />
              <stop offset="1" stop-color="#69BCF1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Benefits;
