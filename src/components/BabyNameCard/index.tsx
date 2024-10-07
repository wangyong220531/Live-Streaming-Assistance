import { Fragment } from "react"
import style from "./index.module.less"

interface CardConfig {
    index: number,
    name: string,
    // gender: string
    meaning: string
    // from: string,
    related_poems: string
}

const BabyNameCard: React.FC<CardConfig> = (props) => {

    const { index, name, meaning, related_poems } = props

    return (
        <Fragment>
            <div className={style["card"]}>
                <div className={style["name"]}>{`${index + 1}、${name}`}</div>
                {/* <div className={style["gender"]}>{gender}</div> */}
                <div className={style["meaning"]}><strong>寓意：</strong>{meaning}</div>
                {/* <div className={style["from"]}><strong>来源：</strong>{from}</div> */}
                {related_poems}
            </div>
        </Fragment>
    )
}

export default BabyNameCard
