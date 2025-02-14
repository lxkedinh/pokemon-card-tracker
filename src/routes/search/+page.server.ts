import { PokemonApiUrl } from "$lib/utils";
import type { Actions } from "@sveltejs/kit";
import type { PokemonCardBrief } from "$lib/types";

export const actions = {
  default: async ({ request, fetch }) => {
    const data = await request.formData();
    const query = data.get('query');
    const response = await fetch(`${PokemonApiUrl}/cards?name=${query}`);
    return await response.json() as PokemonCardBrief[];
  }
} satisfies Actions;
