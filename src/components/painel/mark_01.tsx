import React from 'react';
import styled from 'styled-components';
import { cusMQ, cusTR, fontF, theme } from '../../../stylesConfig';
import MarkerPoint from '../icons/markerPoint';



const S_div_01 = styled.div`
  ${fontF}
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: relative;
`
const S_div_02 = styled.div`
  position: absolute;
  top: 0;
  left: calc(100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const S_div_03 = styled.div`
  padding: 8px;
  background: ${ ({theme}) => theme.colors.yellow.c100 };
  width: 88px;
  border: solid 2px ${ ({theme}) => theme.colors.yellow.c300 };
  border-radius: 50%;
  color: ${ ({theme}) => theme.colors.brown.c700 };
  font-size: 16px;
  text-align: center;
`

const Mark_01: React.FC  = () => {
  return (
  <>
    <S_div_01>
      <S_div_02>
        <MarkerPoint c={theme.colors.yellow.c300} />
        <S_div_03>
          {`Estou aqui!`}
        </S_div_03>
      </S_div_02>
    </S_div_01>
  </>
);

}

export default Mark_01;