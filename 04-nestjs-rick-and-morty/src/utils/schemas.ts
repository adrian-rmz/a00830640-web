// utils/schemas.ts
import { z } from 'zod';

const locationSchema = z.object({
  name: z.string(),
  url: z.string().url(),
});

const characterSchema = z.object({
  id: z.number(),
  name: z.string(),
  status: z.string(),
  species: z.string(),
  gender: z.string(),
  image: z.string().url(),
  url: z.string().url(),
  location: locationSchema,
});

export const charactersSchema = z.array(characterSchema);
