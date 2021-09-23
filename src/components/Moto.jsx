import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { KilometroContext } from '../context/KilometroContext';

export const Moto = ({kilometro}) => {

    const {kms, setKms} = useContext(KilometroContext);

    const handleClick = () => {
        console.log('Moto clicked')
        setKms(kms + kilometro)
    }

    return (
        <div>
            <h1>Moto</h1>
            <Button variant="vino" onClick={handleClick}> Aumentar los {kilometro}</Button>
        </div>
    )
}
