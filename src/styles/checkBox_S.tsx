
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { cusMQ, cusTR, fontF } from '../../stylesConfig';
import { AppCtx } from '../contexts/ctxGlobal';

const CheckboxContainer = styled.div`
  ${fontF}

  font-size: 11px;
  font-weight: 600;

  display: flex;
  flex-direction: row;
  align-items: center;


  background: ${ ({theme}) => theme.colors.green.c100 };
  padding: 2px 8px 2px 8px;

  width: 120px;

  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom: solid 2px ${ ({theme}) => theme.colors.blue.c300 };
  border-top: solid 2px ${ ({theme}) => theme.colors.blue.c300 };
  
  color: ${ ({theme}) => theme.colors.blue.c600 };
  cursor: pointer;


  ${cusMQ(375)} {
    font-size: 13px;
    width: unset;
  }
  ${cusMQ(425)} {
    padding: 2px 8px 2px 24px;
  }
`

const S_chkbox_01 = styled.input.attrs({type: 'checkbox' })`
  margin: 0 8px 0 0;
  cursor: pointer;
`

const S_label = styled.label`
  cursor: pointer;
`

const CheckBox_01 = (props) => {

  const { id, txt_label, chkHandler, chk} = props


  return (
  <>
    <CheckboxContainer onClick={chkHandler}>
      <S_chkbox_01 id={id} checked={chk} onChange={chkHandler} />
      <S_label htmlFor={id}>
        {txt_label || '_teste'}
      </S_label>
    </CheckboxContainer>
  </>
);

}

export default CheckBox_01;