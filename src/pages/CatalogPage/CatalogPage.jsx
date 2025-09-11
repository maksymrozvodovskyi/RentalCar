import Header from "../../components/Header/Header";
import CarList from "../../components/CarList/CarList";
import Filter from "../../components/Filter/Filter";

export default function CatalogPage() {
  return (
    <>
      <Header />
      <Filter />
      <CarList />
    </>
  );
}
