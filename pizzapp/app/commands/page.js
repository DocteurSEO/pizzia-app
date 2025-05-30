'use client';
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import styles from "./page.module.css";
import CardProduct from "../components/cardProduct";


export default function Commands() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3001/products');
                const data = await response.json();
                setProducts(data);
                console.log('Produits:', data);
            } catch (error) {
                console.error('Erreur produits:', error);
            }
        };

        fetchProducts();
    }, []);


    return (
        <div>
            <Navbar />
            <h1>Liste des produits</h1>
            <div className={styles.contain_cards}>
                {products.map(product => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}