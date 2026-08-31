import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { roleColors, subroleNames } from "../../api/hero";
import tankIcon from "../../../assets/tank.svg";
import damageIcon from "../../../assets/damage.svg";
import supportIcon from "../../../assets/support.svg";

export default function Section_2({ data, title }) {
  const [selectedRole, setSelectedRole] = useState("tank");

  // 데이터가 있는 경우에만 역할 필터링
  const filteredHeroes = data?.filter((hero) => hero.role === selectedRole);

  const roleButtonStyle = (role) => ({
    borderColor: selectedRole === role ? roleColors[role] : "#E5E7EB",
    backgroundColor: selectedRole === role ? roleColors[role] : "transparent",
    color: selectedRole === role ? "#FFFFFF" : "#E5E7EB",
    opacity: selectedRole === role ? 1 : 0.6,
  });

  return (
    <div className="py-10">
      {/* 타이틀 */}
      <h2 className="text-xl lg:text-[40px] font-bold text-center mb-7.5 lg:mb-10">
        {title}
      </h2>

      {/* 영웅 카드 영역 */}
      <div className="">
        {filteredHeroes?.length > 0 ? (
          <div>
            {/* 역할 태그 */}
            <div className="flex justify-center gap-2.5 lg:gap-5 mb-7.5 lg:mb-15">
              <button
                type="button"
                onClick={() => setSelectedRole("tank")}
                className="px-3 py-2 flex justify-center items-center gap-2.5 rounded-3xl border transition"
                style={roleButtonStyle("tank")}
              >
                <div className="w-3.5">
                  <img src={tankIcon} alt="tank" />
                </div>

                <p>돌격</p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedRole("damage")}
                className="px-3 py-2 flex justify-center items-center gap-2.5 rounded-3xl border transition"
                style={roleButtonStyle("damage")}
              >
                <div className="w-3.5">
                  <img src={damageIcon} alt="damage" />
                </div>

                <p>공격</p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedRole("support")}
                className="px-3 py-2 flex justify-center items-center gap-2.5 rounded-3xl border transition"
                style={roleButtonStyle("support")}
              >
                <div className="w-3.5">
                  <img src={supportIcon} alt="support" />
                </div>

                <p>지원</p>
              </button>
            </div>
            <Swiper
              className="w-full h-full overflow-visible!"
              spaceBetween={10}
              slidesPerView={2.3}
              breakpoints={{
                768: {
                  slidesPerView: 3.5,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4.2,
                  spaceBetween: 20,
                },
              }}
            >
              {filteredHeroes.map((hero) => {
                const color = roleColors[hero.role];

                return (
                  <SwiperSlide key={hero.key}>
                    <Link to={`/hero/${hero.key}`}>
                      <div
                        className="w-full h-fit px-5 py-5 lg:px-7.5 lg:py-7.5 flex flex-col items-center gap-5 lg:gap-10 xl:gap-20 border rounded-[20px] transition"
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
                        <div className="flex flex-col gap-2.5 lg:gap-7 items-center">
                          <div className="w-full rounded-[50%] overflow-hidden bg-gray-400">
                            <img
                              src={hero.portrait}
                              alt={hero.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <p className="font-semibold lg:text-2xl">
                            {hero.name}
                          </p>
                        </div>

                        <div
                          className="w-fit px-3 py-1 rounded-2xl border text-[12px] lg:text-[16px] flex items-center justify-center"
                          style={{
                            borderColor: color,
                            color: color,
                          }}
                        >
                          <span>
                            {subroleNames[hero.subrole] ?? hero.subrole}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        ) : (
          <div className="w-full flex justify-center items-center py-25">
            <p className="text-gray-400 text-sm lg:text-lg">
              데이터가 없습니다
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
