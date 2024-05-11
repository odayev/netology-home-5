import { FaCloudShowersHeavy } from "react-icons/fa";
export default function Weather() {
  return (
    <div className="weather">
      <FaCloudShowersHeavy
        style={{ marginRight: "1rem", marginTop: "1rem" }}
        color="#85cefe"
        size="1.5em"
      />

      <h1>17 {'\u00b0'}</h1>
      <div className="weather_info">
        <p>Утром +17</p>
        <p>днем +20</p>
      </div>
    </div>
  );
}
