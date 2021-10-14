import React from 'react';

export default function Carta(props){
    return(
        <div>
            <h1>Olá {props.remetente} - {props.destino}</h1>
            
            <p>Estou escrevendo essa carta por causa dos</p>
            <p>dois Reais que ti emprestei, do querendo de volta</p>
            <p>pode passar o pix {props.carinha}!</p>
        </div>
    );
}