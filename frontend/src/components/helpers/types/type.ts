export type MyApartments = {
  _id: { $oid: string };
  apartmentName: number;
  summerPrice: number;
  winterPrice: number;
  sortIndex: number;
  about: About;
  images: Images[];
  services: Services;
  meta: Meta;
  createdAt: {
    $date: {
      $numberLong: string;
    };
  };
  updatedAt: {
    $date: {
      $numberLong: string;
    };
  };
  __v: number;
};

interface About {
  view: string;
  balcony: string;
  rooms: number;
  sleepingPlaces: number;
  squareMeters: number;
  floor: number;
  description: string[];
}

interface Images {
  id: string;
  image: string;
  alt: string;
}

interface Services {
  stove: boolean;
  dishwasher: boolean;
  coffeeMachine: boolean;
  conditioner: boolean;
  wifi: boolean;
  washer: boolean;
  microwave: boolean;
  hairDryer: boolean;
  iron: boolean;
  towels: boolean;
}

interface Meta {
  title: string;
  description: string;
  keywords: string;
}
