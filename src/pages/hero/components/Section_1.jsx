import { Link, useParams } from "react-router-dom";

export default function Section_1({ position, heroes }) {
  const { role } = useParams();

  const subroleNames = {
    tactician: "전술가",
    flanker: "측면공격가",
    sharpshooter: "명사수",
    specialist: "전문가",
    survivor: "생존왕",
    stalwart: "강건한 자",
    initiator: "개시자",
    recon: "수색가",
    medic: "의무관",
    bruiser: "투사",
  };

  const roleColors = {
    tank: "#1FB8FF",
    damage: "#E53935",
    support: "#4CAF7A",
  };

  const positionHeroes = role
    ? heroes?.filter((hero) => hero.role === role)
    : heroes;

  return (
    <div className="w-fit m-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 lg:gap-12.5 py-7.5 ">
      {positionHeroes?.map((hero) => {
        const color = roleColors[hero.role];

        return (
          <Link to={`/hero/${hero.key}`} key={hero.key}>
            <div
              className="w-fit h-fit px-6.5 py-3.5 lg:px-7.5 lg:py-7.5
              flex flex-col items-center gap-5 lg:gap-6.5
              border rounded-[20px]"
              style={{
                borderColor: `${color}40`,
              }}
            >
              <div className="flex flex-col gap-2.5 lg:gap-3.5 items-center">
                <div className="w-25 h-25 lg:w-45 lg:h-45 rounded-full overflow-hidden bg-gray-400">
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
