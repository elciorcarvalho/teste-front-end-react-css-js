import Nav from "components/Nav";
import MainProducts from "components/MainProducts";
import AggregateProducts from "components/AggregateProducts";
// models
import products from "services/products.json";
import drinks from "services/drinks.json";
// type
type Product = typeof products[0];
type Drink = typeof drinks[0];

interface Props {
  handleAddToCart: (addedItem: Product | Drink) => void
}

export default function Main({ handleAddToCart }: Props) {
  return (
    <main className="main">
      <Nav />
      <MainProducts handleAddToCart={handleAddToCart} />
      <AggregateProducts handleAddToCart={handleAddToCart} />
    </main>
  );
}
