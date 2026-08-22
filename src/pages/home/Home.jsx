import { useEffect, useState } from "react";
import Section_1 from "./components/Section_1";
import Section_2 from "./components/Section_2";
import { getHeroes, getHeroStats, getPosition } from "../api/OverFastApi";

export default function Home() {
  const [positionData, setPositionData] = useState();
  const [statsData, setStatsData] = useState();
  const [heroData, setHeroData] = useState();

  useEffect(() => {
    (async () => {
      // 포지션
      const positions = await getPosition();
      setPositionData(positions);

      // 영웅
      const heros = await getHeroes();
      setHeroData(heros);

      // 픽률
      const stats = await getHeroStats();
      setStatsData(stats);
    })();
  }, []);

  return (
    <div>
      <Section_1 />

      <div className="px-5 lg:px-10 xl:px-62.5 py-25">
        {/* 타이틀 */}
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-3xl lg:text-[45px] text-[55px] font-bold">
            추천 영웅
          </h2>
          <p className="text-[#FA9C1D] lg:text-[16px] xl:text-[18px] ">
            일반게임 픽률 TOP5
          </p>
        </div>

        {/* 돌격 */}
        <div className="pt-25 mb-12.5 w-full flex justify-center items-center gap-2.5">
          <div className="w-5 lg:w-6 xl:w-7.5">
            <img src="/tank_color.svg" alt="돌격" />
          </div>
          <h3 className="text-2xl lg:text-[30px] xl:text-[35px] font-bold">
            {positionData?.[0]?.name}
          </h3>
        </div>
        <Section_2
          position={positionData?.[0]}
          stats={statsData}
          heroes={heroData}
          color={"#1FB8FF"}
        />

        {/* 공격 */}
        <div className="pt-25 mb-12.5 w-full flex justify-center items-center gap-2.5">
          <div className="w-5 lg:w-6 xl:w-7.5">
            <img src="/damage_color.svg" alt="공격" />
          </div>
          <h3 className="text-2xl lg:text-[30px] xl:text-[35px] font-bold">
            {positionData?.[1]?.name}
          </h3>
        </div>
        <Section_2
          position={positionData?.[1]}
          stats={statsData}
          heroes={heroData}
          color={"#E53935"}
        />

        {/* 지원 */}
        <div className="pt-25 mb-12.5 w-full flex justify-center items-center gap-2.5">
          <div className="w-5 lg:w-6 xl:w-7.5">
            <img src="/support_color.svg" alt="지원" />
          </div>
          <h3 className="text-2xl lg:text-[30px] xl:text-[35px] font-bold">
            {positionData?.[2]?.name}
          </h3>
        </div>
        <Section_2
          position={positionData?.[2]}
          stats={statsData}
          heroes={heroData}
          color={"#4CAF7A"}
        />
      </div>
    </div>
  );
}
