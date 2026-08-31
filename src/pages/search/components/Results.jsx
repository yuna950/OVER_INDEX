import { useEffect, useState } from "react";
import { getHeroes, getMaps } from "../../api/OverFastApi";
import { mapName } from "../../api/mapType";
import { roleColors, subroleNames } from "../../api/hero";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading";

const NO_IMG = "/no_img.png";

export default function Results({ data }) {
  const [loading, setLoading] = useState(true);
  const [heroes, setHeroes] = useState([]);
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const [heroData, mapData] = await Promise.all([getHeroes(), getMaps()]);

        setHeroes(heroData);
        setMaps(mapData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen">
        <Loading />
      </div>
    );
  }

  const keyword = data.toLowerCase();

  const heroResults = heroes.filter((hero) => {
    const name = hero.name?.toLowerCase() || "";
    const key = hero.key?.toLowerCase() || "";

    return name.includes(keyword) || key.includes(keyword);
  });

  const mapResults = maps.filter((map) => {
    const name = map.name?.toLowerCase() || "";
    const key = map.key?.toLowerCase() || "";
    const koreanName = mapName[map.key]?.toLowerCase() || "";

    return (
      name.includes(keyword) ||
      key.includes(keyword) ||
      koreanName.includes(keyword)
    );
  });

  // 영웅과 맵 검색 결과가 모두 없을 때
  const noResults = heroResults.length === 0 && mapResults.length === 0;

  return (
    <div className="py-15 min-h-screen">
      {/* 검색 결과 제목 */}
      <div className="mb-10">
        <p>"{data}" 검색 결과</p>
      </div>

      {/* 검색 결과 없음 */}
      {noResults ? (
        <div className="min-h-[60vh] py-20 flex flex-col items-center justify-center gap-3">
          <p className="text-xl font-semibold">검색 결과가 없습니다.</p>

          <p className="text-sm text-gray-400">다른 검색어를 입력해 주세요.</p>
        </div>
      ) : (
        <>
          {/* 영웅 */}
          {heroResults.length > 0 && (
            <section className="mb-15">
              <h2 className="text-2xl font-bold mb-7.5">영웅</h2>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {heroResults.map((hero) => {
                  const color = roleColors[hero.role];

                  return (
                    <Link to={`/hero/${hero.key}`} key={hero.key}>
                      <div
                        className="w-full h-fit px-8 py-3.5 lg:px-7.5 lg:py-7.5
                        flex flex-col items-center gap-8.5 lg:gap-10
                        border rounded-[20px] transition"
                        style={{
                          borderColor: `${color}40`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = `${color}25`;
                          e.currentTarget.style.boxShadow = `0 0 15px ${color}`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = `${color}40`;
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <div className="w-full flex flex-col gap-2.5 lg:gap-3.5 items-center">
                          <div className="w-full rounded-full overflow-hidden bg-gray-400">
                            <img
                              src={hero.portrait}
                              alt={hero.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <p className="font-semibold lg:text-2xl">
                            {hero.name}
                          </p>
                        </div>

                        <div
                          className="w-fit px-3 py-1 rounded-2xl border text-[12px]
                          flex items-center justify-center"
                          style={{
                            color,
                            borderColor: color,
                          }}
                        >
                          <span>
                            {subroleNames[hero.subrole] || hero.subrole}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* 맵 */}
          {mapResults.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-7.5">맵</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-10">
                {mapResults.map((map) => (
                  <Link key={map.key} to={`/map/${map.key}`}>
                    <div className="w-full">
                      <div className="w-full aspect-2/1 rounded-[20px] bg-gray-400 overflow-hidden">
                        <img
                          src={map.screenshot}
                          alt={map.key}
                          className="h-full object-center hover:scale-105 transition"
                          onError={(e) => {
                            e.currentTarget.src = NO_IMG;
                          }}
                        />
                      </div>

                      <p className="text-center text-xl lg:text-2xl xl:text-xl font-semibold py-2.5">
                        {mapName[map.key] || map.name}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}
