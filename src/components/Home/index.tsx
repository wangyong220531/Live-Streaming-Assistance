import { Fragment } from "react"
import Card from "../Card"
import styles from "./index.module.less"

const Home: React.FC = () => {
    return <Fragment>
        <div className={styles["home"]}>
            <Card id={0} src={"http://aiimg.suishoubang.com/static/images/index/qiming.png"} title={"宝宝起名"} content={"输入姓氏和生日，立即查询海量高分名字，带名字寓意详解，支持查询名字出处，相关诗词。"} />
            <Card id={1} src={"http://aiimg.suishoubang.com/static/images/index/chezhu.png"} title={"车主头像定制"} content={"灵活切换直播场景，自定义或根据条件（评论，礼物等）切换直播场景及其人物形象等"} />
        </div>
    </Fragment>
}

export default Home
