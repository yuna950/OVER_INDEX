import { useEffect, useState } from "react";
import { maps, pointNames } from "../../api/mapPoints";

export default function MapPoints({ map }) {
  // 현재 맵 찾기
  const mapInfo = maps.find((item) => item.key === map?.key);

  // 현재 맵의 포인트
  const points = mapInfo?.points ?? [];

  const [activePoint, setActivePoint] = useState(points[0]);

  useEffect(() => {
    setActivePoint(points[0] ?? null);
  }, [map?.key]);

  if (!points.length) return null;

  return (
    <div className="w-full py-10">
      <div className="relative">
        {/* 연결선 */}
        <div className="absolute top-[5px] left-0 right-0 h-px bg-white/20 bg-radial mask-radial-to-black" />

        <div className="relative flex justify-between">
          {points.map((point) => {
            const isActive = activePoint === point;

            return (
              <button
                key={point}
                type="button"
                onClick={() => setActivePoint(point)}
                className="flex flex-col items-center gap-2 cursor-pointer"
              >
                {/* 포인트 */}
                <span
                  className={`block w-2.5 lg:w-4 h-2.5 lg:h-4 rounded-full transition-all duration-200 ${
                    isActive ? "bg-[#FA9C1D] scale-125 " : "bg-gray-300"
                  }`}
                />

                {/* 포인트 이름 */}
                <span
                  className={`text-xs lg:text-xl transition-all duration-200 whitespace-nowrap ${
                    isActive ? "text-[#FA9C1D] text-bold" : "text-gray-400"
                  }`}
                >
                  {pointNames[point] || point}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
