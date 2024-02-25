import { useNavigate, useSearchParams } from "react-router-dom";
import { mapContainer } from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div
      className={mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>
        SAID SENHADJI {lat}, {lng}
      </h1>

      <button
        onClick={() => {
          setSearchParams({ lat: 23, lng: 50 });
        }}
      >
        Change POS
      </button>
    </div>
  );
}

export default Map;
