import styled from 'styled-components'
import { cusMQ, cusTR, fontF } from '../../../stylesConfig'
import InptText from '../../styles/inpts_S'
import { S_main } from '../../styles/main_S'
import { useState } from 'react'
import Inpts_Files_S from '../../styles/inpts_files_S'
import { S_btn_02 } from '../../styles/btns_S'



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
  margin-bottom: 48px;
`
const S_div_container_02 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border: solid 1px ${ ({theme}) => theme.colors.brown.c300 };
  

`
const S_div_container_03 = styled.div`
  padding: 16px 8px 16px 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${cusMQ(768)} {
    display: grid;
    grid-template-areas: 
      " name name rg "
      " cpf email tel1 "
      " nasc nasc docs "
      " rua number obs "
      " bairro cidade estado "
      " emergency emergency categoria ";
    align-items: center;
  }
  ${cusMQ(1024)} {
    grid-template-areas: 
      " name name rg cpf "
      " email email tel1 tel1 "
      " nasc docs rua rua "
      " number obs bairro cidade "
      " estado emergency emergency categoria ";
  }
  ${cusMQ(1120)} {
    grid-template-areas: 
      " name name rg cpf "
      " email tel1 nasc docs "
      " rua rua number obs "
      " bairro bairro cidade estado "
      " emergency emergency emergency categoria ";
  }
`
const S_div_container_04 = styled.div`
  padding: 16px 8px 16px 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  ${cusMQ(768)} {
    display: grid;
    grid-template-areas: 
      "ano modelo placa cor"
    ;
  }
`
const S_h1 = styled.h1`
  ${fontF}
  font-size: 18px;
  font-weight: 900;
  color: ${ ({theme}) => theme.colors.brown.c700 };
  
  ${cusMQ(425)} {
    font-size: 24px;
  }
  ${cusMQ(768)} {
    font-size: 28px;
  }
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
  
  const [e_rua, setE_rua] = useState('')
  const changeRua = (e) => setE_rua(e.target.value)

  const [e_num, setE_num] = useState('')
  const changeNum = (e) => setE_num(e.target.value)

  const [e_obs, setE_obs] = useState('')
  const changeObs = (e) => setE_obs(e.target.value)

  const [e_bairro, setE_bairro] = useState('')
  const changeBairro = (e) => setE_bairro(e.target.value)

  const [e_cidade, setE_cidade] = useState('')
  const changeCidade = (e) => setE_cidade(e.target.value)

  const [e_estado, setE_estado] = useState('')
  const changeEstado = (e) => setE_estado(e.target.value)

  const [e_emergency, setE_emergency] = useState('')
  const changeEmergency = (e) => setE_emergency(e.target.value)

  const [e_categoria, setE_categoria] = useState('')
  const changeCategoria = (e) => setE_categoria(e.target.value)

  const [e_ano, setE_ano] = useState('')
  const changeAno = (e) => setE_ano(e.target.value)

  const [e_modelo, setE_modelo] = useState('')
  const changeModelo = (e) => setE_modelo(e.target.value)

  const [e_placa, setE_placa] = useState('')
  const changePlaca = (e) => setE_placa(e.target.value)

  const [e_cor, setE_cor] = useState('')
  const changeCor = (e) => setE_cor(e.target.value)

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
              colorInput="true" onChangeFN={changeName} area="name"
            />
            <InptText id="rg" label="RG:" placeholder="digite seu RG" 
              colorInput="true" onChangeFN={changeRG} area="rg"
            />
            <InptText id="cpf" label="CPF:" placeholder="digite seu CPF" 
              colorInput="true" onChangeFN={changeCPF} area="cpf"
            />
            <InptText id="email" label="E-mail:" placeholder="digite seu e-mail" 
              colorInput="true" onChangeFN={changeEmail} area="email"
            />
            <InptText id="tel1" label="Telefone para contato:" placeholder="digite o telefone" 
              colorInput="true" onChangeFN={changeTel1} area="tel1"
            />
            <InptText id="nasc" label="Data de Nascimento:" placeholder="selecione ou digite a data" 
              colorInput="true" onChangeFN={changeNasc} typeDate='a' area="nasc"
            />
            <Inpts_Files_S id="docs" onChangeFN={changeDoc} txtLabel="Fotos frente/verso do RG e CPF" 
              txtDesc="Anexar documentos" area="docs"
            />
            <InptText id="rua" label="Rua:" placeholder="rua" 
              colorInput="true" onChangeFN={changeRua} area="rua"
            />
            <InptText id="number" label="Número:" placeholder="nº" 
              colorInput="true" onChangeFN={changeNum} area="number"
            />
            <InptText id="obs" label="Observações:" placeholder="apto / se é fundo / etc..." 
              colorInput="true" onChangeFN={changeObs} area="obs"
            />
            <InptText id="bairro" label="Bairro:" placeholder="bairro" 
              colorInput="true" onChangeFN={changeBairro} area="bairro"
            />
            <InptText id="cidade" label="Cidade:" placeholder="cidade" 
              colorInput="true" onChangeFN={changeCidade} area="cidade"
            />
            <InptText id="estado" label="Estado:" placeholder="estado" 
              colorInput="true" onChangeFN={changeEstado} area="estado"
            />
            <InptText id="emergency" label="Contado para emergência:" placeholder="tel" 
              colorInput="true" onChangeFN={changeEmergency} area="emergency"
            />
            <InptText id="categoria" label="Categoria:" placeholder="GetLogClub ou restaurante" 
              colorInput="true" onChangeFN={changeCategoria} area="categoria"
            />
          </S_div_container_03>

          <S_h2_01>Dados do Veículo</S_h2_01>
          <S_div_container_04>
            <InptText id="ano" label="Ano:" placeholder="ano" 
              colorInput="true" onChangeFN={changeAno} area="ano"
            />
            <InptText id="modelo" label="Modelo:" placeholder="modelo" 
              colorInput="true" onChangeFN={changeModelo} area="modelo"
            />
            <InptText id="placa" label="Placa:" placeholder="placa" 
              colorInput="true" onChangeFN={changePlaca} area="placa"
            />
            <InptText id="cor" label="Cor:" placeholder="cor" 
              colorInput="true" onChangeFN={changeCor} area="cor"
            />
          </S_div_container_04>
          <S_btn_02>Cadastrar</S_btn_02>
        </S_div_container_02>
      </S_div_container_01>

    </S_main_registerEntregador>
  </>
);

}

export default MainEntregador;