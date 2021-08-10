import styled from 'styled-components';
import { cusMQ, cusTR, fontF } from '../../../stylesConfig';
import { S_container_Logo, S_detailDiv } from '../../styles/header_S';

const S_detail = styled(S_detailDiv)`
`
const S_div_01 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
`
const S_div_logo = styled(S_container_Logo)`
  width: 64%;
  
  &:before {
    height: 20vw;
    ${cusMQ(425)} {
      height: 18vw;
    }
    ${cusMQ(560)} {
      height: 18vw;
    }
    ${cusMQ(680)} {
      height: 15vw;
    }
    ${cusMQ(768)} {
      height: 88px;
    }
  }
  ${cusMQ(425)} {
    width: 58%;
  }
  ${cusMQ(560)} {
    width: 58%;
  }
  ${cusMQ(680)} {
    width: 50%;
  }
  ${cusMQ(768)} {
    width: 304px;
  }
`
const S_img_01 = styled.img`
`

const HeaderPanel = () => {
  return (
  <>
    <S_detail />
    <S_detail left/>
    <S_div_01>
      <S_div_logo>
        <S_img_01 src="/logoGetLogClub.svg" />
      </S_div_logo>
    </S_div_01>
  </>
);

}

export default HeaderPanel;