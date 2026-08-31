export default function Section_3({ detail }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:py-[100px] py-10">
      <div className=" flex flex-col lg:flex-row gap-10">
        <div className="lg:w-[48%] flex flex-col gap-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-5">
            보조 특전
          </h2>
          <div className="flex items-start">
            {detail?.minor.map((perk) => (
              <div
                key={perk.name}
                className="w-[50%] flex flex-col items-center justify-center gap-5"
              >
                <div className="w-18 lg:w-25 px-5 py-5 rounded-[50%] border border-gray-400">
                  <img src={perk.icon} alt={perk.name} />
                </div>

                <p className="text-lg lg:text-2xl">{perk.name}</p>
                <p className="text-xs lg:text-sm opacity-50 w-[80%] text-center">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-0.5 lg:w-1 lg:h-80 bg-white opacity-10"></div>

        <div className="lg:w-[48%] flex flex-col gap-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-5">
            주요 특전
          </h2>
          <div className="flex items-start">
            {detail?.major.map((perk) => (
              <div
                key={perk.name}
                className="w-[50%] flex flex-col items-center justify-center gap-5"
              >
                <div className="w-18 lg:w-25 px-5 py-5 rounded-[50%] border border-gray-400">
                  <img src={perk.icon} alt={perk.name} />
                </div>

                <p className="text-lg lg:text-2xl ">{perk.name}</p>
                <p className="text-xs lg:text-sm opacity-50 w-[80%] text-center">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
