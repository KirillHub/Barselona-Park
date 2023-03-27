import { Kettle } from "@/svg";
import GoogleMapReact from "google-map-react";

const LocationSVG = ({ text }: any) => <div style={{ color: "red" }}>{text}</div>;

/*
type DefaultMapProps = {
  defaultMapProps: {
    center: {
      lat: number;
      lng: number;
    };
    zoom: number;
  };
};
*/

const Map = () => {
  // эти корды не выношу, т.к. они не будут меняться
  const defaultMapProps = {
    center: {
      lat: 43.575632,
      lng: 39.730034,
    },
    zoom: 14,
  };

  return (
    <div style={{ height: "40vh", width: "60%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: String(process.env.MAP_KEY) }}
        defaultCenter={defaultMapProps.center}
        defaultZoom={defaultMapProps.zoom}
        draggable={true}
        options={{
          zoomControl: true,
          fullscreenControl: false,
          keyboardShortcuts: false,
          clickableIcons: true,
        }}
      >
        <LocationSVG
          lat={defaultMapProps.center.lat}
          lng={defaultMapProps.center.lng}
          text='Take here loc. marker'
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
