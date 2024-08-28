import Link from "next/link";

import NavLink from "../navlink";
import { Icons } from "@/utils/svg-icons";

import "./header.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <Link href="/" className="logo">
          Get it .
        </Link>
        <ul className="navigation">
          <li>
            <NavLink href="#">О нас</NavLink>
          </li>
          <li>
            <NavLink href="#">Наши услуги</NavLink>
          </li>
          <li>
            <NavLink href="#">Портфолио</NavLink>
          </li>
          <li>
            <NavLink href="#">Этапы работ</NavLink>
          </li>
          <li>
            <NavLink href="#">Цены</NavLink>
          </li>
          <li>
            <NavLink href="#">Контакты</NavLink>
          </li>
        </ul>
        <div className="lang">
          <Icons.globus /> RU
        </div>
      </div>
    </header>
  );
};

export default Header;
