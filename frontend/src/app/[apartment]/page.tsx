import { Apartment } from '../../components/helpers/types/type';
import Apart from '../../components/apartment page';

export async function generateStaticParams() {
  const response = await fetch('http://localhost:3500/All-apartments/undefined/undefined/42');
  if (!response.ok) {
    throw new Error('Failed to fetch data from server');
  }

  const apartments: Apartment[] = await response.json();

  return apartments.data.map((apartment: Apartment) => ({
    apartment: apartment.apartmentName,
  }));
}

export default function ApartPage({ params }: { params: { apartment: string } }) {
  const { apartment } = params;

  return <Apart linkId={apartment} />;
}
