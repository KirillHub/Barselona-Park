import Apart from '../../components/apartment page';

// interface Arara {
//   data: Apartment[]
// }

// export async function generateStaticParams() {
//   const response = await fetch('http://localhost:3500/All-apartments/undefined/undefined/42');
//   if (!response.ok) {
//     throw new Error('Failed to fetch data from server');
//   }

//   const apartments: Arara = await response.json();

//   return apartments.data.map((apartment: Apartment) => ({
//     apartment: `Apartment-${apartment.apartmentName}`,
//   }));
// }

export default function ApartPage() {
  return <Apart />;
}
