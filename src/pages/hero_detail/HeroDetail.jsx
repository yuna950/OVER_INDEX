import { useEffect, useState } from "react";
import { getHeroDetail, getHeroes } from "../api/OverFastApi";
import { useParams } from "react-router-dom";
import Section_1 from "./components/Section_1";
import Section_2 from "./components/Section_2";
import { useScrollTop } from "../../lib/useScrollTop";
import Section_3 from "./components/Section_3";
import Loading from "../../components/Loading";

export default function HeroDetail() {
  useScrollTop();
  const [detailData, setDetailData] = useState();
  const [loading, setLoading] = useState(true);

  const { key } = useParams();

  useEffect(() => {
    try {
      (async () => {
        const details = await getHeroDetail(key);
        setDetailData(details);
      })();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [key]);

  if (loading) {
    return <Loading />;
  }

  console.log(detailData);
  const perks = detailData?.perks;

  return (
    <div className="min-h-screen">
      <Section_1 detail={detailData} />

      <div className="px-5 lg:px-10 xl:px-62.5">
        <Section_2 detail={detailData} />
        <Section_3 detail={perks} />
      </div>
    </div>
  );
}
