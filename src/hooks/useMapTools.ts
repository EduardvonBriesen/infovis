import * as d3 from "d3";
import { useState, useEffect } from "react";

export const useMapTools = function () {
  // store loaded map data in a state
  const [mapData, setMapData] = useState<{ loading: boolean; data: any }>({
    data: {},
    loading: true,
  });

  // only fetch map data once and create a tooltip
  useEffect(() => {
    d3.json(
      "https://raw.githubusercontent.com/leakyMirror/map-of-europe/master/GeoJSON/europe.geojson"
    )
      .then((data) => {
        setMapData((prevState) => {
          return { ...prevState, data: data, loading: false };
        });
      })
      .catch((err) => {
        console.log("error occurred with loading map", err);
      });

    /// tooltip creation
    d3.select("body")
      .append("div")
      .attr("id", "tooltip")
      .attr("style", "position: absolute; opacity: 0");
    ///
  }, []);

  return { mapData };
};
