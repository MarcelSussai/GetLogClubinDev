import { S_footer, S_footer_logo, S_footer_p } from "../../styles/mainHome_S";

const text_01 = 'Entre em contato conosco e/ou se cadastre'

const Footer = () => {
  return (
  <>
    <S_footer>
      <S_footer_logo src="/logoGetLogClub.svg" />
      <S_footer_p>
        {text_01}
      </S_footer_p>
    </S_footer>
  </>
);

}

export default Footer;