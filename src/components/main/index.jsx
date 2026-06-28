import styles from "./styles.module.css";
import CategoryCard from "../categoryCard";
import financeIcon from "../../assets/icons/Union.svg";
import logisticsIcon from "../../assets/icons/evaCarOutline2.svg";
import designIcon from "../../assets/icons/Vector2.svg";
import hospitalityIcon from "../../assets/icons/Vector3.svg";
import medicineIcon from "../../assets/icons/Vector4.svg";
import multimediaIcon from "../../assets/icons/Vector5.svg";
import supportIcon from "../../assets/icons/Vector6.svg";
import managementIcon from "../../assets/icons/Union2.svg";
import salesIcon from "../../assets/icons/Vector8.svg";
import more_categoriesIcon from "../../assets/icons/Vector9.svg";

function Main() {
    return (
        <main className={styles.main}>
            <section>
                <h2 className={styles.title}>Работа по категориям</h2>

                <CategoryCard icon={financeIcon} title="Финансы" />
                <CategoryCard icon={logisticsIcon} title="Грузоперевозки" />
                <CategoryCard icon={designIcon} title="Дизайн" />
                <CategoryCard icon={hospitalityIcon} title="Ресторанный бизнес" />
                <CategoryCard icon={medicineIcon} title="Медицина" />
                <CategoryCard icon={multimediaIcon} title="Мультимедиа" />
                <CategoryCard icon={supportIcon} title="Служба поддержки" />
                <CategoryCard icon={managementIcon} title="Менеджмент" />
                <CategoryCard icon={salesIcon} title="Продажи" />
                <CategoryCard icon={more_categoriesIcon} title="Больше категорий" />
            </section>

            <section>
                <h2 className={styles.title}>Новые вакансии</h2>

                <h3 className={styles.title}>Найди работу своей мечты прямо сейчас</h3>

            </section>
        </main>
    );
}

export default Main;
