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
  pictures: string[];
  summerPrice: string;
  winterPrice: string;
  rooms: string;
  floor: string;
  meta: Meta;
};

interface Meta {
  title: string;
  description: string;
  keywords: string;
}
