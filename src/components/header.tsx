import { 
  S_containerHeader, 
  S_container_Logo, 
  S_detailDiv, 
  S_header, 
  S_img_Logo 
} from "../styles/header_S";
import Nav from "./nav";



const alt_logo = "Logotipo da getlogclub com um desenho de raposa no lugar do o de log"

const Header = () => {
  return (
  <>
    <S_detailDiv left={false} />
    <S_detailDiv left={true} />
    <S_header>
      <S_containerHeader>
        <S_container_Logo>
          <S_img_Logo src="/logoGetLogClub.svg" alt={alt_logo} />
        </S_container_Logo>
        <Nav />
      </S_containerHeader>
    </S_header>
  </>
);

}

export default Header;
