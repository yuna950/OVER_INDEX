import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Loading from "../../../components/Loading";

export default function Section_2({ detail }) {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const abilities = detail?.abilities ?? [];

  // 처음 들어왔을 때 첫 번째 스킬 선택
  useEffect(() => {
    if (abilities.length > 0 && !selectedSkill) {
      setSelectedSkill(abilities[0]);
    }
  }, [abilities, selectedSkill]);

  return (
    <div className="w-full py-25 flex flex-col gap-7.5 justify-center items-center">
      <h2 className="text-2xl font-bold">스킬</h2>

      <div className="w-full h-full py-5 px-5 overflow-hidden">
        <Swiper
          className="w-full h-full overflow-visible!"
          slidesPerView={4.8}
          spaceBetween={20}
        >
          {/* 스킬 아이콘 */}
          {abilities.map((skill) => (
            <SwiperSlide key={skill.name}>
              <button
                type="button"
                onClick={() => {
                  setSelectedSkill(skill);
                  setIsVideoLoading(true);
                }}
                className={`
                  w-15 
                  h-15 
                  flex justify-center items-center 
                  p-2.5 
                  rounded-full 
                  border 
                  transition 
                  cursor-pointer 
                  ${
                    selectedSkill?.name === skill.name
                      ? "border-[#FA9C1D] opacity-100 shadow-[0_0_20px_rgba(250,156,29,1)]"
                      : "border-transparent opacity-25 hover:border-[#FA9C1D] hover:opacity-100"
                  }
                `}
              >
                <img src={skill.icon} alt={skill.name} className="w-full" />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 선택한 스킬 영상 */}
      {selectedSkill?.video && (
        <div>
          <div className="relative w-full aspect-video">
            {isVideoLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loading />
              </div>
            )}

            <video
              key={selectedSkill.name}
              autoPlay
              muted
              loop
              playsInline
              poster={selectedSkill.video.thumbnail}
              onCanPlay={() => setIsVideoLoading(false)}
              className={`w-full h-full transition-opacity duration-300 ${
                isVideoLoading ? "opacity-0" : "opacity-100"
              }`}
            >
              <source src={selectedSkill.video.link.webm} type="video/webm" />

              <source src={selectedSkill.video.link.mp4} type="video/mp4" />
            </video>
          </div>

          <div className="text-center mt-7.5">
            <h3 className="text-xl font-semibold">{selectedSkill.name}</h3>
            <p className="text-sm opacity-70 mt-5">
              {selectedSkill?.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
