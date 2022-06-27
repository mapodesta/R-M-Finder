import React, { useState, useMemo, useRef, useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import useCharacters from "../hooks/useCharacters";
import "../styles/globalStyles.css";
import Search from "./Search";
import { API } from "../constants/constants";
import "../styles/characters.css";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import Character from "./Character";

export default function Characters() {
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);
  const characters = useCharacters(API);
  const data = useContext(AppContext);
  const { addFavourite, deleteFavourite } = data;

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <div className="characters-container">
      <Row className="characters-header">
        <Col md={{ span: 4, offset: 1 }}>
          <h3>Find your favourites characters</h3>
        </Col>
        <Search
          handleSearch={handleSearch}
          search={search}
          searchInput={searchInput}
        />
      </Row>
      <Row>
        {filteredUsers &&
          filteredUsers.map((character, index) => {
            return (
              <Col key={index} md={4} className="characters-col">
                <Character
                  character={character}
                  addFavourite={addFavourite}
                  deleteFavourite={deleteFavourite}
                />
              </Col>
            );
          })}
      </Row>
    </div>
  );
}
