import { useEffect, useState } from "react";
import { getHeroes, getPosition } from "../api/OverFastApi";
import { Link, useParams } from "react-router-dom";
import Section_1 from "./components/Section_1";
import { useScrollTop } from "../../lib/useScrollTop";

export default function Hero() {
  const [positionData, setPositionData] = useState();
  const [heroData, setHeroData] = useState();
  useScrollTop();

  const { role } = useParams();
  // role이 없으면 전체 선택
  const selectedRole = role || "all";

  useEffect(() => {
    (async () => {
      // 포지션
      const positions = await getPosition();
      setPositionData(positions);

      // 영웅
      const heroes = await getHeroes();
      setHeroData(heroes);

      // 현재 포지션의 영웅만 추출
      const positionHeroes = heroes?.filter(
        (hero) => hero.role === positionData?.key,
      );
    })();
  }, []);
  return (
    <div className="min-h-screen">
      <h2 className="text-3xl lg:text-[45px] xl:text-[55px] font-bold text-center mt-12.5 mb-7.5">
        HEROES
      </h2>

      <div className="flex text-xs justify-center items-center gap-2.5">
        <Link to={"/hero"}>
          <button
            className={`px-3 py-2 flex justify-center items-center rounded-3xl border transition-colors duration-200
              ${
                selectedRole === "all"
                  ? "border-[#FA9C1D] bg-[#FA9C1D] text-white"
                  : "border-[#e5e7eb]/60 text-[#e5e7eb]/60 hover:border-[#FA9C1D] hover:bg-[#FA9C1D] hover:text-white hover:opacity-100"
              }
            `}
          >
            전체
          </button>
        </Link>

        <Link to={`/hero/role/${positionData?.[0]?.key}`}>
          <button
            className={`px-3 py-2 flex justify-center items-center gap-2.5 rounded-3xl border transition-colors duration-200
              ${
                selectedRole === "tank"
                  ? "border-[#1FB8FF] bg-[#1FB8FF] text-white"
                  : "border-[#e5e7eb] text-[#e5e7eb] opacity-60 hover:border-[#1FB8FF] hover:bg-[#1FB8FF] hover:text-white hover:opacity-100"
              }
            `}
          >
            <div className="w-3.5">
              <img src="/tank.svg" alt="tank" />
            </div>
            <p>돌격</p>
          </button>
        </Link>

        <Link to={`/hero/role/${positionData?.[1]?.key}`}>
          <button
            className={`px-3 py-2 flex justify-center items-center gap-2.5 rounded-3xl border transition-colors duration-200
              ${
                selectedRole === "damage"
                  ? "border-[#E53935] bg-[#E53935] text-white"
                  : "border-[#e5e7eb] text-[#e5e7eb] opacity-60 hover:border-[#E53935] hover:bg-[#E53935] hover:text-white hover:opacity-100"
              }
            `}
          >
            <div className="w-3.5">
              <img src="/damage.svg" alt="damage" />
            </div>
            <p>공격</p>
          </button>
        </Link>

        <Link to={`/hero/role/${positionData?.[2]?.key}`}>
          <button
            className={`px-3 py-2 flex justify-center items-center gap-2.5 rounded-3xl border transition-colors duration-200
              ${
                selectedRole === "support"
                  ? "border-[#4CAF7A] bg-[#4CAF7A] text-white"
                  : "bborder-[#e5e7eb] text-[#e5e7eb] opacity-60 hover:border-[#4CAF7A] hover:bg-[#4CAF7A] hover:text-white hover:opacity-100"
              }
            `}
          >
            <div className="w-3.5">
              <img src="/support.svg" alt="support" />
            </div>
            <p>지원</p>
          </button>
        </Link>
      </div>

      <div className="px-5 lg:px-15 xl:px-87.5">
        <Section_1 position={positionData} heroes={heroData} />
      </div>
    </div>
  );
}
