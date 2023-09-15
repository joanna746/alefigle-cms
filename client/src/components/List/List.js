import React from "react";
import styles from "./List.module.scss";
import Card from "../Card/Card";

const List = () => {
    const productsData = [
        {
            id: 1,
            name: 'shirt',
            title: 'Spódniczki',
            img: `${process.env.PUBLIC_URL}/images/spodnica.jpg`,
            basePrice: 90,
            oldPrice: 100,
            price: 85,
            colors: ['red', 'lightbeige', 'white','pink','green'],
            sizes: [
              { name: '1-2lata', additionalPrice: 10 },
              { name: '3-4lata', additionalPrice: 15 },
              { name: '5-6lat', additionalPrice: 20 },
              { name: '7-15lat', additionalPrice: 25 }
            ]
          },
          {
            id: 2,
            name: 'hat',
            title: 'Czapki',
            img:`${process.env.PUBLIC_URL}/images/czapka.jpg`,
            basePrice: 30,
            oldPrice: 35,
            price: 25,
            colors: ['lightblue', 'grey', 'red','beige','pink','blue'],
            sizes: [
              { name: 'S', additionalPrice: 10 },
              { name: 'M', additionalPrice: 15 },
              { name: 'L', additionalPrice: 20 },
              { name: 'XL', additionalPrice: 25 }
            ]
          },
          {
            id: 3,
            name: 'hat',
            title: 'Czapki',
            img:`${process.env.PUBLIC_URL}/images/czapka.jpg`,
            basePrice: 30,
            oldPrice: 35,
            price: 25,
            colors: ['lightblue', 'grey', 'red','beige','pink','blue'],
            sizes: [
              { name: 'S', additionalPrice: 10 },
              { name: 'M', additionalPrice: 15 },
              { name: 'L', additionalPrice: 20 },
              { name: 'XL', additionalPrice: 25 }
            ]
          },
          {
            id: 4,
            name: 'shirt',
            title: 'Spódniczki',
            img: `${process.env.PUBLIC_URL}/images/spodnica.jpg`,
            basePrice: 90,
            oldPrice: 100,
            price: 85,
            colors: ['red', 'lightbeige', 'white','pink','green'],
            sizes: [
              { name: '1-2lata', additionalPrice: 10 },
              { name: '3-4lata', additionalPrice: 15 },
              { name: '5-6lat', additionalPrice: 20 },
              { name: '7-15lat', additionalPrice: 25 }
            ]
          },
         
    ];
    return(
        <div className={styles.list}>
            {productsData.map(item=>(
                <Card item = {item} key={item.id} />
            ))}
        </div>
    )
}
export default List;