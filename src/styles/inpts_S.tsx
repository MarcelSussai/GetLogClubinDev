
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { cusMQ, cusTR, fontF } from '../../stylesConfig';
import { AppCtx } from '../contexts/ctxGlobal';



const S_container = styled.div`
  position: relative;

  width: 100%;

`

const S_input = styled.input<{fluid?: string, colorInput?: string}>`
  ${fontF}
  ${cusTR('.2s')}

  font-size: 16px;
  font-weight: 600;

  color: ${ ({theme, colorInput}) => colorInput === 'true' ? theme.colors.brown.c700 : theme.colors.blue.c700 };

  width: ${ (props) => props.fluid === 'true' ? '100%' : props.fluid || '100%' };

  padding: 10px;

  border-top: solid 8px ${ ({theme, colorInput}) => colorInput === 'true' ? theme.colors.brown.c600 : theme.colors.blue.c600 };
  border-bottom: solid 1px ${ ({theme, colorInput}) => colorInput === 'true' ? theme.colors.brown.c600 : theme.colors.blue.c600 };
  border-left: solid 1px ${ ({theme, colorInput}) => colorInput === 'true' ? theme.colors.brown.c600 : theme.colors.blue.c600 };
  border-right: solid 1px ${ ({theme, colorInput}) => colorInput === 'true' ? theme.colors.brown.c600 : theme.colors.blue.c600 };
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  box-shadow: 0 2px 8px ${ ({theme}) => theme.colors.blackShadow3 };

  &:focus {
    outline: 0;
    border-top: solid 8px ${ ({theme, colorInput}) => colorInput === 'true' ? theme.colors.brown.c800 : theme.colors.blue.c800 };
    border-bottom: solid 1px ${ ({theme, colorInput}) => colorInput === 'true' ? theme.colors.brown.c800 : theme.colors.blue.c800 };
    border-left: solid 1px ${ ({theme, colorInput}) => colorInput === 'true' ? theme.colors.brown.c800 : theme.colors.blue.c800 };
    border-right: solid 1px ${ ({theme, colorInput}) => colorInput === 'true' ? theme.colors.brown.c800 : theme.colors.blue.c800 };
  }
  &::placeholder {
    color: ${ ({theme, colorInput}) => colorInput === 'true' ? theme.colors.brown.c800 : theme.colors.blue.c800 };
    opacity: .3;
  }
`

const S_label = styled.label<{colorInput?: string}>`
  ${fontF}
  ${cusTR('.2s')}

  color: ${ ({theme, colorInput}) => colorInput === 'true' ? theme.colors.brown.c600 : theme.colors.blue.c600 };

  font-size: 14px;
  font-weight: 700;
  text-transform: capitalize;

  position: absolute;
  top: -5px;
  left: 6px;

  padding: 2px 6px 2px 6px;

  background: ${ ({theme}) => theme.colors.white };

  line-height: 1;

  /* border-top-left-radius: 12px;
  border-top-right-radius: 12px; */

  border-radius: 12px;

`

type Props = {
  id?: string;
  label?: string;
  placeholder?: string;
  text?: string;
  sizeW?: string;
  sizeH?: string;
  onChangeFN?: any;
  colorInput?: string;
  typeDate?: string;
}
const InptText = (props: Props) => {


  const { label, placeholder, id, onChangeFN, colorInput, typeDate } = props

  return (
  <>
    <S_container>
      <S_label colorInput={colorInput} htmlFor={id || ''}>{label || 'label'}</S_label>
      <S_input type={
        typeDate === 'a' ? 'date' 
        : ''
      } colorInput={colorInput} id={id || ''} placeholder={placeholder} onChange={onChangeFN} />
    </S_container>
  </>
);

}

export default InptText;