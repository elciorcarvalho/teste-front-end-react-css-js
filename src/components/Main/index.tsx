import Nav from "components/Nav";
import MainProducts from "components/MainProducts";
import AggregateProducts from "components/AggregateProducts";

export default function Main() {
  return (
    <main className="main">
      <Nav />
      <MainProducts />
      <AggregateProducts />
    </main>
  );
}
