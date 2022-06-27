import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import "../styles/globalStyles.css";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import { MdDarkMode, MdWbSunny, MdHome } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";

export default function Header() {
  const data = useContext(AppContext);
  const { dark, setBackground, state } = data;
  const style = dark ? "white" : "black";

  const handleDarkMode = () => {
    setBackground(!dark);
  };

  return (
    <Row className={dark ? "darkmode" : "lightmode"} style={{ border: "none" }}>
      <Col md={{ span: 8 }} className="header-col">
        <h1 style={{ textAlign: "end" }}>Rick and Morty Finder</h1>
      </Col>
      <Col md={{ span: 2, offset: 2 }} className="header-col-icons">
        {dark ? (
          <MdWbSunny size={32} onClick={handleDarkMode} />
        ) : (
          <MdDarkMode size={32} onClick={handleDarkMode} />
        )}

        <Link to="/">
          <MdHome size={32} style={{ color: style }} />
        </Link>

        <Link to="/favourites">
          <AiFillHeart size={32} style={{ color: style }} />
        </Link>
        {state.favourites.length}
      </Col>
    </Row>
  );
}
