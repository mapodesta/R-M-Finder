import React from "react";
import { useContext } from "react";
import "../styles/globalStyles.css";
import { Container } from "react-bootstrap";
import AppContext from "../context/AppContext";
import Header from "./Header";

export default function Layout({ children }) {
  const state = useContext(AppContext);
  const { dark } = state;
  return (
    <div className={dark ? "darkmode" : "lightmode"}>
      <Container
        className={dark ? "darkmode" : "lightmode"}
        style={{ border: "none", height: "100%" }}
      >
        <Header />
        {children}
      </Container>
    </div>
  );
}
