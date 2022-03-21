/**
 * You have a Grocery component, which receives a list of products, each one with name and votes.
 * - The app should render an unordered list, with a list item for each product.
 * - Products can be upvoted or downvoted.
 * By appropriately using React state and props, implement the upvote/downvote logic. Keep the state in the topmost component, while the Product component should accept props.
 *
 * For example, passing the following array as products prop to Grocery
 * [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]
 * and clicking the '+' button next to the Oranges should result in HTML like:
 *
 *   <ul>
 *     <li>
 *       <span>Oranges - votes: 1</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *     <li>
 *       <span>Bananas - votes: 0</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *   </ul>
 */
function Product({ product, onVote, onUnvote }) {
  function handlePlus() {
    onVote(product.id);
  }

  function handleMinus() {
    onUnvote(product.id);
  }

  return (
    <li>
      <span>
        {product.name} - votes: {product.votes}
      </span>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </li>
  );
}

export function Grocery({ products, onVote, onUnvote }) {
  return (
    <ul>
      {products.map((e) => (
        <Product key={e.id} product={e} onVote={onVote} onUnvote={onUnvote} />
      ))}
    </ul>
  );
}
