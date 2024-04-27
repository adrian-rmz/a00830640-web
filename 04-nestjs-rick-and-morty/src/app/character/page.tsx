"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

function CharacterPage() {
  const idParams = useSearchParams();
  const characterId = idParams.get("id");
  const [character, setCharacter] = useState({
    id: 0,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: {
      name: "",
      url: "",
    },
    location: {
      name: "",
      url: "",
    },
    image: "",
    episode: [],
    url: "",
    created: "",
  });

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${characterId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch character");
        }
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };

    if (characterId) {
      fetchCharacter();
    }
  }, [characterId]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-green-700 text-white">
      <div className="md:w-1/2 p-10 flex justify-center">
        <Image src={character.image} alt={character.name} width={500} height={500} className="rounded-full shadow-2xl transition-all duration-500 hover:scale-105" />
      </div>
      <div className="md:w-1/2 p-10 space-y-4">
        <h1 className="text-5xl font-bold drop-shadow-md">{character.name}</h1>
        <p className="text-xl"><span className="font-semibold">Status:</span> {character.status}</p>
        <p className="text-xl"><span className="font-semibold">Species:</span> {character.species}</p>
        <p className="text-xl"><span className="font-semibold">Type:</span> {character.type}</p>
        <p className="text-xl"><span className="font-semibold">Gender:</span> {character.gender}</p>
        <p className="text-xl"><span className="font-semibold">Origin:</span> {character.origin.name}</p>
        <p className="text-xl"><span className="font-semibold">Location:</span> {character.location.name}</p>
        <p className="text-xl"><span className="font-semibold">Episodes Featured:</span> {character.episode.length}</p>
      </div>
    </div>
  );
}

export default CharacterPage;
