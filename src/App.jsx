import { Card } from "./components/card";
import tradicional from "./assets/tradicional.png";

export function App() {
  return (
    <>
      <Card
        coffeeImg={tradicional}
        category={"Tradicional"}
        title={"Expresso Tradicional"}
        description={"O tradicional café feito com água quente e grãos moídos"}
      />
    </>
  );
}
