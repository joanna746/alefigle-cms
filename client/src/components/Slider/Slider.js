import React, { useState, useEffect } from "react";
import styles from "./Slider.module.scss";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        `${process.env.PUBLIC_URL}/images/slider2.jpg`,
        `${process.env.PUBLIC_URL}/images/slider1.jpg`,
        `${process.env.PUBLIC_URL}/images/slider3.jpg`,
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
    }

    useEffect(() => {
     
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => {
           
            clearInterval(interval);
        };
    }, [currentSlide]);

    return (
        <div className={styles.slider}>
            <div className={styles.container} style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index + 1}`} />
                ))}
            </div>
            <div className={styles.icons}>
                <div className={styles.icon} onClick={prevSlide}>
                    <WestIcon />
                </div>
                <div className={styles.icon} onClick={nextSlide}>
                    <EastIcon />
                </div>
            </div>
        </div>
    );
}

export default Slider;
