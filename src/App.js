import React, { useState } from "react";
import { Message } from "./components/Message";
import { FocusableInput } from "./components/FocusableInput";
import { ImageGallery } from "./components/ImageGallery";
import { PlayerStatus } from "./components/PlayerStatus";
import { TeamsList } from "./components/TeamsList";
import { Rating } from "./components/Rating";
import { Grocery } from "./components/Grocery";
import { ListItemsForNavigation } from "./components/ListItemsForNavigation";
import "./App.css";

export default function App() {
  const [links, setLinks] = useState([
    {
      src: "https://res.cloudinary.com/practicaldev/image/fetch/s--BxQ7CA2Z--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/grki97glctbmjydzqejw.png",
      id: 0,
    },
    { src: "https://wiki.uqbar.org/img/languages/React-logo.png", id: 1 },
    {
      src: "https://ubunlog.com/wp-content/uploads/2021/01/about-reactjs.png",
      id: 2,
    },
  ]);

  const [groceryProducts, setGroceryProducts] = useState([
    { id: 1, name: "Oranges", votes: 0 },
    { id: 2, name: "Bananas", votes: 0 },
  ]);

  const onGroceryProductVote = (productId) => {
    const products = groceryProducts.slice();
    products.find((e) => e.id === productId).votes++;
    sortDescProduct(products);
    setGroceryProducts(products);
  };

  const onGroceryProductUnvote = (productId) => {
    const products = groceryProducts.slice();
    const product = products.find((e) => e.id === productId);

    if (product.votes) product.votes--;

    sortDescProduct(products);
    setGroceryProducts(products);
  };

  const sortDescProduct = (products) => {
    products.sort((a, b) => (a.votes < b.votes ? 1 : -1));
  };
  const onRemove = (id) => {
    setLinks(links.filter((x) => x.id !== id));
  };

  return (
    <div className="App">
      {/* Render here each component from the "components" directory */}
      <h3>'Message' test</h3>
      <Message />
      <br />
      <hr />
      <h3>'FocusableInput' test</h3>
      <FocusableInput focusable={true} />
      <br />
      <hr />
      <h3>'ListItemsForNavigation' test</h3>
      <ListItemsForNavigation />
      <br />
      <hr />
      <h3>'ImageGallery' test</h3>
      <ImageGallery onRemove={onRemove} links={links} />
      <br />
      <hr />
      <h3>'PlayerStatus' test</h3>
      <PlayerStatus />
      <br />
      <hr />
      <h3>'TeamsList' test</h3>
      <TeamsList />
      <hr />
      <h3>'Rating'</h3>
      <Rating />
      <hr />
      <h3>'Grocery'</h3>
      <Grocery
        products={groceryProducts}
        onVote={onGroceryProductVote}
        onUnvote={onGroceryProductUnvote}
      />
    </div>
  );
}
