import { Link, useParams } from "react-router-dom";
import { roleColors, subroleNames } from "../../../lib/hero";

export default function Section_1({ position, heroes }) {
  const { role } = useParams();

  const positionHeroes = role
    ? heroes?.filter((hero) => hero.role === role)
    : heroes;

  return (
    <div className="w-full m-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 lg:gap-12.5 py-7.5 ">
      {positionHeroes?.map((hero) => {
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
                e.currentTarget.style.borderColor = `${color}25`;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="w-full flex flex-col gap-2.5 lg:gap-3.5 items-center">
                <div className="w-full  rounded-full overflow-hidden bg-gray-400">
                  <img
                    src={hero.portrait}
                    alt={hero.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="font-semibold lg:text-2xl">{hero.name}</p>
              </div>

              <div
                className="w-fit px-3 py-1 rounded-2xl border text-[12px]
                flex items-center justify-center"
                style={{
                  color,
                  borderColor: color,
                }}
              >
                <span>{subroleNames[hero.subrole] || hero.subrole}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
