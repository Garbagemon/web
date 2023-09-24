import { Wrapper } from "@googlemaps/react-wrapper";
import { useEffect, useRef, useState } from "react";

export default function Map({location}: {location: GeolocationCoordinates}) {
  const mapOptions = {
    mapId: process.env.NEXT_PUBLIC_MAP_ID,
    center: { lat: location.latitude, lng: location.longitude },
    zoom: 17,
    disableDefaultUI: true,
  };

  function MyMap() {
    const [map, setMap] = useState<google.maps.Map>();
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (!ref.current) return;
      setMap(new window.google.maps.Map(ref.current, mapOptions));
    }, []);

    if (ref.current === undefined) return;

    return (
      <>
        <div ref={ref} className="w-full h-full absolute z-0">
        </div>
      </>
    );
  }

  return (<Wrapper
    apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY as string}
    version="beta"
    libraries={["marker"]}
  >
    <MyMap />
  </Wrapper>)
}