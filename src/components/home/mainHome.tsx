
import { 
  S_btn_register_home,
  S_card_container_left,
  S_card_desc_01,
  S_container_card_home, 
  S_h1_home, 
  S_h2_home, 
  S_h3_home, 
  S_img_container_1, 
  S_img_home_desc, 
  S_img_section_1, 
  S_logo_img_home, 
  S_main_home, 
  S_p_home_desc, 
  S_section_2, 
  S_section_3, 
  S_section_3_left, 
  S_section_home,
  S_img_home_desc_right,
  S_p_home_desc_right,
  S_h3_home_right
} from './../../styles/mainHome_S'
import Footer from './footer'



const txt_h1      = `Contrate entregadores e gerencie suas entregas com a`
const txt_h2_01   = `Conheça nossos serviços e se cadastre`
const txt_h3_01   = `Veja em tempo real o andamento de suas entregas!`
const txt_p_01    = `Visualize em tempo real a localização dos seus entregadores no mapa, com um painel que lhe dá organização e mostra todas as informações pra gerir todo o processo de entrega`
const txt_h3_02   = `Tenha o cardápio digital personalizado para seus clientes`
const txt_p_02    = `Edite e gerencie um cardápio digital personalizável para ser exibido aos seus clientes. Onde terão comodidade e facilidade para fazer seus pedidos de seus produtos! Tenha um pedaço do seu restaurante na internet!`
const txt_h3_03   = `E você entregador, ganhe mais entregando com a GetLogClub se cadastre!`
const txt_p_03    = `Se cadastre e baixe o app, e trabalhe conosco! você sempre terá entregas, decida quando ficar online, tenha uma roteirização baseada em localidade. Aceite Pedidos e trabalhe com a nossa ajuda, ganhando e recebendo pelo app!`
const txt_btn     = `Cadastre-se`

const alt_txt_01  = `logo da getlog club com o o como desenho da cabeça de uma raposa`
const alt_txt_02  = `Imagem de um celular descrevendo uma rota até um ponto de um mapa e um motoboy`

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
          <S_img_section_1 alt={alt_txt_02} src="/img_01.svg" />
        </S_img_container_1>
      </S_section_home>

      <S_section_2>
        <S_h2_home>{txt_h2_01}</S_h2_home>
        <S_btn_register_home>{txt_btn}</S_btn_register_home>
      </S_section_2>
      
      <S_section_3>
        <S_card_desc_01>
          <S_h3_home>{txt_h3_01}</S_h3_home>
          <S_p_home_desc>{txt_p_01}</S_p_home_desc>
        </S_card_desc_01>
        <S_img_home_desc src="/img_02.svg" />
      </S_section_3>

      <S_section_3_left>
        <S_card_container_left>
          <S_h3_home_right>{txt_h3_02}</S_h3_home_right>
          <S_p_home_desc_right>{txt_p_02}</S_p_home_desc_right>
        </S_card_container_left>
        <S_img_home_desc_right src="/img_03.svg" />
      </S_section_3_left>
      
      <S_section_3>
        <S_card_desc_01>
          <S_h3_home>{txt_h3_03}</S_h3_home>
          <S_p_home_desc>{txt_p_03}</S_p_home_desc>
        </S_card_desc_01>
        <S_img_home_desc className="maisprala" src="/img_04.svg" />
      </S_section_3>
      
      <S_section_2>
        <S_btn_register_home>{txt_btn}</S_btn_register_home>
      </S_section_2>

    </S_main_home>
    <Footer />
  </>
);

}

export default MainHome;