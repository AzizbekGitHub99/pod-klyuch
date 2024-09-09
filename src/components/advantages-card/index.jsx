import { Icons } from "@/utils/svg-icons";
import "./advantages-card.scss"

const AdvantagesCard = () => {
  return (
    <div className="advantages-card">
      <div className="advantages-card__head">
        <h2>01.</h2>
        <Icons.val/>
      </div>
      <div className="advantages-card__body">
        <h3>Косметический ремонт</h3>
        <p>
          Мы предлагаем полный спектр услуг по ремонту квартир. Профессиональные
          мастера, качественные материалы и доступные цены.
        </p>
      </div>
    </div>
  );
};

export default AdvantagesCard;
