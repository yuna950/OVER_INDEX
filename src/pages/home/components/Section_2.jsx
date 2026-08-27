import { MdOutlineArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { roleColors, subroleNames } from "../../api/hero";

export default function Section_2({ position, stats, heroes, color }) {
  if (!position || !stats || !heroes) return null;

  // 현재 포지션의 영웅만 추출
  const positionHeroes = heroes?.filter((hero) => hero.role === position.key);

  // 해당 영웅 key 목록
  const heroKeys = positionHeroes?.map((hero) => hero.key);

  // 해당 포지션 영웅들의 stats만 추출
  const positionStats = stats?.filter((stat) => heroKeys.includes(stat.hero));

  // stats + heroes 데이터 합치기 → 픽률 높은 순 TOP5
  const top5Heroes = positionStats
    ?.map((stat) => {
      const hero = heroes.find((hero) => hero.key === stat.hero);

      return {
        ...hero,
        ...stat,
        subrole: subroleNames[hero.subrole] ?? hero.subrole,
      };
    })
    .sort((a, b) => b.pickrate - a.pickrate)
    .slice(0, 5);

  return (
    <div className="pb-25 has-autofill: flex flex-col gap-12.5">
      <Swiper
        className="w-full h-full overflow-visible!"
        spaceBetween={10}
        slidesPerView={2.5}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {top5Heroes?.map((hero) => {
          const color = roleColors[hero?.role];

          return (
            <SwiperSlide key={hero.key}>
              <Link to={`/hero/${hero.key}`}>
                <div
                  className="w-full h-fit px-5 py-5 lg:px-7.5 lg:py-7.5 flex flex-col items-center gap-5 lg:gap-6 border rounded-[20px] transition"
                  style={{
                    borderColor: `${color}25`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${color}25`;
                    e.currentTarget.style.boxShadow = `0 0 15px ${color}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${color}25`;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="flex flex-col gap-2.5 items-center">
                    <div className="w-full  rounded-[50%] overflow-hidden bg-gray-400">
                      <img src={hero.portrait} alt={hero.key} />
                    </div>
                    <p className="font-semibold lg:text-2xl">{hero.name}</p>
                  </div>

                  <div
                    className="w-fit px-3 py-1 rounded-2xl border text-[12px] text-[${color}] flex items-center justify-center"
                    style={{
                      borderColor: `${color}`,
                      color,
                    }}
                  >
                    <span>{hero.subrole}</span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Link to={`/hero/role/${position.key}`}>
        <div
          className={`m-auto w-fit flex gap-2.5 items-center px-4 py-2 rounded-3xl border border-[#E5E7EB] text-[#E5E7EB] hover:border-[${color}] hover:text-[${color}]  transition cursor-pointer`}
        >
          <p className={`text-[12px] lg:text-[16px]`}>전체보기</p>

          <MdOutlineArrowOutward size={15} />
        </div>
      </Link>
    </div>
  );
}
