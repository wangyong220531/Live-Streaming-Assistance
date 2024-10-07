import { Fragment } from "react"
import style from "./index.module.less"

interface CardConfig {
    index: number,
    name: string,
    // gender: string
    meaning: string
    from: string,
    related_shici_list: any
}

const BabyNameCard: React.FC<CardConfig> = (props) => {

    const { index, name, meaning, from, related_shici_list } = props

    return (
        <Fragment>
            <div className={style["card"]}>
                <div className={style["name"]}>{`${index + 1}、${name}`}</div>
                {/* <div className={style["gender"]}>{gender}</div> */}
                <div className={style["meaning"]}><strong>寓意：</strong>{meaning}</div>
                <div className={style["from"]}><strong>来源：</strong>{from}</div>
                {related_shici_list && related_shici_list.length && <div className={style["related_shici_list"]}><strong>相关诗词：</strong>{related_shici_list.map((item: any) => {
                    return <Fragment>
                        <div className={style["special"]}>{item[0]}</div>
                        <div className={style["special"]}>{item[1]}</div>
                    </Fragment>
                })}</div>}
            </div>
        </Fragment>
    )
}

export default BabyNameCard
