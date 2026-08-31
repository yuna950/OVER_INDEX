import { useState } from "react";
import { Link } from "react-router-dom";
import { mapName, mapType } from "../../api/mapType";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { NO_IMG } from "../../../constant/img";

export default function Section_1({ map }) {
  const [selectedType, setSelectedType] = useState("all");

  const filteredMap =
    selectedType === "all"
      ? map
      : map.filter((item) => item.gamemodes?.includes(selectedType));

  return (
    <div className="w-full ">
      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        breakpoints={{
          768: {
            spaceBetween: 8,
          },
        }}
        className="lg:w-fit overflow-hidden"
      >
        <SwiperSlide className="w-fit!">
          <Link to={"/map"}>
            <button
              onClick={() => setSelectedType("all")}
              className={`w-fit px-3 py-2 border rounded-[30px] ${
                selectedType === "all"
                  ? "bg-[#FA9C1D] text-white border-[#FA9C1D]"
                  : "opacity-30 text-[#e5e7eb] border-[#e5e7eb]"
              }`}
            >
              전체
            </button>
          </Link>
        </SwiperSlide>
        {mapType.map((type) => (
          <SwiperSlide key={type.key} className="w-fit!">
            <Link to={`/map/gamemode/${type.key}`}>
              <button
                onClick={() => setSelectedType(type.key)}
                className={`w-fit px-3 py-2 border rounded-[30px] whitespace-nowrap ${
                  selectedType === type.key
                    ? "bg-[#FA9C1D] text-white border-[#FA9C1D]"
                    : "opacity-30 text-[#e5e7eb] border-[#e5e7eb]"
                }`}
              >
                {type.name}
              </button>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full grid lg:grid-cols-2 xl:grid-cols-3 gap-7.5 mt-7.5">
        {filteredMap.map((map) => (
          <Link key={map.key} to={`/map/${map.key}`}>
            <div className="w-full">
              <div className="w-full aspect-2/1 rounded-[20px] bg-gray-400 overflow-hidden">
                <img
                  src={map.screenshot}
                  alt={map.key}
                  className="h-full w-full object-center hover:scale-110 transition"
                  onError={(e) => {
                    e.currentTarget.src = NO_IMG;
                  }}
                />
              </div>

              <p className="text-center text-lg lg:text-2xl xl:text-xl font-semibold py-2.5">
                {mapName[map.key]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
