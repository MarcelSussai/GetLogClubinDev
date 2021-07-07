import { useContext } from "react";
import { AppCtx } from "../contexts/ctxGlobal";
import Link from 'next/link';
import {
    S_a_nav_menu,
    S_btnMenu_piece,
    S_btnMenu_wrapper,
    S_container_nav,
    S_enter_icon,
    S_nav,
    S_addUser_icon,
    S_contact_icon
} from '../styles/nav_S';



const Nav = () => {

  const { ctx_is_btnActive, setCtx_is_btnActive } = useContext<any>(AppCtx)

  const handle_click_btnMenu = () => setCtx_is_btnActive(!ctx_is_btnActive)

  return (
  <>
      <S_btnMenu_wrapper onClick={handle_click_btnMenu} className={ctx_is_btnActive ? 'isActive' : ''}>
        <S_btnMenu_piece className="hoverSPBtnMenu" ></S_btnMenu_piece>
      </S_btnMenu_wrapper>
      <S_nav className={ctx_is_btnActive ? 'isActive' : ''}>
        <S_container_nav >
          <Link href="/login">
            <S_a_nav_menu onClick={handle_click_btnMenu} >
              <S_enter_icon />
              Entrar
            </S_a_nav_menu>
          </Link>
          <Link href="/register">
            <S_a_nav_menu onClick={handle_click_btnMenu} >
              <S_addUser_icon />
              Cadastre-se
            </S_a_nav_menu>
          </Link>
          <S_a_nav_menu >
            <S_contact_icon />
            Contato
          </S_a_nav_menu>
        </S_container_nav>
      </S_nav>
  </>
);

}

export default Nav;