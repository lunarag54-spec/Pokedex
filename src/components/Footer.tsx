import React from "react";
import { Link } from "react-router-dom";
import PokemonPic from '../assets/pikachu.png';
import LocationPic from '../assets/pointer.png';
import ItemPic from '../assets/pokeball.png';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link className={styles.footerLink} to="/pokemons">
            <img src={PokemonPic} className={styles.footerIcon} alt="Pokebal" />
            Pokemons
            </Link>
            <Link onClick={(event) => event.preventDefault()} className={styles.footerLink} to="/items">
            <img src={ItemPic} className={styles.footerIcon} alt="Pokebal" />
            Items
            </Link>
            <Link onClick={(event) => event.preventDefault()} className={styles.footerLink} to="/location">
            <img src={LocationPic} className={styles.footerIcon} alt="Pokebal" />
            Map
            </Link>
        </footer>
        );
};

export default Footer;