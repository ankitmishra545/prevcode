import React from 'react'
import { useSelector } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function ProductsContent() {

  const storeObject = useSelector((store) => {
    return store.products;
  })

  console.log(storeObject);
  return (
    <div className='productsDiv'>
      {
        storeObject.map((object) => {          
          return <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={object.images[0]} />
              <Card.Body>
                <Card.Title>{object.title}</Card.Title>
                <Card.Text>{object.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item><strong>Category:</strong> {object.category}</ListGroup.Item>
                <ListGroup.Item><strong>Price:</strong> {object.price}</ListGroup.Item>
                <ListGroup.Item><strong>Rating:</strong> {object.rating}</ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        })
      }
    </div>
  )
}

export default ProductsContent