import Container from "../Container/Container";
import style from "./Footer.module.css";
import {ReactComponent as VKIcon} from '../../img/vk.svg';
import {ReactComponent as TGIcon} from '../../img/tg.svg';
import {ReactComponent as PintIcon} from '../../img/pinterest.svg';
import {ReactComponent as GRIcon} from '../../img/group.svg';


const Footer = () => (
    <footer  color={style.footer}>
        <Container>
            <div className={style.wrapper}>
                <div className={style.contacts}>
                    <p>Design: <a href='https:/t.me/Mrshmalloww'>Anastasia Ilina</a></p>
                    <p>Сoder: <a href="https://vk.com/id18301590">Tatsiana Kashayed</a></p>
                    <p>© HBCard, 2022</p>
                </div>
                <ul className={style.social}>
                    <li className={style.item}>
                        <a href="https:/vk.com" className={style.link}>
                            <VKIcon />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="" className={style.link}>
                        <TGIcon />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="https:/pinterest.com" className={style.link}>
                            <PintIcon />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="#" className={style.link}>
                            <GRIcon /> 
                        </a>
                    </li>
                </ul>
            </div>
        </Container>
    </footer>
)

export default Footer;