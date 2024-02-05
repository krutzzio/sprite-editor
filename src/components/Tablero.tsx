import React from "react";
import { Celda } from "./Celda";

export function Tablero({ canvas, click, mida }) {


    const arrayGrande = new Array(mida*mida).fill("Hola")

    const tablero = {
        "display": "grid",
        "gridTemplateColumns": `repeat(${mida}, 1fr)`,
    }


    return (
        <div style={tablero}>
            {
                arrayGrande.map((color, i) => {
                    return (
                        <Celda key={i} canvas={canvas} pos={i} click={click}/>
                    )
                })

            }
        </div>

    )
}