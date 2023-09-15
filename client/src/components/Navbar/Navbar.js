import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";



const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.item}><span>PL</span><KeyboardArrowDownIcon/></div>
                    <div className={styles.item}><Link className={styles.link} to ="products/1">Niemowlak</Link></div>
                    <div className={styles.item}><Link className={styles.link} to ="products/2">Dziewczynka</Link></div>
                    <div className={styles.item}><Link className={styles.link} to ="products/3">Chłopiec</Link></div>
                    <div className={styles.item}><Link className={styles.link} to ="products/4">Promocje</Link></div>
                    <div className={styles.item}><Link className={styles.link} to ="products/5">Nowości</Link></div>
                </div>
                <div className={styles.center}>
                    <Link className={styles.link} to = "/">
                    <img 
                    className={styles.image}
                    alt='ale figle'
                    src={`${process.env.PUBLIC_URL}/images/logo-firmy.jpg`} />
                    </Link>
                </div>
                <div className={styles.right}>
                   <div className={styles.icons}>
                    <SearchIcon/>
                    <PersonOutlineIcon/>
                    <FavoriteBorderIcon/>
                    <div className={styles.cartIcon}>
                    <ShoppingBasketIcon/>
                    <span>0</span>
                    </div>
                    </div> 
                </div>

            </div>   
        </div>
    )
}
export default Navbar;