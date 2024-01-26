"use client"
import Image from "next/image";
import style from "./pokemon.module.css";
import { useEffect,useState } from "react";

function pokemon (){
    const [pokemon,setPokemon]=useState("/vercel.svg");
    const [pokemon2,setPokemon2]=useState("/vercel.svg");
    const [pokemon3,setPokemon3]=useState("/vercel.svg");
    const [pokemon4,setPokemon4]=useState("/vercel.svg");
    const [estado, setEstado]=useState("esperando");
    const [altura, setAltura] = useState("altura");
    const [id, setId] = useState("id");
    const [lista, setLista] = useState("lista");
    const [peso, setPeso] = useState("peso");
    const [estadisticas, setEstadisticas] = useState("estadisticas");
    const [habilidad, setHabilidad] = useState("habilidad");
    const [tipo, setTipo] = useState("tipo");
    const [hp, setHp] = useState("hp");
    const [ataque, setAtaque] = useState("ataque");
    const [defensa, setDefensa] = useState("defensa");
    const [velocidad, setVelocidad] = useState("velocidad");

    const url="https://pokeapi.co/api/v2/pokemon/90";
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setId(data.id),
            setPokemon(data.sprites.front_default),
            setPokemon2(data.sprites.front_shiny),
            setPokemon3(data.sprites.back_default),
            setPokemon4(data.sprites.back_shiny),
            setEstado(data.species.name),
            setAltura(data.height),
            setHabilidad(data.abilities[0].ability.name),
            setPeso(data.weight),
            setTipo(data.types[0].type.name),
            setLista(data.order),
            setHp(data.stats[0].base_stat),
            setAtaque(data.stats[1].base_stat),
            setDefensa(data.stats[2].base_stat),
            setVelocidad(data.stats[3].base_stat)

            });
    },[]);
    return(
        <div className={style.contenedor}>
            <div className={style.pokemon}>
                <h1>My Pokemon</h1>
                <h1 className={style.nombre}>{estado}</h1>
                <h1 className={style.id}>{id}</h1>
                <Image src={pokemon} height={325} width={325}/>
            </div>
            <div className={style.datos}>
                <h1> About</h1>
                <h2>Type:{tipo}</h2>
                <h2>Height:{altura}</h2>
                <h2>Weight:{peso}</h2>
                <h2>Abilities:{habilidad}</h2>
                <h3>Stats</h3>
                <h4>HP:{hp}</h4>
                <h4>Attack{ataque}</h4>
                <h4>Defense:{defensa}</h4>
                <h4>Speed:{velocidad}</h4>

            </div>
            
  
        </div>
        
    )
}

export default pokemon;
