import React from "react";
import styles from "./Card.module.scss";
import {Link} from 'react-router-dom';


const Card = ({item}) => {
    return(
      
        <Link className={styles.link} to ={`/productsData/${item.id}`}>
        <div className={styles.card}>
            <div className={styles.foto}>
                <img src={item.img} alt="" className={styles.imageOne}/>
                <img src={item.img} alt="" className={styles.imageTwo}/>
            </div>
            <h2>{item.title}</h2>
            <div className={styles.prices}>
                <h3>{item.oldPrice}zł</h3>
                <h3>{item.price}zł</h3>
            </div>

        </div>
        </Link>
    
    )
}

export default Card;