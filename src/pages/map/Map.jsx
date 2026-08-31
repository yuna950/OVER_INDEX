import { useEffect, useState } from "react";
import { useScrollTop } from "../../lib/useScrollTop";
import { getMaps } from "../api/OverFastApi";
import Loading from "../../components/Loading";
import Section_1 from "./components/Section_1";
import PageTitle from "../../components/PageTitle";

export default function Map() {
  const [loading, setLoading] = useState(true);
  const [mapData, setMapData] = useState();
  useScrollTop();

  useEffect(() => {
    (async () => {
      try {
        const map = await getMaps();
        setMapData(map);
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
    <div className="min-h-screen">
      <PageTitle title={"MAP"} />
      <h2 className="text-3xl lg:text-[45px] xl:text-[55px] font-bold text-center mt-12.5 mb-7.5">
        MAP
      </h2>

      <div className="px-5 lg:px-15 xl:px-87.5">
        <Section_1 map={mapData} />
      </div>
    </div>
  );
}
