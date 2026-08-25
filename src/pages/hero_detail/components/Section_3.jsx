export default function Section_3({ detail }) {
  return (
    <div className="flex flex-col items-center justify-center py-[100px]">
      <div className="flex flex-col gap-10">
        <h2 className="text-2xl font-bold text-center mb-5">보조 특전</h2>
        <div className="flex items-start">
          {detail?.minor.map((perk) => (
            <div
              key={perk.name}
              className="w-[48%] flex flex-col items-center justify-center gap-5"
            >
              <div className="w-18 px-2 py-2 rounded-[50%] border border-gray-400">
                <img src={perk.icon} alt={perk.name} />
              </div>

              <p className="text-lg ">{perk.name}</p>
              <p className="text-xs lg:text-sm opacity-50 w-[60%] text-center">
                {perk.description}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full h-0.5 bg-white opacity-10"></div>

        <h2 className="text-2xl font-bold text-center mb-5">주요 특전</h2>
        <div className="flex items-start">
          {detail?.major.map((perk) => (
            <div
              key={perk.name}
              className="w-[48%] flex flex-col items-center justify-center gap-5"
            >
              <div className="w-18 px-2 py-2 rounded-[50%] border border-gray-400">
                <img src={perk.icon} alt={perk.name} />
              </div>

              <p className="text-lg ">{perk.name}</p>
              <p className="text-xs lg:text-sm opacity-50 w-[60%] text-center">
                {perk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
