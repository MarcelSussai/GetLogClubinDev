import { useContext } from "react";
import { AppCtx } from "../contexts/ctxGlobal";
import { S_btnMenu_container, S_btnMenu_wrapper } from "../styles/nav_S";



const Nav = () => {

  const { ctx_is_btnActive, setCtx_is_btnActive } = useContext<any>(AppCtx)

  const handle_click_btnMenu = () => setCtx_is_btnActive(!ctx_is_btnActive)

  return (
  <>
    <S_btnMenu_container onClick={handle_click_btnMenu} className={ctx_is_btnActive ? 'isActive' : ''} >
      <S_btnMenu_wrapper className="hoverSPBtnMenu" ></S_btnMenu_wrapper>
    </S_btnMenu_container>
  </>
);

}

export default Nav;