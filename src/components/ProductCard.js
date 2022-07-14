import React from 'react'
import { Card } from 'react-bootstrap'

const ProductCard = ({ product }) => {
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src="Product_1.jpeg" />
        <Card.Body>
          <Card.Title>{product.productName}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>{product.price}</span>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductCard
