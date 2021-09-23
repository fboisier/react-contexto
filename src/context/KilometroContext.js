import { createContext, useState } from "react";

// crear contexto con createContext
export const KilometroContext = createContext();

// Componente que utiliza el contexto
export const KmsProvider = ({children}) => {
    const [kms, setKms] = useState(0);

    return (
        <KilometroContext.Provider value={{ kms, setKms }}>
            {children}
        </KilometroContext.Provider>
    );
};