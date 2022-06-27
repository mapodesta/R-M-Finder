import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { MdFavorite } from "react-icons/md";
import { Card } from "react-bootstrap";
import "../styles/characters.css";

export default function Character({ character }) {
  const data = useContext(AppContext);
  const { dark, addFavourite, deleteFavourite, state } = data;

  const handleFavourites = (favourite) => {
    if (!ids.some(isFav)) {
      addFavourite(favourite);
    } else {
      deleteFavourite(favourite);
    }
  };

  const ids = state.favourites.map((fav) => fav.id);

  function isFav(element) {
    return element === character.id;
  }

  return (
    <Card
      style={{ width: "18rem", border: "1px solid" }}
      className={dark ? "darkmode" : "lightmode"}
    >
      <Card.Img variant="top" src={character.image} />
      <Card.Body>
        <Card.Title className="character-card-title">
          {character.name}{" "}
          <MdFavorite
            size={32}
            onClick={() => handleFavourites(character)}
            className={
              ids.some(isFav)
                ? "character-icon-style"
                : "characters-add-favourites"
            }
          />
        </Card.Title>
        <Card.Text>
          {character.species}
          <br />
          {character.status}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
