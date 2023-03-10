import { Apartment } from '../components/types/type';

export const apartmentsData: Apartment[] = [
  {
    apartmentName: '1416',
    summerPrice: '12 000',
    winterPrice: '6 000',
    sort: '42',
    about: {
      view: 'Вид на море',
      balcony: 'С балконом',
      rooms: '3',
      sleepingPlaces: '6',
      squareMeters: '60',
      floor: '14',
      description: [
        'Представляем вам уютный трехкомнатный апартамент площадью 60 m² с 6 спальными местами для комфортного проживания в компании семьи или друзей.',
        'В спальнях находятся двуспальные кровати и кондиционеры для того, чтобы гости могли комфортно отдохнуть и насладиться теплой атмосферой.',
        'В гостиной также есть раскладной диван, обеденный стол, кондиционер для создания максимально комфортных условий.',
        'В апартаменте есть балкон с видом на море, где гости могут наслаждаться красивым пейзажем.',
        'Вы будете чувствовать себя как дома в наших апартаментах благодаря чистому постельному белью, которое мы регулярно меняем и свежему аромату',
        'В ванной комнате, которая совмещена с туалетом, вы найдете все для комфортного пребывания',
        'Есть всё необходимое оборудование, включая новую технику, такую как духовка, микроволновка, чайник, холодильник, фен, утюг, телевизор, стиральная машина и бесплатный Wi-Fi.',
        'Мы рады сообщить, что у нас можно останавливаться с детьми и домашними животными.',
        'Ждем вас в наших апартаментах!',
      ],
    },
    images: [
      {
        id: '1416-0',
        image: '/assets/apartments/1416/1.jpg',
        alt: '',
      },
      {
        id: '1416-1',
        image: '/assets/apartments/1416/2.jpg',
        alt: '',
      },
      {
        id: '1416-2',
        image: '/assets/apartments/1416/3.jpg',
        alt: '',
      },
      {
        id: '1416-3',
        image: '/assets/apartments/1416/4.jpg',
        alt: '',
      },
      {
        id: '1416-4',
        image: '/assets/apartments/1416/5.jpg',
        alt: '',
      },
      {
        id: '1416-5',
        image: '/assets/apartments/1416/6.jpg',
        alt: '',
      },
      {
        id: '1416-6',
        image: '/assets/apartments/1416/7.jpg',
        alt: '',
      },
      {
        id: '1416-7',
        image: '/assets/apartments/1416/8.jpg',
        alt: '',
      },
    ],
    services: {
      stove: true,
      dishwasher: false,
      coffeeMachine: false,
      conditioner: true,
      wifi: true,
      washer: true,
      microwave: true,
      hairDryer: true,
      iron: true,
      towels: true,
    },
    meta: {
      title: 'Бронирование апартамента 1416 | Барселона Парк | Аренда',
      description:
        'Забронируйте уютный трехкомнатный апартамент площадью 60 m², 6 спальных мест в Барселона Парк, Сочи. Имеются две спальни с кондиционерами, балкон с видом на море и бесплатный Wi-Fi',
      keywords: 'Бронирование апартамента, Барселона Парк, Апартамент Сочи, апартамент',
    },
  },
];

// for (let i = 0; i < arr.length; i++) {
  // fetch('http://localhost:3500/addNewApartment', {
  //   method: 'POST',
  //   body: JSON.stringify(arr[i]),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // })
  //   .then((res) => res.json())
  //   .then(console.log);
// }
