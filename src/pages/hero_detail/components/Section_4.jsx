import { useEffect, useState } from "react";
import { getHeroDetail } from "../../api/OverFastApi";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { roleColors, subroleNames } from "../../../lib/hero";

export default function Section_4({ data, title }) {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    if (!data?.length) return;

    const fetchHeroes = async () => {
      try {
        const heroDetails = await Promise.all(
          data.map((hero) => getHeroDetail(hero.name)),
        );

        setHeroes(heroDetails);
      } catch (error) {
        console.error("영웅 상세정보 불러오기 실패:", error);
      }
    };

    fetchHeroes();
  }, [data]);

  console.log(heroes);

  return (
    <div className="py-12.5">
      <h2 className="text-2xl font-bold text-center mb-7.5">{title}</h2>

      <Swiper
        className="w-full lg:w-[80%] h-full overflow-visible! "
        spaceBetween={10}
        slidesPerView={2.5}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {heroes.map((hero) => {
          const color = roleColors[hero.role];

          return (
            <SwiperSlide key={hero.name}>
              <Link to={`/hero/${hero.name}`}>
                <div
                  className="w-full h-fit px-5 py-5 lg:px-7.5 lg:py-7.5 flex flex-col items-center gap-5 lg:gap-10 xl:gap-20 border rounded-[20px] transition"
                  style={{
                    borderColor: `${color}25`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = color / 25;
                    e.currentTarget.style.boxShadow = `0 0 15px ${color}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${color}25`;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="flex flex-col gap-2.5 items-center">
                    <div className="w-full rounded-[50%] overflow-hidden bg-gray-400">
                      <img
                        src={hero.portrait}
                        alt={hero.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <p className="font-semibold lg:text-2xl">{hero.name}</p>
                  </div>

                  <div
                    className="w-fit px-3 py-1 rounded-2xl border text-[12px] flex items-center justify-center"
                    style={{
                      borderColor: color,
                      color,
                    }}
                  >
                    <span>{subroleNames[hero.subrole]}</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
