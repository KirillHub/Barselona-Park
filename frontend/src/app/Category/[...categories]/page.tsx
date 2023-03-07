import Category from "../../../components/category page";

async function getApartments() {
  const res = await fetch(`http://localhost:3500/allApartments`);
  return res.json();
}

export default async function CategoryPage() {

  const apartmetsData = await getApartments();

  return <Category apartmentsData={apartmetsData} />;
}
