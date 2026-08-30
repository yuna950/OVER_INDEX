import { useEffect, useState } from "react";
import { useScrollTop } from "../../lib/useScrollTop";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { getHeroes, getMapDetail } from "../api/OverFastApi";
import { mapName, mapType } from "../api/mapType";
import MapPoints from "./components/MapPoints";
import Section_2 from "./components/Section_2";
import { mapHero } from "../api/mapHero";
import { maps } from "../api/mapPoints";

export default function MapDetail() {
  const [mapData, setMapData] = useState();
  const [loading, setLoading] = useState(true);
  const [heroData, setHeroData] = useState([]);
  const [goodData, setGoodData] = useState([]);
  const [badData, setBadData] = useState([]);
  const [activePoint, setActivePoint] = useState(null);

  useScrollTop();

  const { key } = useParams();

  // 맵 / 영웅 데이터 가져오기
  useEffect(() => {
    (async () => {
      try {
        const [map, heroes] = await Promise.all([
          getMapDetail(key),
          getHeroes(),
        ]);

        setMapData(map);
        setHeroData(heroes);

        const mapInfo = maps.find((item) => item.key === key);

        setActivePoint(mapInfo?.points?.[0] ?? null);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [key]);

  // 현재 맵 + 현재 포인트의 영웅 데이터
  useEffect(() => {
    if (!key || !activePoint || !heroData.length) {
      return;
    }

    // 현재 맵의 mapHero 데이터
    const currentMapHero = mapHero[key];

    if (!currentMapHero) {
      setGoodData([]);
      setBadData([]);
      return;
    }

    // 현재 선택된 포인트 찾기
    const currentPointData = currentMapHero.find(
      (item) => item.point === activePoint,
    );

    if (!currentPointData) {
      setGoodData([]);
      setBadData([]);
      return;
    }

    // 추천 영웅
    const good = currentPointData.heroes
      .filter((item) => item.score >= 10)
      .map((item) => {
        const info = heroData.find((hero) => hero.key === item.hero);

        if (!info) return null;

        return {
          ...info,
          score: item.score,
        };
      })
      .filter(Boolean);

    // 비추천 영웅
    const bad = currentPointData.heroes
      .filter((item) => item.score <= -10)
      .map((item) => {
        const info = heroData.find((hero) => hero.key === item.hero);

        if (!info) return null;

        return {
          ...info,
          score: item.score,
        };
      })
      .filter(Boolean);

    setGoodData(good);
    setBadData(bad);
  }, [key, activePoint, heroData]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="px-5 lg:px-10 xl:px-62.5 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-5 lg:items-start">
        {/* 맵 이미지 */}
        <div className="w-full aspect-2/1 bg-gray-300 rounded-2xl overflow-hidden">
          <img
            src={mapData?.screenshot}
            alt={mapData?.key}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 게임 모드 */}
        <div className="w-fit px-2.5 py-2 text-sm rounded-[20px] text-[#FA9C1D] border border-[#FA9C1D]">
          {mapType.find((type) => type.key === mapData?.gamemodes?.[0])?.name}
        </div>

        {/* 맵 이름 */}
        <h1 className="text-center text-2xl lg:text-6xl lg:text-start font-bold">
          {mapName[mapData?.key]}
        </h1>
      </div>

      {/* 포인트 선택 */}
      <MapPoints
        map={mapData}
        activePoint={activePoint}
        setActivePoint={setActivePoint}
      />

      {/* 추천 영웅 */}
      <Section_2 data={goodData} title="추천 영웅" />

      {/* 비추천 영웅 */}
      <Section_2 data={badData} title="비추천 영웅" />
    </div>
  );
}
