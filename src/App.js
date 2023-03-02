import React from "react";
import { useState, useCallback, useEffect } from "react";
import "./App.css";
import Chart from "./chart.js";
import usePrice from "./hooks/usePrice.js";
import Form from "./UI/Form";
import ChartMobile from "./chartMobile.js";

function App() {
  const [storage, setStorage] = useState(5);
  const [transfer, setTransfer] = useState(7);
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
    <div className="App">
      <Form
        id={"storage"}
        name={"storage"}
        onChange={changeStorage}
        detail={storage}
      />
      <Form
        id={"transfer"}
        name={"transfer"}
        onChange={changeTransfer}
        detail={transfer}
      />
      {breakPoint > 900 ? (
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
  );
}

export default App;
