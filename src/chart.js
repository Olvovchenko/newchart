import React from "react";
import Icons from "./Icons";

const Chart = ({
  blackBlaze,
  bunny,
  scaleway,
  vultr,
  typeBunny,
  setTypeBunny,
  typeScaleway,
  setTypeScaleway,
}) => {
  const minPrice = Math.min(blackBlaze, bunny, scaleway, vultr);
  const handleChangeHDD = () => {
    setTypeBunny([true, false]);
  };
  const handleChangeSSD = () => {
    setTypeBunny([false, true]);
  };
  const handleChangeMulti = () => {
    setTypeScaleway([true, false]);
  };
  const handleChangeSingle = () => {
    setTypeScaleway([false, true]);
  };
  return (
    <svg width="1000" margin="50">
      <g style={{ stroke: "black", strokeWidth: "5px" }}>
        <line x1="133" y1="0" x2="133" y2="135" />
      </g>

      <g class="bar">
        <svg
          x="102"
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="29"
          fill="currentColor"
          // class="bi bi-0-square"
          viewBox="0 0 16 16"
        >
          <path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99ZM8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895Z" />
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
        </svg>
        <text x={blackBlaze * 7 + 143} y="9.5" dy=".35em">
          {blackBlaze}
        </text>
        <rect
          width={blackBlaze * 7}
          x="136"
          height="29"
          fill={blackBlaze === minPrice ? "red" : "grey"}
        ></rect>
        <text x="1" y="13.5" style={{ fontSize: 17 }}>
          blackblaze
        </text>
      </g>
      <g class="bar">
        <svg
          x="102"
          y="35"
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="29"
          fill="currentColor"
          // class="bi bi-0-square"
          viewBox="0 0 16 16"
        >
          <path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99ZM8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895Z" />
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
        </svg>
        <rect
          width={bunny * 7}
          height="29"
          x="136"
          y="35"
          fill={bunny === minPrice ? "orange" : "grey"}
        ></rect>
        <text x={bunny * 7 + 143} y="48" dy=".35em">
          {bunny}
        </text>
        <text x="1" y="45" style={{ fontSize: 17 }}>
          bunny
        </text>
        <circle
          cx="10"
          cy="52"
          r="4"
          stroke="black"
          fill={typeBunny[0] ? "black" : "white"}
          onClick={handleChangeHDD}
        />
        <circle
          cx="55"
          cy="52"
          r="4"
          stroke="black"
          fill={typeBunny[0] ? "white" : "black"}
          onClick={handleChangeSSD}
        />
        <text x="15" y="57" style={{ fontSize: "82%" }}>
          HDD
        </text>
        <text x="60" y="57" style={{ fontSize: "82%" }}>
          SSD
        </text>
      </g>
      <g class="bar">
        <svg
          x="102"
          y="70"
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="29"
          fill="currentColor"
          // class="bi bi-0-square"
          viewBox="0 0 16 16"
        >
          <path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99ZM8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895Z" />
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
        </svg>

        <rect
          width={scaleway * 7 + 1}
          height="29"
          x="136"
          y="70"
          fill={scaleway === minPrice ? "purple" : "grey"}
        ></rect>
        <text x={scaleway * 7 + 144} y="83" dy=".35em">
          {scaleway}
        </text>
        <text x="1" y="80" style={{ fontSize: 17 }}>
          scaleway
        </text>
        <circle
          cx="10"
          cy="90"
          r="4"
          stroke="black"
          fill={typeScaleway[0] ? "black" : "white"}
          onClick={handleChangeMulti}
        />
        <circle
          cx="55"
          cy="90"
          r="4"
          stroke="black"
          fill={typeScaleway[0] ? "white" : "black"}
          onClick={handleChangeSingle}
        />
        <text x="15" y="95" style={{ fontSize: "82%" }}>
          Multi
        </text>
        <text x="60" y="95" style={{ fontSize: "82%" }}>
          Single
        </text>
      </g>
      <g class="bar">
        <svg
          x="102"
          y="105"
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="29"
          fill="currentColor"
          // class="bi bi-0-square"
          viewBox="0 0 16 16"
        >
          <path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99ZM8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895Z" />
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
        </svg>

        <rect
          width={vultr * 7}
          height="29"
          x="136"
          y="105"
          fill={vultr === minPrice ? "blue" : "grey"}
        ></rect>
        <text x={vultr * 7 + 143} y="118" dy=".35em">
          {vultr}
        </text>
        <text x="1" y="116.5" style={{ fontSize: 17 }}>
          vultr
        </text>
      </g>
    </svg>
  );
};
export default Chart;
