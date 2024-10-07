import { useState, Fragment } from "react";
import style from "./index.module.less";
import bgs from "../../data/bgs.json";
import cars from "../../data/cars.json";
import models from "../../data/models.json";
import Draggable from "react-draggable";

export default function OwnerAvatorCustomize() {
  const [selectedBg, setSelectedBg] = useState(bgs[4].url);
  const [activedBg, setActivedBg] = useState(bgs[4].url);
  const [selectedCar, setSelectedCar] = useState(cars[8].url);
  const [activedCar, setActivedCar] = useState(cars[8].url);
  const [selectedModel, setSelectedModel] = useState(models[0].url);
  const [activedModel, setActivedModel] = useState(models[0].url);
  const [inputVal, setInputVal] = useState("京A 88888");
  const [activedTab, setActivedTab] = useState(1);

  function handleBgClick(e: any) {
    setSelectedBg(e.url);
    setActivedBg(e.url);
  }

  function handleCarClick(e: any) {
    setSelectedCar(e.url);
    setActivedCar(e.url);
  }

  function handleModelClick(e: any) {
    setSelectedModel(e.url);
    setActivedModel(e.url);
  }

  function handleInput(e: any) {
    setInputVal(e.target.value);
  }

  function tabCLick(e: number) {
    setActivedTab(e);
  }

  return (
    <Fragment>
      <div className={style["index"]}>
        <div className={style["left"]}>
          <div className={style["content"]}>
            <Draggable>
              <img className={style["bg"]} src={selectedBg} alt="" />
            </Draggable>
            <Draggable>
              <div className={style["band"]}>{inputVal}</div>
            </Draggable>
            <Draggable>
              <img className={style["car"]} src={selectedCar} alt="" />
            </Draggable>
            <Draggable>
              <img className={style["model"]} src={selectedModel} alt="" />
            </Draggable>
          </div>
        </div>
        <div className={style["right"]}>
          <div className={style["tabs"]}>
            <input
              type="text"
              placeholder="请输入车牌号"
              onChange={handleInput}
            />
            <div
              className={style[activedTab === 0 ? "activedTab" : "tab"]}
              onClick={() => tabCLick(0)}
            >
              背景
            </div>
            <div
              className={style[activedTab === 1 ? "activedTab" : "tab"]}
              onClick={() => tabCLick(1)}
            >
              车
            </div>
            <div
              className={style[activedTab === 2 ? "activedTab" : "tab"]}
              onClick={() => tabCLick(2)}
            >
              模特
            </div>
          </div>
          <div className={style["car"]}>
            {activedTab === 0 &&
              bgs.map((bg) => {
                return (
                  <div
                    className={style[activedBg === bg.url ? "activedBg" : "bg"]}
                    onClick={() => handleBgClick(bg)}
                  >
                    <Draggable>
                      <div className={style["wrapper"]}>
                        <img src={bg.url} alt="" />
                      </div>
                    </Draggable>
                  </div>
                );
              })}
            {activedTab === 1 &&
              cars.map((car) => {
                return (
                  <div
                    className={
                      style[activedCar === car.url ? "activedCar" : "card"]
                    }
                    onClick={() => handleCarClick(car)}
                  >
                    <Draggable>
                      <img src={car.url} alt="" />
                    </Draggable>
                    <div className={style["name"]}>{car.type}</div>
                    <div className={style["color"]}>{car.color}</div>
                  </div>
                );
              })}
            {activedTab === 2 &&
              models.map((model, index) => {
                return (
                  <div
                    className={
                      style[
                        activedModel === model.url ? "activedModel" : "model"
                      ]
                    }
                    onClick={() => handleModelClick(model)}
                  >
                    <Draggable>
                      <div className={style["wrapper"]}>
                        <div className={style["no"]}>{index + 1}</div>
                        <img src={model.url} alt="" />
                      </div>
                    </Draggable>
                  </div>
                );
              })}
          </div>
          <div className={style["model"]}></div>
        </div>
      </div>
    </Fragment>
  );
}
