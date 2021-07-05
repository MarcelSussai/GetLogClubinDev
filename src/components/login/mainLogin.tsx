import { useContext, useEffect, useState } from "react";
import { AppCtx } from "../../contexts/ctxGlobal";
import { S_btn_01 } from "../../styles/btns_S";
import CheckBox_01 from "../../styles/checkBox_S";
import InptText from "../../styles/inpts_S";
import { 
  S_mainLogin_main, S_mainLogin_section,
  S_mainLogin_section_item, S_mainLogin_text_h1,
  S_a_esqueciSenha, S_a_container_esqueciSenha,
} from "../../styles/login_S";



const txt_ph_email              = 'Digite aqui o e-mail'
const txt_ph_email_label        = 'E-mail'
const txt_ph_senha              = 'Digite aqui sua senha'
const txt_ph_senha_label        = 'Senha'
const txt_title                 = 'Login'
const txt_esqueciSenha          = 'Esqueci a senha'

const MainLogin = () => {

  const {
    ctx_textEmailLogin, setCtx_textEmailLogin,
    ctx_textPassLogin, setCtx_textPassLogin,
  } = useContext<any>(AppCtx)

  const handleEmailLogin = (e) => {
    e.preventDefault()
    setCtx_textEmailLogin(e.target.value)
  }
  const handleSenhaLogin = (e) => {
    e.preventDefault()
    setCtx_textPassLogin(e.target.value)
  }

  const [tChk, setTChk] = useState(false)

  useEffect(() => {
    console.log(ctx_textEmailLogin)
  }, [ctx_textEmailLogin])

  useEffect(() => {
    console.log(ctx_textPassLogin)
  }, [ctx_textPassLogin])
  
  useEffect(() => {
    console.log(tChk)
  }, [tChk])

  const chkHandler = () => setTChk(!tChk)

  return (
  <>
    <S_mainLogin_main>
      <S_mainLogin_section>
        <S_mainLogin_text_h1>{txt_title}</S_mainLogin_text_h1>
        <S_mainLogin_section_item>
          <InptText id="emailLogin" label={txt_ph_email_label} placeholder={txt_ph_email} onChangeFN={handleEmailLogin} />
          <InptText id="senhaLogin" label={txt_ph_senha_label} placeholder={txt_ph_senha} onChangeFN={handleSenhaLogin} />
        </S_mainLogin_section_item>
        <S_a_container_esqueciSenha>
          <CheckBox_01 chk={tChk} chkHandler={chkHandler} txt_label="lembrar senha" />
          <S_a_esqueciSenha> {txt_esqueciSenha} </S_a_esqueciSenha>
        </S_a_container_esqueciSenha>
        <S_btn_01>Entrar</S_btn_01>
      </S_mainLogin_section>
    </S_mainLogin_main>
  </>
);

}

export default MainLogin;