import React from "react";
import styles from "./Categories.module.scss";
import {Link} from "react-router-dom";

const Categories = () => {
    return(
        <div className={styles.categories}>
    <div className={styles.col}>
        <div className={styles.row}>
            <img src={process.env.PUBLIC_URL + '/images/chlopcy.jpg'} alt="Obrazek Chłopcy" />
            <button>
            <Link className={styles.link} to= "/products/3">Chłopiec</Link>
        </button>
        </div>
        
        <div className={styles.row}>
            <img src={process.env.PUBLIC_URL + '/images/dziewczynki.jpg'} alt="Obrazek Dziewczynki" />  
            <button>
            <Link className={styles.link} to= "/products/2">Dziewczynka</Link>
        </button>
        </div>
    </div>
    <div className={styles.colLarge}>
        <div className={styles.row}>
            <img src={process.env.PUBLIC_URL + '/images/Nowości.jpg'} alt="Obrazek Nowości" />
            <button>
            <Link className={styles.link} to= "/products/5">Nowości</Link>
            </button>
        </div>
    </div>
    <div className={styles.col}>
        <div className={styles.row}>
            <img src={process.env.PUBLIC_URL + '/images/Niemowlaki.jpg'} alt="Obrazek Niemowlaki" />
            <button>
            <Link className={styles.link} to= "/products/1">Niemowlaki</Link>
            </button>
        </div>
        <div className={styles.row}>
            <img src={process.env.PUBLIC_URL + '/images/Promocje.png'} alt="Obrazek Promocje" />
            <button>
            <Link className={styles.link} to= "/products/4">Promocje</Link>
            </button>
        </div>
    </div>
</div>

    )
}
export default Categories;