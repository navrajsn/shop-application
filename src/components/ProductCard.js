import React from 'react'
import { Card } from 'react-bootstrap'

const ProductCard = ({ product }) => {
  const border = product.isSale ? 'danger' : 'secondary'

  return (
    <div data-testid="products" className="products">
      <Card border={border} className="card">
        <Card.Img
          variant="top"
          className="image"
          src={product.productImage ? product.productImage : 'Product_1.jpeg'}
        />
        <Card.Body>
          <Card.Title data-testid="productName">
            {product.productName}
          </Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            {product.isSale && <span style={{ color: 'red' }}>On Sale! </span>}
            <br />
            <span>{product.price}</span>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductCard
