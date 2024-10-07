import React, { useState, Fragment } from 'react';
import style from './index.module.less';
import BabyNameCard from '../../components/BabyNameCard';
import zhaochen from "../../data/zhaochen.json"

export default function BabyNaming() {

    const [livingStreamRoomName, setLivingStreamRoomName] = useState("")

    const [lastnameOne, setLastnameOne] = useState("")
    const [lastnameTwo, setLastnameTwo] = useState("")
    const [gender, setGender] = useState("")

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();

        try {
            // const res = await axios.post("http://127.0.0.1:3000/api/getTestData", data)

            // if(!res)return
            // console.log(res.data);

        } catch (error) {
        }
    }

    return <Fragment>
        <div className={style["detail"]}>
            <form className={style["form"]} onSubmit={handleSubmit}>
                <div className={style["wrapper"]}>
                    <div className={style["label"]}>直播间：</div>
                    <input
                        name="living_stream_room_name"
                        value={livingStreamRoomName}
                        onChange={e => setLivingStreamRoomName(e.target.value)}
                    />
                </div>
                <div className={style["wrapper"]}>
                    <div className={style["label"]}>姓氏1：</div>
                    <input
                        name="lastname_one"
                        value={lastnameOne}
                        onChange={e => setLastnameOne(e.target.value)}
                    />
                </div>
                <div className={style["wrapper"]}>
                    <div className={style["label"]}>姓氏2：</div>
                    <input
                        name="lastname_two"
                        value={lastnameTwo}
                        onChange={e => setLastnameTwo(e.target.value)}
                    />
                </div>
                <div className={style["wrapper"]}>
                    <div className={style["label"]}>性别：</div>
                    <input
                        name="gender"
                        value={gender}
                        onChange={e => setGender(e.target.value)}
                    />
                </div>
                <button className={style["submit-btn"]} type="submit">开始起名</button>
            </form>
            <div className={style["result"]}>
                {zhaochen.map((name, index) => {
                    return <BabyNameCard name={name.name} meaning={name.meaning} from={name.from} related_shici_list={name.related_shici_list} index={index} />
                })}
            </div>
        </div>
    </Fragment>;
}
