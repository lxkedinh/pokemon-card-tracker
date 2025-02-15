import { PokemonApiUrl } from "$lib/utils";
import type { Actions } from "@sveltejs/kit";
import type { PokemonCardBrief } from "$lib/types";

export const actions = {
  default: async ({ request, fetch }) => {
    const data = await request.formData();
    const query = data.get('query');
    const response = await fetch(`${PokemonApiUrl}/cards?name=${query}`);
    return await response.json() as PokemonCardBrief[];
  },
  add: async ({ request, fetch }) => {
    const formData = await request.formData();
    const id = formData.get('id');
    const response = await fetch(`${PokemonApiUrl}/cards/${id}`);
    if (response.status != 200) {
      throw new Error('Could not add card. Try again.');
    }

    const data = (await response.json()) as PokemonCardResponse;
    const { error } = await supabase.from('cards').insert([
      {
        id: data.id,
        name: data.name,
        image: data.image,
        set: data.set.name
      }
    ]);

    if (error) {
      throw new Error('');
    }
  }
} satisfies Actions;
