import styled from 'styled-components'
import { cusMQ, cusTR, fontF } from '../../../stylesConfig'
import InptText from '../../styles/inpts_S'
import { S_main } from '../../styles/main_S'
import { useState } from 'react'
import Inpts_Files_S from '../../styles/inpts_files_S'



const S_main_registerEntregador = styled(S_main)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const S_div_container_01 = styled.div`
  display: flex;
  flex-direction: column;
  width: 88%;
`
const S_div_container_02 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: solid 1px ${ ({theme}) => theme.colors.brown.c300 };
  

`
const S_div_container_03 = styled.div`
  padding: 16px 8px 16px 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`
const S_h1 = styled.h1`
  ${fontF}
  font-size: 18px;
  font-weight: 900;
  color: ${ ({theme}) => theme.colors.brown.c700 };
`
const S_h2_01 = styled.h2`
  ${fontF}
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  color: ${ ({theme}) => theme.colors.brown.c200 };
  padding: 8px;
  background: ${ ({theme}) => theme.colors.brown.c700 };
`

const MainEntregador = () => {

  const [e_name, setE_name] = useState('')
  const changeName = (e) => setE_name(e.target.value)
  
  const [e_rg, setE_rg] = useState('')
  const changeRG = (e) => setE_rg(e.target.value)
  
  const [e_cpf, setE_cpf] = useState('')
  const changeCPF = (e) => setE_cpf(e.target.value)
  
  const [e_email, setE_email] = useState('')
  const changeEmail = (e) => setE_email(e.target.value)
  
  const [e_tel1, setE_tel1] = useState('')
  const changeTel1 = (e) => setE_tel1(e.target.value)
  
  const [e_nasc, setE_nasc] = useState('')
  const changeNasc = (e) => setE_nasc(e.target.value)

  const changeDoc = (e) => { console.log(e.target.files) }

  return (
  <>
    <S_main_registerEntregador>
      <S_div_container_01>
        <S_h1>Cadastro de Entregadores</S_h1>

        <S_div_container_02>
          <S_h2_01>Dados do Entregador</S_h2_01>
          <S_div_container_03>

            <InptText id="name" label="Nome:" placeholder="digite aqui seu nome" 
              colorInput="true" onChangeFN={changeName} 
            />

            <InptText id="rg" label="RG:" placeholder="digite seu RG" 
              colorInput="true" onChangeFN={changeRG}
            />

            <InptText id="cpf" label="CPF:" placeholder="digite seu CPF" 
              colorInput="true" onChangeFN={changeCPF}
            />

            <InptText id="email" label="E-mail:" placeholder="digite seu e-mail" 
              colorInput="true" onChangeFN={changeEmail}
            />

            <InptText id="tel1" label="Telefone para contato:" placeholder="digite o telefone" 
              colorInput="true" onChangeFN={changeTel1}
            />

            <InptText id="nasc" label="Data de Nascimento:" placeholder="selecione ou digite a data" 
              colorInput="true" onChangeFN={changeNasc} typeDate='a'
            />

            <Inpts_Files_S id="docs" onChangeFN={changeDoc} txtLabel="Fotos frente/verso do RG e CPF" 
              txtDesc="Anexar documentos"
            />

          </S_div_container_03>
        </S_div_container_02>
      </S_div_container_01>

    </S_main_registerEntregador>
  </>
);

}

export default MainEntregador;