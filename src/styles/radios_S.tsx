
import { useState } from 'react';
import styled from 'styled-components';
import { cusMQ, cusTR, fontF } from '../../stylesConfig';

export const S_inpt_radio_01 = styled.input`
  width: 12px;
  height: 12px;
`

export const S_radio_container_01 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  border-left: solid 1px ${ ({theme}) => theme.colors.blue.c400 };
  border-right: solid 1px ${ ({theme}) => theme.colors.blue.c400 };
`

export const S_desc_radio_label = styled.label`
  ${fontF}
  ${cusTR('.2s')}
  font-weight: 600;
  font-size: 12px;

  position: relative;
  
  padding: 4px 8px 4px 8px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  
  /* background: ${ ({theme}) => theme.colors.green.c100 }; */

  width: 100%;
  color: ${ ({theme}) => theme.colors.blue.c700 };

  &.backG {
    background: ${ ({theme}) => theme.colors.blue.c200 };
  }

  &.border-rad {
    
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  &.border-bottom {
    border-bottom: solid 1px ${ ({theme}) => theme.colors.blue.c400 };
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
`
