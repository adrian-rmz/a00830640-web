"use client";
import { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard";
import { charactersSchema } from "../utils/schemas";

export default function HomePage() {
  const [characters, setCharacters] = useState([
    {
      id: 0,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      gender: "Male",
      image: "",
      url: "",
      location: {
        name: "",
        url: "",
      },
    },
  ]);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      // Validate the data with Zod
      const parsedData = charactersSchema.parse(data.results);
      setCharacters(parsedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <div className="m-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 place-items-center">
        {characters.map((character, index) => (
            <CharacterCard
              key={index}
              id={character.id!}
              name={character.name!}
              img={character.image!}
              status={character.status!}
              species={character.species!}
              gender={character.gender!}
              location={character.location.name}
            />
          ))}
        </div>
      </div>
  );
}
