import styles from "./styles.module.css";

function CategoryCard({ icon, title }) {
    return (
        <div className={styles.card}>
            <img src={icon} alt={title} />
            <h3>{title}</h3>
        </div>
    );
}

export default CategoryCard; 