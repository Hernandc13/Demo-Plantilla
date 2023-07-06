import { useState } from "react";

export default function useLocalStorage (key, initialValue) {

    //Estado que asigna el valor guardao en storage o el valor inicial en caso de estar vacio
    const [storedValue, setStoredValue] = useState(() => {
        try{
            //constante que extrae con la key que se le pasa
            const item = window.localStorage.getItem(key)
            //Si encontro algo guarado, transforma la cadena en objeto de JS, sino le asigna el valor inicial que se le pasa
            //cadena a objeto
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    })

    //Constante que actuliza los valores guardados en storage
    const setValue = value => {
        try {
            //Se actualiza el estado creado antes con el valor que se le pasa
            setStoredValue(value)
            //Almacena los valores en storage convirtiendo un 
            //objeto a cadena
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error){
            console.log(error)
        }
    }

    //Retirna el valor y el metodo para actualizar
    return [storedValue, setValue]
}