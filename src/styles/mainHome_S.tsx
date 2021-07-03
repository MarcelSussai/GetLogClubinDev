import styled from 'styled-components'
import { cusMQ, cusTR, fontF } from '../../stylesConfig'
import { S_main } from './main_S'
import { S_btn_geral } from './btns_S';



export const S_main_home = styled(S_main)`


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${cusMQ(1024)} {
  }
`

export const S_section_home = styled.section`
  margin-top: 24px;
  display: flex;
  flex-direction: column;

  ${cusMQ(768)} {
    width: 91%;
  }
  ${cusMQ(1024)} {
    width: 864px;
    flex-direction: row;
    justify-content: space-between;;
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
  line-height: 1.4;
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
  ${cusMQ(1024)} {
    font-size: 40px ;
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
    width: 200px;
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
  ${cusMQ(1440)} {
    width: 512px;
  }
`

export const S_img_section_1 = styled.img`
`

export const S_section_2 = styled(S_section_home)`
  /* margin-top: 24px; */
  gap: 12px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`

export const S_h2_home = styled.h2`
  ${fontF}
  text-align: center;
  width: 80%;
  font-size: 6vw;
  font-weight: 500;
  color: ${ ({theme}) => theme.colors.blue.c700 };
  margin-top: 48px;

  ${cusMQ(375)} {
    font-size: 5vw;
  }
  ${cusMQ(560)} {
    font-size: 4vw;
  }
  ${cusMQ(680)} {
    font-size: 3.5vw;
  }
  ${cusMQ(768)} {
    font-size: 3.2vw;
  }
  ${cusMQ(960)} {
    font-size: 2.8vw;
  }
  ${cusMQ(1024)} {
    font-size: 26px;
  }
  ${cusMQ(1440)} {
    font-size: 28px;
  }
`

export const S_btn_register_home = styled(S_btn_geral)`
  margin-bottom: 24px;
  margin-top: 16px;
  box-shadow: 
    inset 0 0 8px ${ ({theme}) => theme.colors.greenShadow }
  ;
  border: solid 2px ${ ({theme}) => theme.colors.green.c500 };
`

export const S_section_3 = styled(S_section_home)`
  align-items: flex-end;
  ${cusMQ(768)} {
    margin-top: 64px;
    flex-direction: row-reverse;
  }
`

export const S_card_container = styled(S_container_card_home)`
  ${fontF}
  /* gap: 4px; */
  margin-top: 24px;
  border-left: none;
  border-right: solid 3px ${ ({theme}) => theme.colors.brown.c700 };
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;

  ${cusMQ(768)} {
    padding: 16px 16px 16px 40px;
  }
  ${cusMQ(1024)} {
    width: 640px;
  }
  ${cusMQ(1440)} {
    width: 800px;
  }
  ${cusMQ(1600)} {
    width: 960px;
  }
`

export const S_card_container_left = styled(S_card_container)`
  border-right: none;
  border-left: solid 3px ${ ({theme}) => theme.colors.brown.c700 };
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
  
  ${cusMQ(768)} {
    padding: 16px 40px 16px 16px;
  }
`

export const S_section_3_left = styled(S_section_home)`

  ${cusMQ(768)} {
    margin-top: 64px;
    flex-direction: row;
  }
`

export const S_card_desc_01 = styled(S_card_container)`
`

export const S_h3_home = styled.h3`
  font-size: 5.6vw;
  padding: 12px;
  font-weight: 800;
  border-bottom: solid 1px ${ ({theme}) => theme.colors.brown.c700 };
  color: ${ ({theme}) => theme.colors.brown.c700 };
  width: 100%;

  ${cusMQ(425)} {
    font-size: 5.2vw;
  }
  ${cusMQ(560)} {
    font-size: 4.8vw;
  }
  ${cusMQ(680)} {
    font-size: 4vw;
  }
  ${cusMQ(768)} {
    font-size: 28px;
  }

`

export const S_h3_home_right = styled(S_h3_home)`
  text-align: right;
`

export const S_p_home_desc = styled.p`
  padding: 12px;
  font-size: 4.8vw;
  font-weight: 500;
  line-height: 1.4;
  color: ${ ({theme}) => theme.colors.blue.c700 };

  ${cusMQ(425)} {
    font-size: 4.2vw;
  }
  ${cusMQ(560)} {
    font-size: 3.6vw;
  }
  ${cusMQ(680)} {
    font-size: 2.8vw;
  }
  ${cusMQ(768)} {
    font-size: 16px;
  }
`

export const S_p_home_desc_right = styled(S_p_home_desc)`
  text-align: right;
`

export const S_img_home_desc = styled.img`
  width: 48vw;
  margin-top: -16px;
  align-self: center;
  ${cusMQ(560)} {
    width: 40vw;
  }
  ${cusMQ(680)} {
    width: 32vw;
  }
  ${cusMQ(768)} {
    width: 192px;
    margin-top: 0;
    margin-right: -24px;
  }
  ${cusMQ(1024)} {
    width: 256px;
    margin-right: 0;
    margin-top: 24px;
    transform: translateX(24px)
  }
  ${cusMQ(1440)} {
    &.maisprala {
      transform: translateX(32px);
    }
  }
  ${cusMQ(1600)} {
    width: 200px;
    margin-left: 40px;
    transform: translateX(24px);
  }
`

export const S_img_home_desc_right = styled(S_img_home_desc)`

  ${cusMQ(768)} {
    width: 200px;
    margin-left: -24px;
  }
  ${cusMQ(1024)} {
    width: 200px;
    transform: translateX(0)
  }
  ${cusMQ(1440)} {
    width: 200px;
    margin-right: 40px;
    transform: translateX(0)
  }
  ${cusMQ(1600)} {
    /* width: 200px; */
    margin-right: 56px;
  }
`

export const S_footer = styled.footer`
  position: relative;
  width: 100%;
  padding: 0 72px 16px 16px;
  background: ${ ({theme}) => theme.colors.yellow.c200 };

  display: flex;
  flex-direction: column;
  justify-content: center;

  &:before, &:after {
    content: '';

    position: absolute;
    top: 0;
    left: 0;
    
    background: ${ ({theme}) => theme.colors.red.c200 };

    height: 100%;
    width: 4px;

    ${cusMQ(425)} {
      width: 8px;
    }
    ${cusMQ(680)} {
      width: 12px;
    }
    ${cusMQ(1024)} {
      width: 16px;
    }
    ${cusMQ(1440)} {
      width: 24px;
    }
  }
  &:after {
    left: unset;
    right: 0;
  }
`

export const S_footer_p = styled.p`
  ${fontF}
  color: ${ ({theme}) => theme.colors.brown.c700 };
  font-weight: 500;
  line-height: 1.4;
  text-align: right;
`

export const S_footer_logo = styled.img`
  width: 144px;
  margin-bottom: 16px;
  align-self: flex-end;
`

