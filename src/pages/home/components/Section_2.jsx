import { MdOutlineArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

export default function Section_2({ position, stats, heroes, color }) {
  if (!position || !stats || !heroes) return null;

  // 현재 포지션의 영웅만 추출
  const positionHeroes = heroes?.filter((hero) => hero.role === position.key);

  // 해당 영웅 key 목록
  const heroKeys = positionHeroes?.map((hero) => hero.key);

  // 해당 포지션 영웅들의 stats만 추출
  const positionStats = stats?.filter((stat) => heroKeys.includes(stat.hero));

  const subroleNames = {
    tactician: "전술가",
    flanker: "측면공격가",
    sharpshooter: "명사수",
    specialist: "전문가",
    survivor: "생존왕",
    stalwart: "강건한 자",
    initiator: "개시자",
    recon: "수색가",
    medic: "의무관",
    bruiser: "투사",
  };

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

  console.log(top5Heroes?.length);

  return (
    <div className="pb-25 flex flex-col gap-12.5">
      <Swiper
        className="w-full"
        spaceBetween={10}
        slidesPerView={2.5}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {top5Heroes?.map((hero) => (
          <SwiperSlide key={hero.key}>
            <Link to={`/hero/${hero.key}`}>
              <div
                className="w-fit h-fit px-5 py-5 lg:px-7.5 lg:py-7.5 flex flex-col items-center gap-5 lg:gap-6 border  rounded-[20px]"
                style={{
                  borderColor: `${color}40`,
                }}
              >
                <div className="flex flex-col gap-2.5 items-center">
                  <div className="w-25 h-25 lg:w-40 lg:h-40 rounded-[50%] overflow-hidden bg-gray-400">
                    <img src={hero.portrait} alt={hero.key} />
                  </div>
                  <p className="font-semibold lg:text-2xl">{hero.name}</p>
                </div>

                <div
                  className="w-fit px-3 py-1 rounded-2xl border  text-[12px] flex items-center justify-center"
                  style={{
                    color: `${color}`,
                    borderColor: `${color}`,
                  }}
                >
                  <span>{hero.subrole}</span>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="m-auto w-fit flex gap-2.5 items-center px-4 py-2 rounded-3xl border border-[#E5E7EB] opacity-50 hover:opacity-100 transition cursor-pointer">
        <p className="text-[12px] lg:text-[16px] text-[#E5E7EB]">전체보기</p>
        <MdOutlineArrowOutward size={15} color="#E5E7EB" />
      </div>
    </div>
  );
}
