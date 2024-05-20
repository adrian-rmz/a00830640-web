import { expect, it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import CharacterCard from './CharacterCard';

describe('CharacterCard Component Test', () => {
  const character = {
    id: 1,
    name: 'Rick Sanchez',
    img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    location: 'Earth (C-137)'
  };

  it('should render the character card with correct details', () => {
    render(
      <CharacterCard
        id={character.id}
        name={character.name}
        img={character.img}
        status={character.status}
        species={character.species}
        gender={character.gender}
        location={character.location}
      />
    );

    // Character Details
    expect(screen.getByText(character.name)).toBeInTheDocument();
    expect(screen.getByText(`Status:`)).toBeInTheDocument();
    expect(screen.getByText(character.status)).toBeInTheDocument();
    expect(screen.getByText(`Species:`)).toBeInTheDocument();
    expect(screen.getByText(character.species)).toBeInTheDocument();
    expect(screen.getByText(`Gender:`)).toBeInTheDocument();
    expect(screen.getByText(character.gender)).toBeInTheDocument();
    expect(screen.getByText(`Location:`)).toBeInTheDocument();
    expect(screen.getByText(character.location)).toBeInTheDocument();

    // Favorite Button
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
