import { Photo } from 'pexels';

import axios, { AxiosResponse } from "axios";


export const searchImages = async () => {

    let arrayImgs: Array<Photo> = [];

    await axios.get("https://api.pexels.com/v1/curated?per_page=10",{
        headers: {'Authorization': '563492ad6f9170000100000162c20f17adb74b718a16ddb2a6d1b764'}
    })
        .then((result: AxiosResponse<any>) => {
            // handle success
            arrayImgs = result.data.photos;
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
        .then(() => {
            // always executed
            console.log("Finalizado con exito!");
        });

    return arrayImgs;

}

