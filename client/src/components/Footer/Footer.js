import React from "react";
import styles from "./Footer.module.scss";


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.item}>
                    <h1>Kategorie</h1>
                    <span>Niemowlak</span>
                    <span>Dziewczynka</span>
                    <span>Chłopiec</span>
                    <span>Promocje</span>
                    <span>Nowości</span>
                </div>
                <div className={styles.item}>
                    <h1>Linki</h1>
                    <span>Instagram</span>
                    <span>Facebook</span>
                </div>
                <div className={styles.item}>
                    <h1>Kontakt</h1>
                    <span>Telefon</span>
                    <span>email</span>

                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.left}>
                    <div className={styles.item}>Logo</div>
                    <div className={styles.item}>Polityka prywatności</div>
                </div>

                <div className={styles.right}>
                    <div className={styles.item}>Płatności</div>
                </div>
            
            </div>
               
          
            
        </div>
    )
}
export default Footer;