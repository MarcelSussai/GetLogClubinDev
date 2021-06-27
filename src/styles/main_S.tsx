import styled from 'styled-components'
import { cusMQ, cusTR } from '../../stylesConfig'



export const S_main = styled.main`
  width: calc(100% - 8px);
  height: 100%;
  margin: 28vw 4px 0 4px;

  /* background: #3c3c3c3c; */
  ${cusTR('.2s')}

  ${cusMQ(425)} {
    width: calc(100% - 16px);
    margin: 26vw 4px 0 8px;
  }
  ${cusMQ(560)} {
    margin: 22vw 4px 0 8px;
  }
  ${cusMQ(680)} {
    width: calc(100% - 24px);
    margin: 19vw 4px 0 12px;
  }
  ${cusMQ(768)} {
    width: calc(100% - 32px);
    margin: 120px 4px 0 16px;
  }
  ${cusMQ(1440)} {
    width: calc(100% - 48px);
    margin: 120px 4px 0 24px;
  }
`
