"use client";

import { Fragment } from "react";

import "./home.scss";
import Image from "next/image";
import { Icons } from "@/utils/svg-icons";
import AdvantagesCard from "@/components/advantages-card";
import CommandCard from "@/components/command-card";
import SwiperFirst from "@/components/swiper-first";
import SwiperSecond from "@/components/swiper-second";

export default function Home() {
  return (
    <Fragment>
      <section className="hero">
        <div className="container hero__container">
          <div className="hero-title">
            <h1>Профессиональные </h1>
            <h1>услуги ремонт квартир </h1>
            <h1>под ключ</h1>
          </div>
          <div className="kalit">
            <Image
              src="/assets/images/kalit.png"
              width={380}
              height={180}
              alt="podklyuch"
            />
          </div>
        </div>
        <div className="container hero__container">
          <div className="hero-image">
            <Image
              src="/assets/images/hero.jpg"
              fill
              priority
              quality={100}
              alt="podklyuch"
            />
          </div>
        </div>
        <div className="container hero__container">
          <h1 className="hero-hello">
            <span>👋Добро пожаловать в Get it</span> Мы предлагаем полный спектр
            услуг по ремонту квартир. Профессиональные мастера, качественные
            материалы и доступные цены.
          </h1>
        </div>
        <div className="container hero__container">
          <div className="hero-wrapper">
            <div className="box">
              <div className="box__left">{">10"}</div>
              <div className="box__right">лет на международ ном рынке</div>
            </div>
            <div className="box">
              <div className="box__left">{">121"}</div>
              <div className="box__right">лет на международ ном рынке</div>
            </div>
            <div className="box">
              <div className="box__left">{">17"}</div>
              <div className="box__right">лет на международ ном рынке</div>
            </div>
            <div className="box">
              <div className="box__left">{">150"}</div>
              <div className="box__right">лет на международ ном рынке</div>
            </div>
          </div>
        </div>
      </section>
      <section className="cosmos">
        <div className="container cosmos__container">
          <div className="cosmos__container__left">
            <h1>Косметический ремонт</h1>
            <p>
              Такой тип ремонта подойдёт для того чтобы «освежить» ремонт в
              квартире: заменить порытие стен, пола и потолка без
              предварительной подготовки
            </p>
            <div className="cosmos__container__left__services">
              <div className="service">
                <h2>
                  <div className="image-box">
                    <Image
                      src="/assets/images/kran.png"
                      width={24}
                      height={24}
                      alt="podklyuch"
                    />
                  </div>
                  Демонтаж
                </h2>
                <p>
                  <Icons.check /> Демонтаж старых покрытий
                </p>
                <p>
                  <Icons.check /> Демонтаж старых покрытий
                </p>
              </div>
              <div className="service">
                <h2>
                  <div className="image-box">
                    <Image
                      src="/assets/images/kran.png"
                      width={24}
                      height={24}
                      alt="podklyuch"
                    />
                  </div>
                  Чистовые работы
                </h2>
                <p>
                  <Icons.check /> Грунтовка стен и пола
                </p>
              </div>
              <div className="service">
                <h2>
                  <div className="image-box">
                    <Image
                      src="/assets/images/kran.png"
                      width={24}
                      height={24}
                      alt="podklyuch"
                    />
                  </div>
                  Электрика
                </h2>
                <p>
                  <Icons.check /> Монтаж электроточки
                </p>
              </div>
            </div>
          </div>
          <div className="cosmos__container__right">
            <div className="image-box">
              <Image
                src="/assets/images/section.jpg"
                fill
                priority
                quality={100}
                alt="podklyuch"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="capital">
        <div className="container capital__container">
          <div className="capital__container__left">
            <h1>Косметический ремонт</h1>
            <p>
              Такой тип ремонта подойдёт для того чтобы «освежить» ремонт в
              квартире: заменить порытие стен, пола и потолка без
              предварительной подготовки
            </p>
            <div className="capital__container__left__services">
              <div className="service">
                <h2>
                  <div className="image-box">
                    <Image
                      src="/assets/images/kran.png"
                      width={24}
                      height={24}
                      alt="podklyuch"
                    />
                  </div>
                  Демонтаж
                </h2>
                <p>
                  <Icons.check color="black" /> Демонтаж старых покрытий
                </p>
                <p>
                  <Icons.check color="black" /> Демонтаж старых покрытий
                </p>
              </div>
              <div className="service">
                <h2>
                  <div className="image-box">
                    <Image
                      src="/assets/images/kran.png"
                      width={24}
                      height={24}
                      alt="podklyuch"
                    />
                  </div>
                  Чистовые работы
                </h2>
                <p>
                  <Icons.check color="black" /> Грунтовка стен и пола
                </p>
              </div>
              <div className="service">
                <h2>
                  <div className="image-box">
                    <Image
                      src="/assets/images/kran.png"
                      width={24}
                      height={24}
                      alt="podklyuch"
                    />
                  </div>
                  Электрика
                </h2>
                <p>
                  <Icons.check color="black" /> Монтаж электроточки
                </p>
              </div>
            </div>
          </div>
          <div className="capital__container__right">
            <div className="image-box">
              <Image
                src="/assets/images/section.jpg"
                fill
                priority
                quality={100}
                alt="podklyuch"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="design">
        <div className="container design__container">
          <div className="design__container__left">
            <h1>Косметический ремонт</h1>
            <p>
              Такой тип ремонта подойдёт для того чтобы «освежить» ремонт в
              квартире: заменить порытие стен, пола и потолка без
              предварительной подготовки
            </p>
            <div className="design__container__left__services">
              <div className="service">
                <h2>
                  <div className="image-box">
                    <Image
                      src="/assets/images/kran.png"
                      width={24}
                      height={24}
                      alt="podklyuch"
                    />
                  </div>
                  Демонтаж
                </h2>
                <p>
                  <Icons.check /> Демонтаж старых покрытий
                </p>
                <p>
                  <Icons.check /> Демонтаж старых покрытий
                </p>
              </div>
              <div className="service">
                <h2>
                  <div className="image-box">
                    <Image
                      src="/assets/images/kran.png"
                      width={24}
                      height={24}
                      alt="podklyuch"
                    />
                  </div>
                  Чистовые работы
                </h2>
                <p>
                  <Icons.check /> Грунтовка стен и пола
                </p>
              </div>
              <div className="service">
                <h2>
                  <div className="image-box">
                    <Image
                      src="/assets/images/kran.png"
                      width={24}
                      height={24}
                      alt="podklyuch"
                    />
                  </div>
                  Электрика
                </h2>
                <p>
                  <Icons.check /> Монтаж электроточки
                </p>
              </div>
            </div>
          </div>
          <div className="design__container__right">
            <div className="image-box">
              <Image
                src="/assets/images/section.jpg"
                fill
                priority
                quality={100}
                alt="podklyuch"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="info">
        <div className="container info__container">
          <div className="info__container__advantages">
            <h1>Наши преимушества</h1>
            <div className="info__container__advantages__wrapper">
              <AdvantagesCard />
              <AdvantagesCard />
              <AdvantagesCard />
              <AdvantagesCard />
            </div>
          </div>
          <div className="info__container__command">
            <h1>Наша команда</h1>
            <div className="info__container__command__wrapper">
              <CommandCard />
              <CommandCard />
              <CommandCard />
              <CommandCard />
            </div>
          </div>
          <div className="info__container__real">
            <h1>Наши реализованные проекты</h1>
            <div className="info__container__real__wrapper">
              <SwiperFirst />
              <SwiperSecond />
            </div>
          </div>
        </div>
      </section>
      <section className="trust">
        <h1>Нам доверяют</h1>
        <div className="trust__wrapper">
          <div className="trust__wrapper__track">
            <div className="image-box">
              <Image
                src="/assets/images/trust1.png"
                fill
                priority
                quality={100}
                alt="podklyuch"
              />
            </div>
            <div className="image-box">
              <Image
                src="/assets/images/trust2.png"
                fill
                priority
                quality={100}
                alt="podklyuch"
              />
            </div>
            <div className="image-box">
              <Image
                src="/assets/images/trust1.png"
                fill
                priority
                quality={100}
                alt="podklyuch"
              />
            </div>
            <div className="image-box">
              <Image
                src="/assets/images/trust2.png"
                fill
                priority
                quality={100}
                alt="podklyuch"
              />
            </div>
            <div className="image-box">
              <Image
                src="/assets/images/trust1.png"
                fill
                priority
                quality={100}
                alt="podklyuch"
              />
            </div>
            <div className="image-box">
              <Image
                src="/assets/images/trust2.png"
                fill
                priority
                quality={100}
                alt="podklyuch"
              />
            </div>
            <div className="image-box">
              <Image
                src="/assets/images/trust1.png"
                fill
                priority
                quality={100}
                alt="podklyuch"
              />
            </div>
            <div className="image-box">
              <Image
                src="/assets/images/trust2.png"
                fill
                priority
                quality={100}
                alt="podklyuch"
              />
            </div>
            <div className="image-box">
              <Image
                src="/assets/images/trust1.png"
                fill
                priority
                quality={100}
                alt="podklyuch"
              />
            </div>
            <div className="image-box">
              <Image
                src="/assets/images/trust2.png"
                fill
                priority
                quality={100}
                alt="podklyuch"
              />
            </div>
            <div className="image-box">
              <Image
                src="/assets/images/trust1.png"
                fill
                priority
                quality={100}
                alt="podklyuch"
              />
            </div>
            <div className="image-box">
              <Image
                src="/assets/images/trust2.png"
                fill
                priority
                quality={100}
                alt="podklyuch"
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
