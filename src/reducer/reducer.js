export const ORDER = "order";
export const TOTAL_SUM = "totalSum";
export const MEALS = "meals";
export const ISCARTOPEN = "isCartOpen";

export const reducer = (state, action) => {
  switch (action.type) {
    case ORDER:
      return { ...state, order: action.payload };
    case TOTAL_SUM:
      return { ...state, totalSum: action.payload };
    case MEALS:
      return { ...state, meals: action.payload };
    case ISCARTOPEN:
      return { ...state, isCartOpen: action.payload };
    default:
      throw Error("Unknown action: " + action.type);
  }
};

export const init = (state) => {
  return state;
};
