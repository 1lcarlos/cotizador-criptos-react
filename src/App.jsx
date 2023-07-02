import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import ImagenCripto from "./img/imagen-criptos.png";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;
const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;
function App() {
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);
  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const cotizadorCripto = async () => {
        setCargando(true);
        setResultado({})
        const { Moneda, Criptomoneda } = monedas;
        const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${Criptomoneda}&tsyms=${Moneda}`;
        const respuesta = await fetch(URL);
        const resusltado = await respuesta.json();
        setResultado(resusltado.DISPLAY[Criptomoneda][Moneda]);
        setCargando(false);
      };
      cotizadorCripto();
    }
  }, [monedas]);
  return (
    <>
      <Contenedor>
        <Imagen src={ImagenCripto} alt="imagen criptomonedas" />
        <div>
          <Heading>Cotizador de Criptomonedas al Instante</Heading>
          <Formulario setMonedas={setMonedas} />
          {cargando && <Spinner/>}
          {resultado.PRICE && <Resultado resultado={resultado} />}
        </div>
      </Contenedor>
    </>
  );
}

export default App;
