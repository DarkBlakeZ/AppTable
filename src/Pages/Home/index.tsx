import "./index.css";
import Card from "../../Components/Card";
import { searchImages } from "../../Services/searchImages";
import { useEffect, useState } from "react";
import { Photo } from "pexels";

export default function Home() {

  const [photos, setPhotos] = useState<Array<Photo>>();

  const getData = async () => {
    const images = await searchImages();

    setPhotos(images);
  }

  useEffect(()=>{

    getData();

  },[])

  return (
    <>
      <h1>Menu</h1>

      {
        !photos ?
        <h2>Loading...</h2>
        : 
        photos.map((item: Photo, index: number) => (
            <Card
              key={index}
              title={item.photographer}
              description={item.photographer_url}
              price={item.id}
              img={item.src.original}
            />
        ))
      }
      
    </>
  );
}
