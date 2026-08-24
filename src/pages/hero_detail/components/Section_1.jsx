import { BiHeart } from "react-icons/bi";

export default function Section_1({ detail }) {
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

      <div className="w-[80%] absolute z-10 left-5 bottom-5 flex flex-col gap-2.5">
        <div className="flex gap-2.5 text-sm">
          <div>{detail?.role}</div>
          <div>{detail?.subrole}</div>
        </div>

        <h1 className="text-2xl font-semibold">{detail?.name}</h1>

        <ul className="flex gap-2 opacity-60 font-light text-xs">
          <li>{detail?.birthday} </li>
          <li>•</li>
          <li>{detail?.age}</li>
          <li>•</li>
          <li>{detail?.location}</li>
        </ul>

        <div className="text-sm opacity-70">{detail?.description}</div>

        <div className="flex items-center gap-2.5">
          <BiHeart />
          <p>{detail?.hitpoints?.health}</p>
        </div>
      </div>
    </div>
  );
}
