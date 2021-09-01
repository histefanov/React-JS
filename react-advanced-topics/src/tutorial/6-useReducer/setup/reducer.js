export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      people: [...state.people, action.payload],
      isModalOpen: true,
      modalContent: "person added",
    };
  } else if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      people: state.people.filter((person) => person.id !== action.payload),
      isModalOpen: true,
      modalContent: "person removed",
    };
  } else if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "no value provided",
    };
  } else if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  throw new Error("No matching action type.");
};
