import "./styles.css";
//import { Categoria } from "../tagCategoria";
//import { Titulo } from "../tituloProd";
//import { Descricao } from "../descricao";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export function Card({ coffeeImg, category, title, description }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <img src={coffeeImg} alt="" />
      <p>{category}</p>
      <h2>{title}</h2>
      <p> {description}</p>

      <div id="preco">
        R$ <strong>9,90</strong>
      </div>

      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <div>
        <button type="button">
          <ShoppingCart size={16} />
        </button>
      </div>
    </>
  );
}
