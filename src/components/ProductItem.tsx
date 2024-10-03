import React from "react";

interface Product {
    id: number;
    name: string;
    price: number;
}

interface ProductItemProps {
    product: Product;
    addToCart: (product: Product) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, addToCart }) => {
    return (
        <div
            style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
            }}
        >
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;