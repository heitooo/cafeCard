import "./styles.css";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export function Card({ id, title, description, tags, price, image }) {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <img src={image} alt="" id="card-img" />
      <p>{id}</p>
      <h2>{title}</h2>
      <p id="tag">{tags}</p>
      <p> {description}</p>
      <p>{price}</p>
      

      <div id="botoes">
        <div id="preco">
          R$ <strong>9,90</strong>
        </div>
        <div id="botao">
          <button onClick={() => setCount(count - 1)}>-</button>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>

        <div>
          <button type="button" id="carrinho">
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
