import "./index.css";
import Card from "../../Components/Card";
import { searchImages } from "../../Services/searchImages";
import { useEffect, useState } from "react";
import { Photo } from "pexels";
//import {Swal2} from "../../Components/Swal2"; 
import {Toast} from '../../Functions/Toast'
import Header from "../../Components/Header";

export default function Home() {

  const [photos, setPhotos] = useState<Array<Photo>>();

  const getData = async () => {
    const images = await searchImages();

    setPhotos(images);
  }

  const AddCar = (id:number) => {
    console.log("Voy a agregar al carrito");
    //Swal2({title:"Carrito", message:"Producto añadido al carrito", icon:"success"});
    Toast({type:"success", message:`Agregado en carrito! ${id}`});
  }

  useEffect(()=>{

    getData();

  },[])

  return (
    <>
      <Header />
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
              OnClick={() => AddCar(item.id)}
            />
        ))
      }
      
    </>
  );
}
