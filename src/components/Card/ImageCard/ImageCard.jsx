import style from "./ImageCard.module.css";
import CardBG from "../../../img/card-bg.jpg"
import { useSelector } from "react-redux";

const ImageCard = (props) => {
    const {urlImg} = useSelector(state => state.image);

    return (
        <img className={style.img} src={urlImg || CardBG} alt="Фон открытки" width={840} height={520}/>
    )
}


export default ImageCard;