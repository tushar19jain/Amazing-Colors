import { SEARCH_VALUE } from "../CONSTANT";

export function SearchAction(item: string | null) {
  return {
    type: SEARCH_VALUE,
    payload: item,
  };
}

