

import React, { useState, useRef } from 'react';


enum Operadores {
    suma,
    resta,
    multiplicacion,
    division
}

export const useCalculadora = () => {


const [numero, setNumero] = useState("0");
const [numeroAnterior, setNumeroAnterior] = useState("0");
const ultimaOperacion = useRef<Operadores>()



const limpiar = () => {
    setNumero("0");
    setNumeroAnterior("0");
}


const armarNumero = (numeroTexto: string) => {
    //no doble punto
    if (numero.includes(".") && numeroTexto === ".") {
        return;
    }

    if (numero.startsWith('0') || numero.startsWith('-0')) {
        if (numeroTexto === '.') {
            setNumero(numero + numeroTexto);


        }

        else if (numeroTexto === '0' && numero.includes('.')) {
            setNumero(numero + numeroTexto);
        }

        else if (numeroTexto !== '0' && !numero.includes('.')) {
            setNumero(numeroTexto);
        }
        else if (numeroTexto === '0' && numero.includes(".")) {
            setNumero(numero);
        }
        else {
            setNumero(numero + numeroTexto);
        }



    }

    else {
        setNumero(numero + numeroTexto);
    }




}

const positivoNegativo = () => {
    if (numero[0] === "-") {
        setNumero(numero.substring(1));
    } else {
        setNumero("-" + numero);
    }
}

const btnDel = (texto: string) => {
    //button delete 
    if (texto === "del") {
        if (numero.length === 2 && numero[0] === "-") {
            setNumero("0");
        }
        else if (numero.length === 1) {
            setNumero("0");
        }
        else {
            setNumero(numero.substring(0, numero.length - 1));
        }
    }

}


const cambiarNumporAnterior = () => {
    if (numero.endsWith(".")) {
        setNumero(numero.slice(0, -1));
    }
    else {
        setNumeroAnterior(numero);
    }

    setNumero("0");
}

const btnDividir = () => {
    cambiarNumporAnterior();
    ultimaOperacion.current = Operadores.division;
}

const btnMultiplicar = () => {
    cambiarNumporAnterior();
    ultimaOperacion.current = Operadores.multiplicacion;
}


const btnRestar = () => {
    cambiarNumporAnterior();
    ultimaOperacion.current = Operadores.resta;
}


const btnSumar = () => {
    cambiarNumporAnterior();
    ultimaOperacion.current = Operadores.suma;
}

const calcular = () => {

    let numero1: number = parseFloat(numeroAnterior);
    let numero2: number = parseFloat(numero);
    let resultado: number = 0;

    switch (ultimaOperacion.current) {
        case Operadores.suma:
            resultado = numero1 + numero2;
            setNumero(resultado.toString());
            break;
        case Operadores.resta:
            resultado = numero1 - numero2;
            setNumero(resultado.toString());
            break;
        case Operadores.multiplicacion:
            resultado = numero1 * numero2;
            setNumero(resultado.toString());
            break;
        case Operadores.division:
            resultado = numero1 / numero2;
            setNumero(resultado.toString());
            break;
        default:
            break;
    }

    setNumeroAnterior("0");




}

return {
    numero,
    numeroAnterior,
    armarNumero,
    positivoNegativo,
    btnDel,
    limpiar,
    btnSumar,
    btnRestar,
    btnMultiplicar,
    btnDividir,
    calcular

}



}
