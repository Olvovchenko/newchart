import React from "react";

const ChartMobile = ({
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
    <svg width="300" height="800">
      <g style={{ stroke: "black", strokeWidth: "5px" }}>
        <line
          x1="133"
          y1="0"
          x2="133"
          y2="195"
          transform="rotate(270,270,240)"
        />
      </g>

      <g class="bar">
        <svg
          x="31"
          y="380"
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
        <text
          x={(blackBlaze * 7) / 2.2 + 143}
          y="9.5"
          dy=".35em"
          transform="rotate(270,270,240)"
          font-size="12.8"
        >
          {blackBlaze.toFixed(2)}
          {"$"}
        </text>
        <rect
          transform="rotate(270,270,240)"
          width={(blackBlaze * 7) / 2.2}
          x="136"
          height="29"
          fill={blackBlaze === minPrice ? "red" : "grey"}
        ></rect>
        <text x="45" y="430" style={{ fontSize: 12.5 }} text-anchor="middle">
          blackblaze
        </text>
      </g>
      <g class="bar">
        <svg
          x="86"
          y="380"
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
          transform="rotate(270,270,240)"
          width={(bunny * 7) / 2.2}
          height="29"
          x="136"
          y="55"
          fill={bunny === minPrice ? "orange" : "grey"}
        ></rect>
        <text
          x={(bunny * 7) / 2.2 + 143}
          y="68"
          dy=".35em"
          transform="rotate(270,270,240)"
          font-size="12.8"
        >
          {bunny.toFixed(2)}
          {"$"}
        </text>
        <text x="100" y="430" style={{ fontSize: 12.5 }} text-anchor="middle">
          bunny
        </text>
        <circle
          cx="114"
          cy="435"
          r="4"
          stroke="black"
          fill={typeBunny[0] ? "black" : "white"}
          onClick={handleChangeHDD}
        />
        <circle
          cx="114"
          cy="447"
          r="4"
          stroke="black"
          fill={typeBunny[0] ? "white" : "black"}
          onClick={handleChangeSSD}
        />
        <text x="110" y="439" style={{ fontSize: "10" }} text-anchor="end">
          HDD
        </text>
        <text x="110" y="451" style={{ fontSize: "10" }} text-anchor="end">
          SSD
        </text>
      </g>
      <g class="bar">
        <svg
          x="141"
          y="380"
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
          transform="rotate(270,270,240)"
          width={(scaleway * 7 + 1) / 2.2}
          height="29"
          x="136"
          y="110"
          fill={scaleway === minPrice ? "purple" : "grey"}
        ></rect>
        <text
          x={(scaleway * 7) / 2.2 + 144}
          y="123"
          dy=".35em"
          transform="rotate(270,270,240)"
          font-size="12.8"
        >
          {scaleway.toFixed(2)}
          {"$"}
        </text>
        <text x="155" y="430" style={{ fontSize: 12.5 }} text-anchor="middle">
          scaleway
        </text>
        <circle
          cx="169"
          cy="435"
          r="4"
          stroke="black"
          fill={typeScaleway[0] ? "black" : "white"}
          onClick={handleChangeMulti}
        />
        <circle
          cx="169"
          cy="447"
          r="4"
          stroke="black"
          fill={typeScaleway[0] ? "white" : "black"}
          onClick={handleChangeSingle}
        />
        <text x="164" y="439" style={{ fontSize: "12" }} text-anchor="end">
          Multi
        </text>
        <text x="164" y="451" style={{ fontSize: "12" }} text-anchor="end">
          Single
        </text>
      </g>
      <g class="bar">
        <svg
          x="196"
          y="380"
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
          transform="rotate(270,270,240)"
          width={(vultr * 7) / 2.2}
          height="29"
          x="136"
          y="165"
          fill={vultr === minPrice ? "blue" : "grey"}
        ></rect>
        <text
          x={(vultr * 7) / 2.2 + 143}
          y="178"
          dy=".35em"
          transform="rotate(270,270,240)"
          font-size="12.8"
        >
          {vultr.toFixed(2)}
          {"$"}
        </text>
        <text x="210" y="430" style={{ fontSize: 12.5 }} text-anchor="middle">
          vultr
        </text>
      </g>
    </svg>
  );
};

export default ChartMobile;
