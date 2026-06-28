import cooljobIcon from "../../assets/icons/Cooljob2.svg";
import googleIcon from "../../assets/icons/Group 15.svg";
import inIcon from "../../assets/icons/Vector.svg";
import twitterIcon from "../../assets/icons/Group 16.svg";
import facebookIcon from "../../assets/icons/feFacebook0.svg";
import styles from "./styles.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.section}>
                <h2 className={styles.title}>Популярные города</h2>
                <ul className={styles.ul}>

                    <li>
                        <a href="#">Осака</a>
                    </li>

                    <li>
                        <a href="#">Коясан</a>
                    </li>
                    <li>
                        <a href="#">Токио</a>
                    </li>
                    <li>
                        <a href="#">Хаконэ</a>
                    </li>
                    <li>
                        <a href="#">Наэба</a>
                    </li>

                    <li>
                        <a href="#">Томаму</a>
                    </li>
                    <li>
                        <a href="#">Йокогама</a>
                    </li>
                    <li>
                        <a href="#">Нагоя</a>
                    </li>
                    <li>
                        <a href="#">Саппоро</a>
                    </li>
                    <li>
                        <a href="#">Кобе</a>
                    </li>
                </ul>

                <div className={styles.line}></div>

                <section className={styles.bottom}>

                    <img src={cooljobIcon} alt="cooljob_icon" />

                    <div className={styles.socials}>
                        <img src={inIcon} alt="in_icon" />
                        <img src={googleIcon} alt="google_icon" />
                        <img src={twitterIcon} alt="twitter_icon" />
                        <img src={facebookIcon} alt="facebook_icon" />
                    </div>
                </section>
            </section>
        </footer >
    );
}

export default Footer;