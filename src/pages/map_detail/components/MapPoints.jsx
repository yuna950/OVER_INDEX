import { maps, pointNames } from "../../api/mapPoints";

export default function MapPoints({ map, activePoint, setActivePoint }) {
  // 현재 맵 찾기
  const mapInfo = maps.find((item) => item.key === map?.key);

  // 현재 맵의 포인트
  const points = mapInfo?.points ?? [];

  if (!points.length) return null;

  return (
    <div className="w-full py-15 lg:py-25">
      <div className="relative">
        {/* 연결선 */}
        <div className="absolute top-[5px] left-0 right-0 h-px bg-white/20" />

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
                  className={`block w-2.5 lg:w-4 h-2.5 lg:h-4 rounded-full transition-all ${
                    isActive ? "bg-[#FA9C1D] scale-125" : "bg-gray-300"
                  }`}
                />

                {/* 포인트 이름 */}
                <span
                  className={`text-xs lg:text-xl whitespace-nowrap ${
                    isActive ? "text-[#FA9C1D] font-semibold" : "text-gray-400"
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
