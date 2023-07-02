import styled from "@emotion/styled";
const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Texto = styled.p`
  font-size: 16px;
  span {
    font-weight: 700;
  }
`;
const Precio = styled.p`
  font-size: 22px;
  span {
    font-weight: 700;
  }
`;
const Imagen = styled.img`
    display:block;
    width: 120px;
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Contenedor>
      <Imagen
        src={`https://www.cryptocompare.com/${IMAGEURL}`}
        alt="logo cripto"
      />
      <div>
        <Precio>
          El precio es de <span> {PRICE}</span>
        </Precio>
        <Texto>
          Precio mas alto del dia <span> {HIGHDAY}</span>
        </Texto>
        <Texto>
          Precio mas bajo del dia <span> {LOWDAY}</span>
        </Texto>
        <Texto>
          Cambio en las ultimas 24 horas <span> {CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Última Actualización <span> {LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
