import styled from "styled-components"
import { cusMQ, cusTR, fontF } from "../../stylesConfig"
import Enter from "../components/icons/enter"
import AddUser from '../components/icons/addUser';
import Contact_Icon from '../components/icons/contact';


export const S_btnMenu_wrapper = styled.div`
  position: fixed;
  bottom: 16px;
  right: 4px;
  width: 54px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background:${({theme}) => theme.colors.red.c600};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: -2px 2px 8px ${ ({theme}) => theme.colors.blackShadow }, inset 0 0 16px ${ ({theme}) => theme.colors.blackShadow };
  border-right: solid 8px ${ ({theme}) => theme.colors.red.p500 };
  cursor: pointer;
  ${cusTR('.2s')}

  &:before {
    ${cusTR('.2s')}
  }

  &.isActive .hoverSPBtnMenu {
    background: transparent;
    &:before {
      background: ${ ({theme}) => theme.colors.brown.c100 };
      border: solid 2px ${ ({theme}) => theme.colors.brown.c100 };
      top: 0;
      transform: rotate(225deg);
    }
    &:after {
      background: ${ ({theme}) => theme.colors.brown.c100 };
      border: solid 2px ${ ({theme}) => theme.colors.brown.c100 };
      top: 0;
      transform: rotate(-225deg);
    }
  }

  &.isActive {
    ${cusTR('.2s')}
    background: ${({theme}) => theme.colors.brown.c400};
  }

  ${cusMQ(425)} {
    right: 8px;
  }
  ${cusMQ(680)} {
    right: 12px;
  }
  ${cusMQ(768)} {
    display: none;
  }
`

export const S_btnMenu_piece = styled.div`
  display: block;
  position: relative;
  ${cusTR('.2s')}
  &:before, &:after {
    content: '';
    position: absolute;
    left: 0;
  }

  &:before {
    top: -6px;
  }
  &:after {
    bottom: -6px;
  }
  &, &:before, &:after {
    width: 100%;
    height: 3px;
    background: ${ ({theme}) => theme.colors.skin.p300 };
    ${cusTR('.2s')}
  }
`

export const S_nav = styled.nav`
  width: 96%;
  height: 12%;
  position: fixed;
  bottom: 80px;
  right: -100%;
  padding-right: 4px;
  ${cusTR('.2s')}

  &.isActive {
    right: 0;
  }

  ${cusMQ(375)} {
    width: 88%;
  }
  ${cusMQ(375)} {
    width: 80%;
  }
  ${cusMQ(425)} {
    width: 72%;
  }
  ${cusMQ(560)} {
    width: 64%;
  }
  ${cusMQ(640)} {
    width: 56%;
  }
  ${cusMQ(768)} {
    position: relative;
    top: 0;
    right: 0;
    /* margin-left: 8px; */
    width: 40vw;
    height: 72px;
    padding-right: 0;
    /* height: 104px; */
  }
  ${cusMQ(1024)} {
    width: 440px;
    height: 64px;
  }
`

export const S_container_nav = styled.div`
  width: 100%;
  height: 80px;
  background: ${ ({theme}) => theme.colors.red.p500 };
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
  display: flex;
  flex-direction: row;
  /* gap: 8px; */
  position: relative;
  overflow: hidden;
  padding-left: 12%;
  ${cusTR('.2s')}
  box-shadow: 4px 4px 16px ${ ({theme}) => theme.colors.blackShadow };
  border-top: solid 4px ${ ({theme}) => theme.colors.red.c600 };
  /* border-bottom: solid 2px ${ ({theme}) => theme.colors.red.c600 }; */

  &:before {
    content: '';
    border-bottom-left-radius: 32px;
    width: 100%;
    height: 72%;
    top: 0;
    position: absolute;
    left: 0;
    background: ${ ({theme}) => theme.colors.red.p500 };
    box-shadow: inset 0 -8px 48px ${ ({theme}) => theme.colors.red.c600 };
    ${cusMQ(768)} {
      border-bottom-right-radius: 32px;
    }
  }

  ${cusMQ(768)} {
    height: 100%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;
    padding-left: 24px;
    padding-right: 24px;
  }
  ${cusMQ(1024)} {
    padding-left: 40px;
    padding-right: 40px;
  }

`

export const S_a_nav_menu = styled.a`
  ${fontF}
  height: 100%;
  font-size: 12px;
  padding: 16px 0 8px 0;
  /* width: 100%; */
  flex: 1;
  position: relative;
  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  text-align: center;
  background: ${ ({theme}) => theme.colors.red.c600 } ;
  box-shadow: inset 0 0 8px ${ ({theme}) => theme.colors.red.c700 };
  z-index: 200;
  border-left: solid 1px ${ ({theme}) => theme.colors.red.c400 };
  color: ${ ({theme}) => theme.colors.green.p300 };
  cursor: pointer;
  ${cusTR('.2s')}

  &:hover {

    background: ${ ({theme}) => theme.colors.red.c700 } ;
  }

  ${cusMQ(768)} {
    padding: 16px 4px 8px 4px;
  }
  ${cusMQ(1024)} {
    padding: 12px 0 8px 0;
  }
`

const sizeIconMenu        = '24px'
const sizeIconMenu_768    = '24px'

export const S_enter_icon = styled(Enter).attrs((props) => ({
  color: props.theme.colors.green.p300
}))`
  /* position: absolute; */
  width: ${sizeIconMenu} ;

  ${cusMQ(768)} {
    width: 32px;
  }
`

export const S_addUser_icon = styled(AddUser).attrs((props) => ({
  color: props.theme.colors.green.p300
}))`
  /* position: absolute; */
  width: ${sizeIconMenu};
  /* margin-top: 8px; */
  ${cusMQ(768)} {
    width: 32px;
  }
`

export const S_contact_icon = styled(Contact_Icon).attrs((props) => ({
  color: props.theme.colors.green.p300
}))`
  /* position: absolute; */
  width: ${sizeIconMenu};
  ${cusMQ(768)} {
    width: 32px;
  }
`