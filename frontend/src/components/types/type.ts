export type Apartment = {
  apartmentName: string;
  summerPrice: string;
  winterPrice: string;
  sort: string;
  about: About;
  images: Images[];
  services: Services;
  meta: Meta;
};

interface About {
  view: string;
  balcony: string;
  rooms: string;
  sleepingPlaces: string;
  squareMeters: string;
  floor: string;
  description: string[];
}

interface Images {
  id: string;
  image: string;
  alt: string;
}

interface Services {
  stove: boolean
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
