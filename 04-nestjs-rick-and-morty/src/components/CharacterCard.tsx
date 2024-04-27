"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Icons for favorite/not favorite

interface Props {
  id: number;
  name: string;
  img: string;
  status: string;
  species: string;
  gender: string;
  location: string;
}

const Card: React.FC<Props> = ({
  id,
  name,
  img,
  status,
  species,
  gender,
  location,
}) => {
  const [favorite, setFavorite] = useState<boolean>(false);

  useEffect(() => {
    const storageFavorites = localStorage.getItem("favorites");
    if (storageFavorites) {
      const favoritesArray = JSON.parse(storageFavorites);
      setFavorite(favoritesArray.includes(id));
    }
  }, [id]);

  const toggleFavorite = () => {
    setFavorite(!favorite);
    let favoritesArray: number[] = [];
    const favoritesFromStorage = localStorage.getItem("favorites");
    if (favoritesFromStorage) {
      favoritesArray = JSON.parse(favoritesFromStorage);
    }
    if (favorite) {
      favoritesArray = favoritesArray.filter(favoriteId => favoriteId !== id);
    } else {
      favoritesArray.push(id);
    }
    localStorage.setItem("favorites", JSON.stringify(favoritesArray));
  };

  return (
    <div className="h-full w-80 rounded-lg drop-shadow-lg bg-white hover:bg-gray-100 transition-colors duration-300 ease-in-out">
      <div>
        <Image src={img} alt={name} width={100} height={100} className="w-full"/>
      </div>
      <div className="px-6 py-4 min-h-48">
        <h3 className="font-bold text-xl mb-2">{name}</h3>
        <p className="text-gray-700 font-semibold">Status: <span className=" font-normal">{status}</span></p>
        <p className="text-gray-700 font-semibold">Species: <span className=" font-normal">{species}</span></p>
        <p className="text-gray-700 font-semibold">Gender: <span className=" font-normal">{gender}</span></p>
        <p className="text-gray-700 font-semibold">Location: <span className=" font-normal">{location}</span></p>
      </div>
      <div className="px-8 py-2 flex justify-between mb-6">
        <Link href={`/character?id=${id}`}>
          <p className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-16 rounded transition-colors duration-300 ease-in-out">
            Read more
          </p>
        </Link>
        <button
          onClick={toggleFavorite}
          className="text-2xl text-red-500 hover:text-red-700 transition-colors duration-300 ease-in-out"
        >
          {favorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
};

export default Card;
