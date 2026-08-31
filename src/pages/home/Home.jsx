import { useEffect, useState } from "react";
import Section_1 from "./components/Section_1";
import Section_2 from "./components/Section_2";
import { getHeroes, getHeroStats, getPosition } from "../api/OverFastApi";
import { useScrollTop } from "../../lib/useScrollTop";
import Loading from "../../components/Loading";
import tankColor from "../../assets/tank_color.svg";
import damageColor from "../../assets/damage_color.svg";
import supportColor from "../../assets/support_color.svg";
import tankImg from "../../assets/tank.png";
import damageImg from "../../assets/damage.png";
import supportImg from "../../assets/support.png";

export default function Home() {
  const [positionData, setPositionData] = useState();
  const [statsData, setStatsData] = useState();
  const [heroData, setHeroData] = useState();
  const [loading, setLoading] = useState(true);
  useScrollTop();

  useEffect(() => {
    (async () => {
      try {
        // 포지션
        const positions = await getPosition();
        setPositionData(positions);

        // 영웅
        const heros = await getHeroes();
        setHeroData(heros);

        // 픽률
        const stats = await getHeroStats();
        setStatsData(stats);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      <Section_1 />

      <div className="px-5 lg:px-10 xl:px-62.5 py-25">
        {/* 타이틀 */}
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-3xl lg:text-[45px] xl:text-[55px] font-bold">
            추천 영웅
          </h2>
          <p className="text-[#FA9C1D] lg:text-[16px] xl:text-[18px] ">
            일반게임 픽률 TOP5
          </p>
        </div>

        {/* 돌격영웅 */}
        <div
          className="absolute 
        w-75 top-185 -left-25 
        lg:w-165 lg:top-195 lg:-left-50
        xl:w-200 xl:top-230 xl:-left-60.5 
        opacity-30 -z-10 "
        >
          <img src={tankImg} alt="tank_hero" />
          <div className="absolute bottom-0 left-0 w-full h-[70%] bg-linear-to-t from-[#060a14] to-transparent" />
        </div>

        {/* 돌격 */}
        <div className="pt-25 mb-12.5 w-full flex justify-center items-center gap-2.5">
          <div className="w-5 lg:w-6 xl:w-7.5">
            <img src={tankColor} alt="돌격" />
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

        {/* 공격영웅 */}
        <div
          className="absolute 
        w-95 top-320 -right-30 
        lg:w-165 lg:top-350 lg:-right-50
        xl:w-200 xl:top-400 xl:-right-60.5 
        opacity-30 -z-10"
        >
          <img src={damageImg} alt="tank_hero" />
          <div className="absolute bottom-0 left-0 w-full h-[70%] bg-linear-to-t from-[#060a14] to-transparent" />
        </div>

        {/* 공격 */}
        <div className="pt-25 mb-12.5 w-full flex justify-center items-center gap-2.5">
          <div className="w-5 lg:w-6 xl:w-7.5">
            <img src={damageColor} alt="공격" />
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

        {/* 지원영웅 */}
        <div
          className="absolute 
        w-180 top-450 -left-65
        lg:w-200 lg:top-510 lg:-left-40
        xl:w-220 xl:top-570 xl:-left-30 
        opacity-30 -z-10"
        >
          <img src={supportImg} alt="support_hero" />
          <div className="absolute bottom-0 left-0 w-full h-[70%] bg-linear-to-t from-[#060a14] to-transparent" />
        </div>

        {/* 지원 */}
        <div className="pt-25 mb-12.5 w-full flex justify-center items-center gap-2.5">
          <div className="w-5 lg:w-6 xl:w-7.5">
            <img src={supportColor} alt="지원" />
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
