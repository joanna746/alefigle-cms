import React from "react";
import styles from "./Home.module.scss";
import Slider from "../../components/Slider/Slider";
import FuturedProduct from "../../components/FuteredProduct/FuteredProduct";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";


const Home = () => {
    return (
        <div className={styles.home}>
            <Slider/>
            <FuturedProduct type="Przecenione"/>
            <Categories/>
            <FuturedProduct type="Nowe"/>
            <Contact/>
        </div>
    )
}
export default Home;