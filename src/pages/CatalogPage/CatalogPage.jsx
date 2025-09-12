import Header from "../../components/Header/Header";
import CarList from "../../components/CarList/CarList";
import Filter from "../../components/Filter/Filter";
import LoadMore from "../../components/LoadMore/LoadMore";

export default function CatalogPage() {
  return (
    <>
      <Header />
      <Filter />
      <CarList />
    </>
  );
}
