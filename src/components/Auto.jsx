import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { KilometroContext } from '../context/KilometroContext';

export const Auto = ({kilometro}) => {


    const {kms, setKms} = useContext(KilometroContext);

    const handleClick = () => {
        console.log('Auto clicked')
        setKms(kms + kilometro)
    }

    return (
        <div>
            <h1>Auto</h1>
            <Button variant="vino" onClick={handleClick}> Aumentar los {kilometro}</Button>
        </div>
    )
}
