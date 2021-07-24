import styled from 'styled-components';
import { cusMQ, cusTR, fontF } from '../../stylesConfig';

const S_div_01 = styled.div`
`
const S_div_02 = styled.div`
  ${cusTR('.2s')}
  background: ${ ({theme}) => theme.colors.blue.c800 };
  /* width: fit-content; */
  padding: 4px;
  display: flex;
  border-radius: 12px;
  flex-direction: row;
  margin: 8px 0 0 0;
  cursor: pointer;
  
  &:hover {
    background: ${ ({theme}) => theme.colors.aqua.c700 };
  }
`
const S_div_03 = styled.div`
  padding: 8px;
`
const S_label = styled.label`
  position: relative;
`
const S_span_01 = styled.span`
  
  ${fontF}
  ${cusTR('.2s')}
  font-size: 13px;
  font-weight: 700;
  color: ${ ({theme}) => theme.colors.brown.c600 };
  padding: 2px 6px 2px 6px;
  border-radius: 12px;
`
const S_span_02 = styled.span`
  ${fontF}
  ${cusTR('.2s')}
  font-size: 14px;
  font-weight: 500;
  color: ${ ({theme}) => theme.colors.green.p300 };
  background: ${ ({theme}) => theme.colors.aqua.c600 };
  padding: 4px 8px 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`
const S_input = styled.input`
  display: none;
`
const S_img = styled.img`
  width: 16px;
`

type Props = {
  id?: string;
  onChangeFN?: any;
  value?: any;
  txtLabel?: string;
  txtDesc?: string;
}

const Inpts_Files_S = (props: Props) => {
  
  const { id, onChangeFN, value, txtLabel, txtDesc } = props
  
  return (
  <>
    <S_div_01>
      <S_label htmlFor={id}>
        <S_span_01>
          {txtLabel || 'label'}
        </S_span_01>
        <S_input id={id} type="file" onChange={onChangeFN} />
        <S_div_02>
          <S_div_03>
            <S_img src="/icon_upload.svg" />
          </S_div_03>
          <S_span_02>
            {txtDesc || 'descrição'}
          </S_span_02>
        </S_div_02>
      </S_label>
    </S_div_01>
  </>
);

}

export default Inpts_Files_S;