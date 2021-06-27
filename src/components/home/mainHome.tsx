
import { 
  S_container_card_home, 
  S_h1_home, 
  S_img_container_1, 
  S_img_section_1, 
  S_logo_img_home, 
  S_main_home, 
  S_section_home 
} from './../../styles/mainHome_S'



const txt_h1 = `Contrate entregadores e gerencie suas entregas com a`

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
    </S_main_home>
  </>
);

}

export default MainHome;