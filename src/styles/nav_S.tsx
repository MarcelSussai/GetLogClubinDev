import styled from "styled-components"
import { cusMQ, cusTR } from "../../stylesConfig"

export const S_btnMenu_container = styled.div`
  position: fixed;
  bottom: 16px;
  right: 4px;
  width: 54px;
  height: 48px;
  background: radial-gradient(${({theme}) => theme.colors.red.c600}, ${({theme}) => theme.colors.red.c700});
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: -2px 2px 8px ${ ({theme}) => theme.colors.blackShadow };
  border-right: solid 8px ${ ({theme}) => theme.colors.red.p500 };
  ${cusTR('.2s')}

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

export const S_btnMenu_wrapper = styled.div`

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover .hoverSPBtnMenu,
  &:hover .hoverSPBtnMenu:before,
  &:hover .hoverSPBtnMenu:after {

  }

  &:before {}

  &.isActive .hoverSPBtnMenu {

    &:before {}
    &:after {}

  }

  &.isActive {

  }
`

export const S_btnMenu_piece = styled.div``

export const S_nav = styled.nav``

export const S_container_nav = styled.div``

export const S_a_nav_menu = styled.div``