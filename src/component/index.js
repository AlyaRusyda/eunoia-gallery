import React, { useState, useEffect } from "react";
import ImageCard from "./Card";
import Search from './Search'
import Footer from "./Footer";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto mb-16 mt-8 h-sc">
      <div className="text-center font-bold">
        <h1 className="text-4xl text-teal-600">Shop Our</h1>
        <h2 className="text-4xl text-teal-600 mt-4">Baby Products</h2>
      </div>
      <Search />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4"></div>
      {
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images
            .filter((image) => {
              return search.toLowerCase() === ""
                ? image
                : image.name.toLowerCase().includes(search);
            })
            .map((image) => (
              <ImageCard key={image.id} image={image} coba={image.image} />
            ))}
        </div>
      }
      <Footer />
    </div>
  );
}

export default App;
