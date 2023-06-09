import React, { useState, useEffect, useRef } from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Header } from "../components/Header";

const Spot = () => {
  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [marker, setMarker] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [info, setInfo] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const newMap = new window.google.maps.Map(ref.current, {
      center: { lat: 37.569227, lng: 126.9777256 },
      zoom: 3,
    });

    const newMarker = new window.google.maps.Marker({
      position: { lat: 37.569227, lng: 126.9777256 },
      map: newMap,  
      title: "Marker Title",
    });

    const newInfo = new window.google.maps.InfoWindow({
      content: ""
    });

    setMap(newMap);
    setMarker(newMarker);
    setInfo(newInfo);

    newMarker.addListener("click", () => {
      newInfo.open(newMap, newMarker);
    });
  }, []);

  return (
    <div>
      <Header></Header>
      <div ref={ref} id="map" style={{ width: "100%", height: "800px" }}></div>
    </div>
  );
};

export default Spot;
