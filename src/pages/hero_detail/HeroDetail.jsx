import { useEffect, useState } from "react";
import { getHeroDetail, getHeroes, getMaps } from "../api/OverFastApi";
import { useParams } from "react-router-dom";
import Section_1 from "./components/Section_1";
import Section_2 from "./components/Section_2";
import { useScrollTop } from "../../lib/useScrollTop";
import Section_3 from "./components/Section_3";
import Loading from "../../components/Loading";
import { heroes } from "../api/heroes";
import Section_4 from "./components/Section_4";
import Section_5 from "./components/Section_5";
import PageTitle from "../../components/PageTitle";

export default function HeroDetail() {
  const [detailData, setDetailData] = useState();
  const [loading, setLoading] = useState(true);
  const [mapData, setMapData] = useState();
  useScrollTop();

  const { key } = useParams();
  const hero = heroes[key];

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setDetailData(null);
        setMapData(null);

        const details = await getHeroDetail(key);
        setDetailData(details);

        const map = await getMaps();
        setMapData(map);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [key]);

  if (loading) {
    return <Loading />;
  }

  const perks = detailData?.perks;

  return (
    <div className="min-h-screen">
      <PageTitle title={detailData.name} />
      <Section_1 detail={detailData} />

      <div className="px-5 lg:px-10 xl:px-62.5">
        <Section_2 detail={detailData} />
        <div className="w-[1px] h-[120px] bg-white/10 m-auto"></div>
        <Section_3 detail={perks} />
        <div className="w-[1px] h-[120px] bg-white/10 m-auto lg:mb-[50px]"></div>
        <Section_4 data={hero?.best_synergies} title={"시너지 영웅"} />
        <Section_4 data={hero?.countered_by} title={"카운터 영웅"} />
        <Section_5 map={mapData} data={hero?.best_maps} title={"BEST MAP"} />
        <Section_5 map={mapData} data={hero?.worst_maps} title={"WORST MAP"} />
      </div>
    </div>
  );
}
