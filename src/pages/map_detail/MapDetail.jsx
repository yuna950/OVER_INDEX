import { useEffect, useState } from "react";
import { useScrollTop } from "../../lib/useScrollTop";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { getMapDetail } from "../api/OverFastApi";
import { mapName, mapType } from "../api/mapType";
import MapPoints from "./components/MapPoints";

export default function MapDetail() {
  const [mapData, setMapData] = useState();
  const [loading, setLoading] = useState(true);
  useScrollTop();

  const { key } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const map = await getMapDetail(key);
        setMapData(map);

        console.log(map);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [key]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="px-5 lg:px-10 xl:px-62.5">
      <div className="flex flex-col items-center justify-center gap-5 lg:items-start">
        <div className="w-full aspect-2/1 bg-gray-300 rounded-2xl overflow-hidden">
          <img src={mapData.screenshot} alt={mapData.key} />
        </div>
        <div className="w-fit px-2.5 py-2 text-sm rounded-[20px] text-[#FA9C1D] border border-[#FA9C1D]">
          {mapType.find((type) => type.key === mapData?.gamemodes?.[0])?.name}
        </div>
        <h1 className="text-center text-2xl lg:text-6xl lg:text-start font-bold">
          {mapName[mapData.key]}
        </h1>
      </div>

      <MapPoints map={mapData} />
    </div>
  );
}
