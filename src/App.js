import { useEffect, useState } from "react";
import Card from "./Card";
import Search from "./Search";
import ShoppingCart from "./ShoppingCart";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=25836140-af2022faa18ae226581b4982b&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div>
      {openCart && <ShoppingCart setOpenCart={setOpenCart} />}
      <button
        onClick={() => setOpenCart(true)}
        className="absolute top-2 right-2 bg-orange-500 px-2 rounded-lg text-white "
      >
        {" "}
        Open
      </button>
      <Search setTerm={setTerm} />
      <div className="grid sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {!isLoading && images.length === 0 && (
          <h1 className="text-center text-xl ">Nothing found</h1>
        )}
        {isLoading ? (
          <h1 className="text-center text-xl ">Loading</h1>
        ) : (
          images.map((item) => <Card key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
}

export default App;
