import { useEffect, useState } from "react";
import { getHeroDetail, getHeroes } from "../api/OverFastApi";
import { useParams } from "react-router-dom";
import Section_1 from "./components/Section_1";

export default function HeroDetail() {
  const [detailData, setDetailData] = useState();

  const { key } = useParams();

  useEffect(() => {
    (async () => {
      const details = await getHeroDetail(key);
      setDetailData(details);
    })();
  }, [key]);

  console.log(detailData);

  return (
    <div className="min-h-screen">
      <Section_1 detail={detailData} />
    </div>
  );
}
