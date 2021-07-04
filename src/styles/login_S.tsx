
import styled from 'styled-components';
import { cusMQ, cusTR, fontF } from '../../stylesConfig';
import { S_main } from './main_S';



export const S_mainLogin_main = styled(S_main)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const S_mainLogin_section = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin: 16px 0 0 0;

  background: ${ ({theme}) => theme.colors.blue.c100 };

  border: solid 1px ${ ({theme}) => theme.colors.blue.c400 };
  border-top: none;
  border-left: solid 1px ${ ({theme}) => theme.colors.blue.c300 };
  border-right: solid 1px ${ ({theme}) => theme.colors.blue.c300 };

  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

export const S_mainLogin_section_item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 16px 16px 8px 16px;

  ${cusMQ(375)} {
    padding: 16px 24px 8px 24px;
  }
`

export const S_mainLogin_text_h1 = styled.h1`
  ${fontF}
  ${cusTR('.2s')}

  font-weight: 900;
  font-size: 32px;

  text-align: center;

  border-bottom: solid 8px ${ ({theme}) => theme.colors.blue.c600 };

  color: ${ ({theme}) => theme.colors.blue.c600 };
  background: ${ ({theme}) => theme.colors.green.c200 };

  width: 100%;
  padding: 8px;

`

