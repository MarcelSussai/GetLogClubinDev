
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

  ${cusMQ(1024)} {
    font-size: 20px;
  }
`