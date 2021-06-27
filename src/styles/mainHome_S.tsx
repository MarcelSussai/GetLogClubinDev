import styled from 'styled-components'
import { cusMQ, cusTR, fontF } from '../../stylesConfig'
import { S_main } from './main_S'



export const S_main_home = styled(S_main)`


  ${cusMQ(1024)} {
    display: flex;
    justify-content: center;
  }
`


export const S_section_home = styled.section`

  display: flex;
  flex-direction: column;

  ${cusMQ(1024)} {
    width: 920px;
    flex-direction: row;
    justify-content: space-between;
  }
  ${cusMQ(1440)} {
    width: 1024px;
  }
  ${cusMQ(1600)} {
    width: 1200px;
  }
`

export const S_container_card_home = styled.div`
  width: 90%;
  padding: 16px;
  background: ${ ({theme}) => theme.colors.skin.p300 };
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  border-left: solid 3px ${ ({theme}) => theme.colors.brown.c700 };
  ${cusTR('.2s')}

  ${cusMQ(425)} {
    width: 88%;
    border-left: solid 6px ${ ({theme}) => theme.colors.brown.c700 };
  }
  ${cusMQ(560)} {
    width: 83%;
    border-left: solid 8px ${ ({theme}) => theme.colors.brown.c700 };
  }
  ${cusMQ(680)} {
    width: 79%;
    border-left: solid 12px ${ ({theme}) => theme.colors.brown.c700 };
  }
  ${cusMQ(768)} {
    width: 74%;
    border-left: solid 14px ${ ({theme}) => theme.colors.brown.c700 };
  }
  ${cusMQ(904)} {
    width: 624px;
  }
  ${cusMQ(1024)} {
    border-left: solid 16px ${ ({theme}) => theme.colors.brown.c700 };
    padding: 16px 80px 16px 0;
    width: 536px;
  }
  ${cusMQ(1600)} {
    width: 712px;
  }
`

export const S_h1_home = styled.h1`
  ${fontF}
  font-weight: 900;
  font-size: 8vw;
  font-style: italic;
  text-align: right;
  color: ${ ({theme}) => theme.colors.brown.c800 };
  
  ${cusMQ(560)} {
  font-size: 7vw;
  }
  ${cusMQ(680)} {
  font-size: 6vw;
  }
  ${cusMQ(768)} {
  font-size: 48px;
  }
  ${cusMQ(1600)} {
  font-size: 58px;
  }
`

export const S_logo_img_home = styled.img`
  width: 48vw;
  margin-top: 4vw;
  
  ${cusMQ(425)} {
    width: 44vw;
    margin-top: 3vw;
  }
  ${cusMQ(560)} {
    width: 40vw;
    margin-top: 2vw;
  }
  ${cusMQ(560)} {
    width: 34vw;
    margin-top: 1vw;
  }
  ${cusMQ(768)} {
    width: 232px;
    margin-top: 12px;
  }
`

export const S_img_container_1 = styled.div`
  width: 80%;
  align-self: center;
  margin-top: -12px;
  ${cusTR('.2s')}

  ${cusMQ(560)} {
    width: 72%;
  }
  ${cusMQ(680)} {
    width: 64%;
  }
  ${cusMQ(768)} {
    width: 56%;
  }
  ${cusMQ(1024)} {
    width: 448px;
    margin-top: 0;
    margin-left: -24px;
  }
`

export const S_img_section_1 = styled.img``