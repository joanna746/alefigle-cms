import React from "react";
import styles from "./Contact.module.scss";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Contact = () => {
    return(
        <div className={styles.contact}>
            <div className={styles.wrapper}>
                <span>Dołącz do nas:</span>
                <div className={styles.email}>
                    <input type="text" placeholder="Wpisz swój email"/>
                    <button>Dołącz</button>
                </div>
                <div className={styles.icons}>
                    <InstagramIcon/>
                    <FacebookIcon/>

                </div>
            </div>
           
        </div>
    )
}
export default Contact;