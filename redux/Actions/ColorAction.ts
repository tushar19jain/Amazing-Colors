import { ADD_TO_SAVE, REMOVE_FROM_SAVE } from "../CONSTANT";

export function ColorSaveAction(item: {}) {
  return {
    type: ADD_TO_SAVE,
    payload: item,
  };
}
export function ColorRemoveAction(item: string) {
  return {
    type: REMOVE_FROM_SAVE,
    payload: item,
  };
}
