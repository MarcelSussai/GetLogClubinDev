
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { cusMQ, cusTR, fontF } from '../../stylesConfig';
import { AppCtx } from '../contexts/ctxGlobal';



const S_container = styled.div`
  position: relative;

  width: 100%;

`

const S_input = styled.input<{fluid?: string}>`
  ${fontF}
  ${cusTR('.2s')}

  font-size: 16px;
  font-weight: 600;

  color: ${ ({theme}) => theme.colors.blue.c700 };

  width: ${ (props) => props.fluid === 'true' ? '100%' : props.fluid || '100%' };

  padding: 10px;

  border-top: solid 8px ${ ({theme}) => theme.colors.blue.c600 };
  border-bottom: solid 1px ${ ({theme}) => theme.colors.blue.c600 };
  border-left: solid 1px ${ ({theme}) => theme.colors.blue.c600 };
  border-right: solid 1px ${ ({theme}) => theme.colors.blue.c600 };
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  box-shadow: 0 2px 8px ${ ({theme}) => theme.colors.blackShadow3 };

  &:focus {
    outline: 0;
    border-top: solid 8px ${ ({theme}) => theme.colors.blue.c800 };
    border-bottom: solid 1px ${ ({theme}) => theme.colors.blue.c800 };
    border-left: solid 1px ${ ({theme}) => theme.colors.blue.c800 };
    border-right: solid 1px ${ ({theme}) => theme.colors.blue.c800 };
  }
  &::placeholder {
    color: ${ ({theme}) => theme.colors.blue.c800 };
    opacity: .3;
  }
`

const S_label = styled.label`
  ${fontF}
  ${cusTR('.2s')}

  color: ${ ({theme}) => theme.colors.blue.c600 };

  font-size: 14px;
  font-weight: 700;
  text-transform: capitalize;

  position: absolute;
  top: -4px;
  left: 6px;

  padding: 0 6px 0 6px;

  background: ${ ({theme}) => theme.colors.white };

  line-height: 1;


`

type Props = {
  id?: string;
  label?: string;
  placeholder?: string;
  text?: string;
  sizeW?: string;
  sizeH?: string;
  onChangeFN?: any;
}
const InptText = (props: Props) => {


  const { label, placeholder, id, onChangeFN } = props

  return (
  <>
    <S_container>
      <S_label htmlFor={id || ''}>{label || 'label'}</S_label>
      <S_input id={id || ''} placeholder={placeholder} onChange={onChangeFN} />
    </S_container>
  </>
);

}

export default InptText;