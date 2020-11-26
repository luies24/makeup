import React, { Component } from "react";
import ProductCard from "./Components/ProductCard";

export default function ProductCollection({ inventory, showProduct, cartList }) {

    return (
        <div className="productCollection-div">
            {inventory.map(product =>
                <ProductCard
                    key={product.id}
                    product={product}
                    showProduct={showProduct}
                    cartList={cartList}
                />
            )}
        </div>
    );
}