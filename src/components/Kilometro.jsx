import React, { useContext } from 'react'
import { KilometroContext } from '../context/KilometroContext';

export const Kilometro = () => {


    const {kms} = useContext(KilometroContext);

    return (
        <div>
            <h1>El valor de KMS es: {kms}</h1>
        </div>
    )
}
