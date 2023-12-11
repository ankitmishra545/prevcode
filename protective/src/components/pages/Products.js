import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

function Products() {
  const [numberState, setNumberState] = useState();

  const storeObject = useSelector((store) => {
    // console.log(store);
    return store.products.products;
  });

  useEffect(() => {
    const number = localStorage.getItem("number");
    setNumberState(number);
  }, []);

  window.addEventListener("number", () => {
    const number = localStorage.getItem("number");
    console.log(number);
    setNumberState(number);
  });

  return (
    <div className="productsDiv">
      {storeObject.map((object, index) => {
        return (
          <div key={index}>
            <Card style={{ width: "18rem" }}>
              <Card.Title className="productCardTitle">
                <strong>{numberState}</strong>
              </Card.Title>
              <Card.Img variant="top" src={object.images[0]} />
              <Card.Body>
                <Card.Title>{object.title}</Card.Title>
                <Card.Text>{object.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <strong>Category:</strong> {object.category}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Price:</strong> {object.price}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Rating:</strong> {object.rating}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
