import { Link } from "react-router-dom";
import { mapName } from "../../api/mapType";
import { NO_IMG } from "../../../constant/img";

export default function Section_5({ title, map, data }) {
  const filterMap = map?.filter((item) => data?.includes(item.name));

  return (
    <div className="py-12.5">
      <h2 className="text-2xl lg:text-[40px] font-bold text-center mb-7.5 lg:mb-15">
        {title}
      </h2>

      <div className="grid lg:grid-cols-3 gap-2.5">
        {filterMap?.map((map) => (
          <Link to={`/map/${map.key}`} key={map.key}>
            <div>
              <div className="w-full aspect-2/1 bg-gray-200 rounded-[20px] overflow-hidden">
                <img
                  src={map.screenshot}
                  alt={map.key}
                  onError={(e) => {
                    e.currentTarget.src = NO_IMG;
                  }}
                  className="h-full object-center hover:scale-105 transition"
                />
              </div>
              <p className="text-center text-lg font-semibold py-2.5">
                {mapName[map?.key]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
