export type Apartment = {
  name: string;
  balcony: boolean;
  studio: boolean;
  oneRoom: boolean;
  twoRoom: boolean;
  threeRoom: boolean;
  squareMeters: string;
  view: boolean;
  hairDryer: boolean;
  dishwasher: boolean;
  oven: boolean;
  sleepingPlaces: string;
  wifi: boolean;
  coffeeMachine: boolean;
  towels: boolean;
  iron: boolean;
  conditioner: boolean;
  washer: boolean;
  microwave: boolean;
  pictures: Images[];
  summerPrice: string;
  winterPrice: string;
  description: string[]
  rooms: string;
  floor: string;
  meta: Meta;
  sort: string;
};

interface Meta {
  title: string;
  description: string;
  keywords: string;
}

interface Images {
  id: string;
  img: string;
}
