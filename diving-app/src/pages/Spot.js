//학번 20191064 이름 정용환 Spot.js

import React, { useState, useEffect, useRef } from "react";
import { Header } from "../components/Header";

const Spot = () => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  const ref = useRef();

  useEffect(() => {
    const newMap = new window.google.maps.Map(ref.current, { // 구글맵 초기화
      center: { lat: 37.569227, lng: 126.9777256 },
      zoom: 3,
    });

    setMap(newMap);

    const spots = [
      {
        lat: 17.315278,
        lng: -87.534444,
        title: "Spot 1",
        content: "<h3>Spot 1</h3><p>Spot 1 Info</p><img src='spot1.jpg' alt='Spot 1 Image' style='max-width: 100%; height: auto;' />",
      },
      {
        lat: 40.6895,
        lng: -74.0447,
        title: "Spot 2",
        content: "<h3>Spot 2</h3><p>Spot 2 Info</p><img src='spot2.jpg' alt='Spot 2 Image' style='max-width: 100%; height: auto;' />",
      },
      {
        lat: -16.499,
        lng: -151.7415,
        title: "Spot 3",
        content: "<h3>Spot 3</h3><p>Spot 3 Info</p><img src='spot3.jpg' alt='Spot 3 Image' style='max-width: 100%; height: auto;' />",
      },
      {
        lat: 17.77388,
        lng: -64.81362,
        title: "Cane Bay Drop-off",
        content: "<h3>Cane Bay Drop-off</h3><p>아마도 St. Croix에서 가장 유명한 다이빙 장소 일 것입니다. 여기서 위치는 다이빙 보트가 사용하는 계류장의 GPS 좌표입니다. 보트 뒤쪽에서 내리면 산호초 바로 위에 있고 거의 수직으로 떨어지는 벽 근처에 있습니다. 벽은 해안에서 약 300 야드 떨어져 있으므로이 다이빙은 해안 다이빙으로도 수행 할 수 있습니다.</p><img src='https://d2p1cf6997m1ir.cloudfront.net/media/thumbnails/2d/52/2d520d23de8472a710556838ddd743a2.webp' alt='Spot 4 Image' style='max-width: 100%; height: auto;' />",
      },
    ];

    const newMarkers = spots.map((spot) => { //맵에 마커를 표시
      const marker = new window.google.maps.Marker({
        position: { lat: spot.lat, lng: spot.lng },
        map: newMap,
        title: spot.title,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: spot.content,
      });

      marker.addListener("click", () => { // 마커를 누를 경우 이벤트 처리
        infoWindow.open(newMap, marker);
      });

      return { marker, infoWindow };
    });

    setMarkers(newMarkers);
  }, []);

  return (
    <div>
      <Header></Header>
      <div ref={ref} id="map" style={{ width: "100%", height: "850px" }}></div>
    </div>
  );
};

export default Spot;
