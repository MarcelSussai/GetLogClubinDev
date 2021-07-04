import { useContext, useEffect } from "react";
import { AppCtx } from "../../contexts/ctxGlobal";
import InptText from "../../styles/inpts_S";
import { 
  S_mainLogin_main, S_mainLogin_section,
  S_mainLogin_section_item, S_mainLogin_text_h1
} from "../../styles/login_S";



const txt_ph_email              = 'Digite aqui o e-mail'
const txt_ph_email_label        = 'E-mail'
const txt_ph_senha              = 'Digite aqui sua senha'
const txt_ph_senha_label        = 'Senha'
const txt_title                 = 'Login'

const MainLogin = () => {

  const {
    ctx_textEmailLogin, setCtx_textEmailLogin,
    ctx_textPassLogin, setCtx_textPassLogin,
  } = useContext<any>(AppCtx)

  const handleEmailLogin = (e) => setCtx_textEmailLogin(e.target.value)
  const handleSenhaLogin = (e) => setCtx_textPassLogin(e.target.value)

  useEffect(() => {
    console.log(ctx_textEmailLogin)
  }, [ctx_textEmailLogin])

  useEffect(() => {
    console.log(ctx_textPassLogin)
  }, [ctx_textPassLogin])
  
  return (
  <>
    <S_mainLogin_main>
      <S_mainLogin_section>
        <S_mainLogin_text_h1>{txt_title}</S_mainLogin_text_h1>
        <InptText label={txt_ph_email_label} placeholder={txt_ph_email} onChangeFN={handleEmailLogin} />
        <InptText label={txt_ph_senha_label} placeholder={txt_ph_senha} onChangeFN={handleSenhaLogin} />
      </S_mainLogin_section>
    </S_mainLogin_main>
  </>
);

}

export default MainLogin;