import React, { useState, Fragment } from "react";
import style from "./index.module.less";
import BabyNameCard from "../../components/BabyNameCard";
import axios from "axios";

interface Name {
  id: number;
  name: string;
  meaning: string;
  related_poems: string;
}

export default function BabyNaming() {

  const [lastNameOfFather, setlastNameOfFather] = useState("");
  const [lastNameOfMother, setlastNameOfMother] = useState("");
  const [gender, setGender] = useState("");
  const [names, setNames] = useState<Name[]>([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    
    e.preventDefault();

    try {

      const res = await axios.post("http://111.231.19.23:3000/fetchNames", {
        lastNameOfFather,
        lastNameOfMother,
        gender,
      });
      if (!res) return;
      setNames(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Fragment>
      <div className={style["detail"]}>
        <form className={style["form"]} onSubmit={handleSubmit}>
          <div className={style["wrapper"]}>
            <div className={style["label"]}>姓氏1：</div>
            <input
              name="lastname_one"
              value={lastNameOfFather}
              onChange={(e) => setlastNameOfFather(e.target.value)}
            />
          </div>
          <div className={style["wrapper"]}>
            <div className={style["label"]}>姓氏2：</div>
            <input
              name="lastname_two"
              value={lastNameOfMother}
              onChange={(e) => setlastNameOfMother(e.target.value)}
            />
          </div>
          <div className={style["wrapper"]}>
            <div className={style["label"]}>性别：</div>
            <input
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <button className={style["submit-btn"]} type="submit">
            开始起名
          </button>
        </form>
        <div className={style["result"]}>
          {names.map((name, index) => {
            return (
              <BabyNameCard
                name={name.name}
                meaning={name.meaning}
                related_poems={name.related_poems}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}
