import React from "react";
import styles from "./Products.module.scss";
import List from "../../components/List/List";


const Products = () => {
    return (
        <div className={styles.products}>
            <div className={styles.left}>
                <div className={styles.filterItem}>
                    <h2>Kategorie produktów</h2>
                    <div className={styles.inputItem}>
                        <input type="checkbox" id="1" value={1}/>
                        <label htmlFor="1">Spodnie</label>
                    </div>
                    <div className={styles.inputItem}>
                        <input type="checkbox" id="2" value={2}/>
                        <label htmlFor="2">Bluzki</label>
                    </div>
                    <div className={styles.inputItem}>
                        <input type="checkbox" id="3" value={3}/>
                        <label htmlFor="3">Koszulki</label>
                    </div>
                    <div className={styles.inputItem}>
                        <input type="checkbox" id="4" value={4}/>
                        <label htmlFor="4">Okrycia wierzchnie</label>
                    </div>
                </div>
                <div className={styles.filterItem}>
                    <h2>Filtr cenowy</h2>
                    <div className={styles.inputItem}>
                        <span>0</span>
                        <input type="range" min={0} max={500}/>
                        <span>500</span>
                    </div>
                </div>
                <div className={styles.filterItem}>
                    <h2>Sortuj po</h2>
                    <div className={styles.inputItem}>
                        <input type="radio" id="asc" value="asc" name="price"/>
                        <label htmlFor="asc">Najniższa cena</label>
                    </div>
                    <div className={styles.inputItem}>
                        <input type="radio" id="desc" value="desc" name="price"/>
                        <label htmlFor="desc">Najwyższa cena</label>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <img src=""/>
                <List/>
            </div>
        </div>
    )
}
export default Products;