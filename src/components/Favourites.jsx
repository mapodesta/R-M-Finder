import React from "react";
import { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import AppContext from "../context/AppContext";
import "../styles/globalStyles.css";
import "../styles/favourites.css";
export default function Favourites() {
  const data = useContext(AppContext);
  const { state, dark } = data;
  return (
    <div className="favourites-container">
      <Row>
        <h1>Favourites</h1>
      </Row>
      <Row>
        {state.favourites &&
          state.favourites.map((fav, index) => {
            return (
              <Col key={index} style={{ margin: "3rem" }} md={3}>
                <Card
                  style={{ width: "18rem", border: "1px solid" }}
                  className={dark ? "darkmode" : "lightmode"}
                >
                  <Card.Img variant="top" src={fav.image} />
                  <Card.Body>
                    <Card.Title>{fav.name}</Card.Title>
                    <Card.Text>
                      {fav.species}
                      <br />
                      {fav.status}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
}
