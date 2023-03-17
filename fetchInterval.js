import { fetchToUrl } from "./fetchToUrl.js";
import { weatherUrlKazan } from "./config/config.js";

export default function updateInterval() {
  fetchToUrl(
    weatherUrlKazan
  );
  setInterval(
    () =>
      fetchToUrl(
        weatherUrlKazan
      ),
    3600000
  );
}
