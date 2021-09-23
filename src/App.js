
// import { useState } from "react";
import { Auto } from "./components/Auto";
import { Kilometro } from "./components/Kilometro";
import { Moto } from "./components/Moto";
import { KmsProvider } from "./context/KilometroContext";

const App = () => {

  // const [kms, setKms] = useState(0);

  return (
    <>
      {/* <KmsProvider>
        <Auto kilometro={20} kms={kms} setKms={setKms} />
        <Moto kilometro={5} kms={kms} setKms={setKms} />

        <Kilometro kms={kms} />
      </KmsProvider> */}

      <KmsProvider>
        <Auto kilometro={20} />
        <Moto kilometro={5} />

        <Kilometro />
      </KmsProvider>

    </>
  );
}

export default App;
