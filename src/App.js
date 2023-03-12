import React from "react";
import { useState, useCallback, useEffect } from "react";
import "./App.css";
import Chart from "./chart.js";
import usePrice from "./hooks/usePrice.js";
import Form from "./UI/Form";
import ChartMobile from "./chartMobile.js";

function App() {
  const [storage, setStorage] = useState(0);
  const [transfer, setTransfer] = useState(0);
  const [typeBunny, setTypeBunny] = useState([true, false]);
  const [typeScaleway, setTypeScaleway] = useState([true, false]);

  const [blackBlaze, bunny, scaleway, vultr] = usePrice(
    storage,
    transfer,
    typeBunny,
    typeScaleway
  );
  useEffect(() => {
    console.log(breakPoint);
  });

  const breakPoint = window.visualViewport.width;

  const changeStorage = (event) => {
    setStorage(event.target.value);
  };
  const changeTransfer = (event) => {
    setTransfer(event.target.value);
  };

  return (
    <div className={breakPoint > 780 ? "App" : "Appmobile"}>
      <div className={breakPoint > 780 ? "new" : "newstorage"}>
        <div className="itemzero">0</div>
        <div
          style={{
            marginTop: 55,
            borderRight: 1,
            width: 4,
            height: 27.5,
            background: "black",
          }}
        ></div>

        <Form
          id={"Storage: "}
          name={"storage"}
          onChange={changeStorage}
          detail={storage}
        />
        <div
          style={{
            marginTop: 55,
            borderLeft: 1,
            marginLeft: 3.5,
            width: 4,
            height: 27.5,
            background: "black",
          }}
        ></div>
        <div className="item">1000</div>
      </div>

      <div className={breakPoint > 780 ? "new" : "newmobile"}>
        <div className="itemzero">0</div>
        <div
          style={{
            marginTop: 55,
            borderRight: 1,
            width: 4,
            height: 27.5,
            background: "black",
          }}
        ></div>
        <Form
          id={"Transfer:"}
          name={"transfer"}
          onChange={changeTransfer}
          detail={transfer}
        />
        <div
          style={{
            marginTop: 55,
            borderLeft: 1,
            marginLeft: 3.5,
            width: 4,
            height: 27.5,
            background: "black",
          }}
        ></div>
        <div className="item">1000</div>
      </div>
      <div className={breakPoint > 780 ? "picture" : "picturemobile"}>
        {breakPoint > 780 ? (
          <Chart
            blackBlaze={blackBlaze}
            bunny={bunny}
            scaleway={scaleway}
            vultr={vultr}
            typeBunny={typeBunny}
            setTypeBunny={setTypeBunny}
            typeScaleway={typeScaleway}
            setTypeScaleway={setTypeScaleway}
          />
        ) : (
          <ChartMobile
            blackBlaze={blackBlaze}
            bunny={bunny}
            scaleway={scaleway}
            vultr={vultr}
            typeBunny={typeBunny}
            setTypeBunny={setTypeBunny}
            typeScaleway={typeScaleway}
            setTypeScaleway={setTypeScaleway}
          />
        )}
      </div>
    </div>
  );
}

export default App;
