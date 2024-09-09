import Image from "next/image";
import "./command-card.scss";

const CommandCard = () => {
  return <div className="command-card">
    <div className="command-card__head">
        <Image src="/assets/images/command.png" width={325} height={325} alt="Azibek"/>
    </div>
    <div className="command-card__body">
        <h1>Олег Гафуров</h1>
        <p>CEO</p>
    </div>
  </div>;
};

export default CommandCard;
