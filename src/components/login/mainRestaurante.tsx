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
      " cpf email email "
      " tel1 nasc docs "
      " cep rua rua "
      " number obs obs "
      " bairro cidade estado ";
    align-items: center;
  }
  ${cusMQ(1024)} {
    grid-template-areas: 
      " name name rg cpf "
      " email email tel1 nasc "
      " docs cep rua rua "
      " number obs bairro cidade "
      " estado emergency emergency categoria ";
  }
  ${cusMQ(1120)} {
    grid-template-areas: 
      " name name rg cpf "
      " email tel1 nasc docs "
      " rua number obs cep "
      " bairro bairro cidade estado ";
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
      "nomer nomer social social"
      "cnpj tel2 ruar numberr"
      "bairror cidader estador cepr"

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

const MainRestaurante = () => {

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

  const [e_cep, setE_cep] = useState('')
  const changeCep = (e) => setE_cep(e.target.value)

  const [e_categoria, setE_categoria] = useState('')
  const changeCategoria = (e) => setE_categoria(e.target.value)

  const [e_nomer, setE_nomer] = useState('')
  const changeNomer = (e) => setE_nomer(e.target.value)

  const [e_social, setE_social] = useState('')
  const changeSocial = (e) => setE_social(e.target.value)

  const [e_cnpj, setE_cnpj] = useState('')
  const changeCnpj = (e) => setE_cnpj(e.target.value)

  const [e_tel2, setE_tel2] = useState('')
  const changeTel2 = (e) => setE_tel2(e.target.value)

  const [e_ruar, setE_ruar] = useState('')
  const changeRuar = (e) => setE_ruar(e.target.value)

  const [e_numberr, setE_numberr] = useState('')
  const changeNumberr = (e) => setE_numberr(e.target.value)

  const [e_bairror, setE_bairror] = useState('')
  const changeBairror = (e) => setE_bairror(e.target.value)

  const [e_cidader, setE_cidader] = useState('')
  const changeCidader = (e) => setE_cidader(e.target.value)

  const [e_estador, setE_estador] = useState('')
  const changeEstador = (e) => setE_estador(e.target.value)

  const [e_cepr, setE_cepr] = useState('')
  const changeCepr = (e) => setE_cepr(e.target.value)

  const changeDoc = (e) => { console.log(e.target.files) }

  return (
  <>
    <S_main_registerEntregador>
      <S_div_container_01>
        <S_h1>Cadastro de Restaurantes</S_h1>

        <S_div_container_02>

          <S_h2_01>Dados do Representante</S_h2_01>
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
            <InptText id="tel1" label="Telefone:" placeholder="digite o telefone" 
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
            <InptText id="cep" label="CEP:" placeholder="tel" 
              colorInput="true" onChangeFN={changeCep} area="cep"
            />
          </S_div_container_03>

          <S_h2_01>Dados da Empresa</S_h2_01>
          <S_div_container_04>
            <InptText id="nomer" label="Nome:" placeholder="nome do restaurante" 
              colorInput="true" onChangeFN={changeNomer} area="nomer"
            />
            <InptText id="social" label="Razão Social:" placeholder="razão social" 
              colorInput="true" onChangeFN={changeSocial} area="social"
            />
            <InptText id="cnpj" label="CNPJ:" placeholder="CNPJ" 
              colorInput="true" onChangeFN={changeCnpj} area="cnpj"
            />
            <InptText id="tel2" label="Tel comercial:" placeholder="telefone comercial" 
              colorInput="true" onChangeFN={changeTel2} area="tel2"
            />
            <InptText id="ruar" label="Rua:" placeholder="Rua" 
              colorInput="true" onChangeFN={changeRuar} area="ruar"
            />
            <InptText id="numberr" label="Número:" placeholder="número" 
              colorInput="true" onChangeFN={changeNumberr} area="numberr"
            />
            <InptText id="bairror" label="Bairro:" placeholder="bairro" 
              colorInput="true" onChangeFN={changeBairror} area="bairror"
            />
            <InptText id="cidader" label="Cidade:" placeholder="cidade" 
              colorInput="true" onChangeFN={changeCidader} area="cidader"
            />
            <InptText id="estador" label="Estado:" placeholder="estado" 
              colorInput="true" onChangeFN={changeEstador} area="estador"
            />
            <InptText id="cepr" label="CEP:" placeholder="CEP" 
              colorInput="true" onChangeFN={changeCepr} area="cepr"
            />
          </S_div_container_04>
          <S_btn_02>Cadastrar</S_btn_02>
        </S_div_container_02>
      </S_div_container_01>

    </S_main_registerEntregador>
  </>
);

}

export default MainRestaurante;