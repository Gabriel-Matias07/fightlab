import React from 'react'
import './CardAtleta.css'

export default function CardAtleta() {
    const url='https://kombatpress.com/wp-content/uploads/2024/09/Principais-momentos-de-Alex-Pereira-no-octogono-do-UFC-antes.png';

    return (
        <div class="container">
            <header>
                <div class="logo">FIGHTLAB</div>
            </header>
            
            <main>
                <div class="imgLutador">
                    <img src={url}></img>
                </div>
                <div class="infoLutador">
                    <h1>ALEX PEREIRA</h1>
                    <h2>"POATAN"</h2>
                </div>
            </main>
        </div>
    )
}
