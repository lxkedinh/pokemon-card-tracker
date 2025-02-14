import { supabase } from '$lib/supabaseClient';
import type { PokemonCard } from '$lib/types';

export async function load() {
  const { data } = await supabase.from("cards").select();
  return {
    cards: data ?? [] as PokemonCard[],
  };
}
