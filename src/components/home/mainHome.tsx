
import { 
  S_btn_register_home,
  S_container_card_home, 
  S_h1_home, 
  S_h2_home, 
  S_img_container_1, 
  S_img_section_1, 
  S_logo_img_home, 
  S_main_home, 
  S_section_2, 
  S_section_home 
} from './../../styles/mainHome_S'



const txt_h1    = `Contrate entregadores e gerencie suas entregas com a`
const txt_h2    = `Conheça nossos serviços e se cadastre`
const txt_btn   = `Cadastre-se`

const MainHome = () => {
  return (
  <>
    <S_main_home>
      <S_section_home>
        <S_container_card_home>
          <S_h1_home>{txt_h1}</S_h1_home>
          <S_logo_img_home src="/logoContent.svg" />
        </S_container_card_home>

        <S_img_container_1>
          <S_img_section_1 src="/img_01.svg" />
        </S_img_container_1>
      </S_section_home>

      <S_section_2>
        <S_h2_home>{txt_h2}</S_h2_home>
        <S_btn_register_home>{txt_btn}</S_btn_register_home>
      </S_section_2>
      
    </S_main_home>
  </>
);

}

export default MainHome;