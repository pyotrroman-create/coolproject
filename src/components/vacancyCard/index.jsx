import styles from "./styles.module.css";

function vacansyCard({ icon1, title1, title2, icon2, title3, icon4, title4 }) {
    return (
        <div className={styles.card}>
            <img src={icon1} alt={title} />
            <h3>{title}</h3>
        </div>
    );
}

export default vacansyCardCard; 