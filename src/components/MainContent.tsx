// src/components/MainContent.tsx
import React, {useState} from "react";
import "../styles/MainContent.css";
import {menProducts, womenProducts, accessoriesProducts, shoesProducts, saleProducts} from "../assets/dummy.tsx"

const MainContent: React.FC = () => {
    const [currentProducts, setCurrentProducts] = useState(menProducts);

    return (
        <main className="main-content">
            <nav className="header__nav">
                <ul>
                    <button onClick={() =>
                        setCurrentProducts(menProducts)
                    }>
                        남성
                    </button>
                    <button onClick={() => {
                        setCurrentProducts(womenProducts);
                    }}>
                        여성
                    </button>
                    <button onClick={() => {
                        setCurrentProducts(accessoriesProducts);
                    }}>
                        액세서리
                    </button>
                    <button onClick={() => {
                        setCurrentProducts(shoesProducts);
                    }}>
                        신발
                    </button>
                    <button onClick={() => {
                        setCurrentProducts(saleProducts)
                    }}>
                        세일
                    </button>
                </ul>
            </nav>
            <h2>신상품</h2>
            <div className="product-grid">
                {currentProducts.map((product) => (
                    <div className="product-card" key={product.id}>
                        <a href={product.srcUrl} target="_blank">
                            <img src={product.imageUrl} alt={product.name}/>
                            <h3 className="product-card__name">{product.name}</h3>
                            <p className="product-card__price">
                                {product.price.toLocaleString()}원
                            </p>
                        </a>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default MainContent;