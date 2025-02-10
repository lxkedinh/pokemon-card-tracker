import { baseApiUrl } from "$lib/utils";
import type { Actions } from "@sveltejs/kit";
import type { CardBrief } from "$lib/types";

export const actions = {
  default: async ({ request, fetch }) => {
    const data = await request.formData();
    const query = data.get('query');
    const response = await fetch(`${baseApiUrl}/cards?name=${query}`);
    return await response.json() as CardBrief[];
  }
} satisfies Actions;
