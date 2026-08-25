import { FaHeart } from "react-icons/fa";

export default function Section_1({ detail }) {
  const heart = detail?.hitpoints?.health;
  const armor = detail?.hitpoints?.armor;
  const shields = detail?.hitpoints?.shields;

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

  const roleName = {
    tank: "돌격",
    damage: "공격",
    support: "지원",
  };

  const roleColors = {
    tank: "#1FB8FF",
    damage: "#E53935",
    support: "#4CAF7A",
  };

  return (
    <div className="w-full h-100 relative">
      <div className="w-full h-full absolute inset-0 z-0">
        <img
          src={detail?.backgrounds?.[2]?.url}
          alt={detail?.name}
          className="w-full h-full object-cover object-[65%_center] "
        />

        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_75%_60%,transparent_0%,#060a14_100%)]
            "
        />
      </div>

      <div className="w-[80%] absolute z-10 left-0 bottom-0 px-5 lg:px-10 xl:px-62.5 flex flex-col py-5 gap-2.5 lg:gap-4">
        <div className="flex gap-2.5 text-xs items-center ">
          <div
            className={`w-fit h-fit rounded-2xl px-3 py-1.5 flex gap-2 items-center bg-[${roleColors[detail?.role]}]`}
          >
            <div className="w-3.5">
              <img src={`/${detail?.role}.svg`} alt={detail?.role} />
            </div>
            {roleName[detail?.role]}
          </div>
          <div
            className="border px-3 py-1.5 rounded-2xl"
            style={{
              color: roleColors[detail?.role],
              borderColor: roleColors[detail?.role],
            }}
          >
            {subroleNames[detail?.subrole]}
          </div>
        </div>

        <h1 className="text-4xl lg:text-[55px] font-semibold">
          {detail?.name}
        </h1>

        <ul className="w-[80%] flex flex-col lg:flex-row  gap-2 opacity-40 font-light text-xs lg:text-sm">
          <li>{detail?.birthday} </li>
          <li className="hidden lg:block">•</li>
          <li>{detail?.age}세</li>
          <li className="hidden lg:block">•</li>
          <li>{detail?.location}</li>
        </ul>

        <div className="w-[80%] text-sm lg:text-[16px] opacity-70">
          {detail?.description}
        </div>

        <div className="flex gap-2.5 items-center">
          <div className="flex items-center gap-1.5 font-semibold lg:text-[18px] ">
            <FaHeart color="red" />
            <p>{detail?.hitpoints?.total}</p>
          </div>

          <div className="flex items-center gap-1.5 text-xs opacity-90">
            <p>기본 {heart}</p>
            {armor > 0 && (
              <div className="flex gap-1.5">
                <p> + </p>
                <p className="text-[#FA9C1D]">방어력 {armor}</p>
              </div>
            )}
            {shields > 0 && (
              <div className="flex gap-1.5">
                <p> + </p>
                <p className="text-[#4CAF7A]">보호막 {shields}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
