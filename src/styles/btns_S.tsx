
import styled from 'styled-components';
import { cusMQ, cusTR, fontF } from '../../stylesConfig';

export const S_btn_geral = styled.button`
  ${fontF}
  ${cusTR('.2s')}
  border: 0;
  padding: 8px;
  width: 160px;
  border-radius: 8px;
  background: ${ ({theme}) => theme.colors.aqua.c600 };
  color: ${ ({theme}) => theme.colors.green.p300 };
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: ${ ({theme}) => theme.colors.aqua.c700 };
    /* box-shadow: inset 0 0 16px ${ ({theme}) => theme.colors.green.c800 }; */
  }

  ${cusMQ(1024)} {
    font-size: 20px;
  }
`

export const S_btn_01 = styled.button`
  ${fontF}

  font-weight: 800;

  color: ${ ({theme}) => theme.colors.green.p300 };
  background: ${ ({theme}) => theme.colors.blue.c700 };
  
  margin: 8px 16px 16px 16px;
  padding: 8px;
  
  border: none;
  border-radius: 8px;

  ${cusMQ(375)} {
    margin: 8px 24px 24px 24px;
  }
`