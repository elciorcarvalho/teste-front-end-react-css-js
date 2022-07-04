export default interface ItemCard {
  id: string;
  title: string;
  price: number;
  amount: number;
  promocaoDoDia: boolean;
  image: {
    src: string;
    alt: string;
  };
}
