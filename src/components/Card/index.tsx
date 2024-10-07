import { Fragment } from "react"
import style from "./index.module.less"
import { useNavigate } from "react-router-dom"

interface CardConfig {
    id: number,
    src: string
    title: string
    content: string
}

const Card: React.FC<CardConfig> = (props) => {

    const { id, src, title, content } = props

    const navigate = useNavigate();

    return (
        <Fragment>
            <div className={style["card"]}>
                <img src={src} alt="" />
                <div className={style["box"]}>
                    <div className={style["text"]}>
                        <div className={style["title"]}>{title}</div>
                        <div>描述：{content}</div>
                    </div>
                    <div className={style["btn-group"]}>
                        <div className={style["btn"]} onClick={() => navigate(id ? '/ownerAvatorCustomize' : '/babyNaming')}>立即使用</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Card
