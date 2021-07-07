
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

  margin: 16px 0 32px 0;
  padding: 0 0 24px 0;

  background: ${ ({theme}) => theme.colors.blue.c100 };

  /* border: solid 1px ${ ({theme}) => theme.colors.blue.c300 }; */
  border-top: none;
  /* border-left: solid 1px ${ ({theme}) => theme.colors.blue.c300 };
  border-right: solid 1px ${ ({theme}) => theme.colors.blue.c300 }; */
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-top-left-radius: 8px;
  border-top-right-radius: 4px;

  box-shadow: 0 8px 16px ${ ({theme}) => theme.colors.gray.c200 };

  ${cusMQ(512)} {
    width: 392px;
  }
`

export const S_mainLogin_section_item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
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

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom: solid 8px ${ ({theme}) => theme.colors.blue.c600 };

  color: ${ ({theme}) => theme.colors.blue.c600 };
  background: ${ ({theme}) => theme.colors.green.c200 };

  width: 100%;
  padding: 8px;

`

export const S_a_esqueciSenha = styled.a`
  ${fontF}
  ${cusTR('.2s')}

  font-size: 11px;
  font-weight: 600;

  background: ${ ({theme}) => theme.colors.green.c200 };
  padding: 2px 8px 2px 8px;
  display: flex;
  align-items: center;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  border-top: solid 2px ${ ({theme}) => theme.colors.blue.c300 };
  border-bottom: solid 2px ${ ({theme}) => theme.colors.blue.c300 };
  
  color: ${ ({theme}) => theme.colors.blue.c600 };
  cursor: pointer;

  &:hover {
    border-top: solid 2px ${ ({theme}) => theme.colors.green.p300 };
    border-bottom: solid 2px ${ ({theme}) => theme.colors.green.p300 };
    color: ${ ({theme}) => theme.colors.green.p300 };
    background: ${ ({theme}) => theme.colors.blue.c800 };
  }

  ${cusMQ(375)} {
    font-size: 13px;
  }
  ${cusMQ(425)} {
    padding: 2px 24px 2px 8px;
  }
`

export const S_a_container_esqueciSenha = styled.div`

  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;



`

export const S_mainRegister_main = styled(S_main)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const S_mainRegister_section = styled(S_mainLogin_section)`
`

export const S_mainRegister_text_h1 = styled(S_mainLogin_text_h1)`
`

export const S_mainRegister_section_item = styled(S_mainLogin_section_item)`
`

