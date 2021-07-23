import styled from 'styled-components';
import { cusMQ, cusTR, fontF } from '../../stylesConfig';



export const S_header = styled.header`
  ${fontF}

  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;

  display: flex;
  justify-content: center;
  align-items: center;

  /* background: ${ ({ theme }) => theme.colors.yellow.p500 }; */
  ${cusTR('.2s')}
`

type Prop = {
  left?: boolean;
}
export const S_detailDiv = styled.div<Prop>`
  ${cusTR('.2s')}
  /* opacity: .8; */
  width: 8px;
  height: 100%;
  position: fixed;
  top: 0;
  left: ${props => props.left ? '4px' : 'unset'};
  right: ${props => props.left ? 'unset' : '4px'};
  z-index: -200;

  background: ${ ({ theme }) => theme.colors.red.c200 };
  ${cusTR('.2s')}

  &:after {
    /* opacity: .8; */
    content: '';
    width: 4px;
    height: 100%;
    position: absolute;
    top: 0;
    left: ${props => props.left ? '-4px' : 'unset'};
    right: ${props => props.left ? 'unset' : '-4px'};
    z-index: -140;

    background: ${ ({ theme }) => theme.colors.yellow.c200 };
    ${cusTR('.2s')}
  }

  ${cusMQ(425)} {
    width: 16px;
    left: ${props => props.left ? '8px' : 'unset'};
    right: ${props => props.left ? 'unset' : '8px'};
    &:after {
      width: 8px;
      left: ${props => props.left ? '-8px' : 'unset'};
      right: ${props => props.left ? 'unset' : '-8px'};
    }
  }
  ${cusMQ(680)} {
    width: 24px;
    left: ${props => props.left ? '12px' : 'unset'};
    right: ${props => props.left ? 'unset' : '12px'};
    &:after {
      width: 12px;
      left: ${props => props.left ? '-12px' : 'unset'};
      right: ${props => props.left ? 'unset' : '-12px'};
    }
  }
  ${cusMQ(1024)} {
    width: 32px;
    left: ${props => props.left ? '16px' : 'unset'};
    right: ${props => props.left ? 'unset' : '16px'};
    &:after {
      width: 16px;
      left: ${props => props.left ? '-16px' : 'unset'};
      right: ${props => props.left ? 'unset' : '-16px'};
    }
  }
  ${cusMQ(1440)} {
    width: 48px;
    left: ${props => props.left ? '24px' : 'unset'};
    right: ${props => props.left ? 'unset' : '24px'};
    &:after {
      width: 24px;
      left: ${props => props.left ? '-24px' : 'unset'};
      right: ${props => props.left ? 'unset' : '-24px'};
    }
  }
`

export const S_containerHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  ${cusMQ(768)} {
    width: 88%;
    gap: 8px;
    justify-content: space-between;
  }

  ${cusMQ(1024)} {
    width: 864px;
  }
  ${cusMQ(1440)} {
    width: 1024px;
  }
  ${cusMQ(1600)} {
    width: 1200px;
  }
`

export const S_container_Logo = styled.div`
  width: 80%;
  position: relative;
  ${cusTR('.2s')}
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    height: 24vw;
    width: 100%;
    background: ${ ({theme}) => theme.colors.gray.c100 } ;
    z-index: -100;
    opacity: .8;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;
    
    ${cusMQ(425)} {
      height: 22vw;
    }
    ${cusMQ(560)} {
      height: 19vw;
    }
    ${cusMQ(680)} {
      height: 16vw;
    }
    ${cusMQ(768)} {
      height: 104px;
    }
  }

  ${cusMQ(425)} {
    width: 72%;
  }
  ${cusMQ(560)} {
    width: 64%;
  }
  ${cusMQ(680)} {
    width: 56%;
  }
  ${cusMQ(768)} {
    width: 360px;
  }
`

export const S_img_Logo = styled.img``
