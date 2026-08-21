export default function Section_1() {
  return (
    <div className="w-full h-112.5 overflow-hidden relative">
      <div className="bg-[url('/main_bg.png')] bg-no-repeat bg-cover  h-full relative">
        <img
          src="/main_hero.png"
          alt="hero"
          className="absolute bottom-13 transform scale-150"
        />
      </div>

      <div className="absolute left-5 bottom-12.5">
        <input type="text" placeholder="영웅이나 맵을 검색하세요" />
      </div>
    </div>
  );
}
