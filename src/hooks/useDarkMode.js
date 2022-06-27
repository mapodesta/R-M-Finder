import { useState } from "react";

const useDarkMode = () => {
  const initialState = {
    favourites: [],
  };

  const [dark, setDark] = useState(false);
  const [state, setState] = useState(initialState);

  const addFavourite = (payload) => {
    setState({
      ...state,
      favourites: [...state.favourites, payload],
    });
  };

  const deleteFavourite = (payload) => {
    setState({
      ...state,
      favourites: state.favourites.filter((fav) => fav.id !== payload.id),
    });
  };

  const setBackground = (payload) => {
    setDark(payload);
  };

  return { addFavourite, deleteFavourite, setBackground, dark, state };
};

export default useDarkMode;
