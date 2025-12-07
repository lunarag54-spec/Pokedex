import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PokeballImg from "../assets/pokeball.png";
import Footer from "../components/Footer";
import Styles from "../pages/pokemon.module.css";
import { PokemonDetails } from "../types/types";
import { fetchPokemon } from "../api/fetchPokemon";
import LoadingScreen from "../components/LoadingScreen";

const Pokemon = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [pokemon, setPokemon] = useState<PokemonDetails>();
    const { name } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getPokemon(){
            setIsLoading(true);
            await (500);
            const pokemonData = await fetchPokemon(name as string);
            setPokemon(pokemonData);
            setIsLoading(false)
        }
        getPokemon();
    }, [name])

    if(isLoading || !pokemon){
        return <LoadingScreen />
    }

    return (
        <>
            <button className={Styles.pokeballButton} onClick={() => navigate(-1)}>
                <img className={Styles.pokeballImg} src={PokeballImg} alt="Pokeball" /> Volver
            </button>
            <div className={Styles.pokemon}>
                <main className={Styles.pokemonInfo}>
                <div className={Styles.pokemonTTitle}> {pokemon?.name?.toUpperCase()} </div>
                <div>Nr. {pokemon?.id}</div>
                <div>
                    <img className={Styles.pokeballInfoImg} src={pokemon?.imgSrc} alt="bulbasaur" />
                </div>
                <div>Hp: {pokemon?.hp}</div>
                <div>Ataque: {pokemon?.attack}</div>
                <div>Defensa: {pokemon?.defense}</div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Pokemon;