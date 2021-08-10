import { useEffect, useRef, useState } from "react";
import { S_btn_01 } from "../../styles/btns_S";
import InptText from "../../styles/inpts_S";
import { 
  S_mainRegister_main, S_mainRegister_section,
  S_mainRegister_text_h1, S_mainRegister_section_item,
} from "../../styles/login_S";
import { S_desc_radio_label, S_inpt_radio_01, S_radio_container_01 } from "../../styles/radios_S";
import Link from 'next/link'


const txtH1             = 'Criar conta'
const txtLabel1         = 'Entregador'
const txtLabel2         = 'Restaurante'

const txtEmailL         = 'E-mail'
const txtEmailP         = 'digite aqui seu email'
const txtPassL          = 'Senha'
const txtPassP          = 'digite aqui sua senha'
const txtCPassL         = 'Confirmar Senha'
const txtCPassP         = 'confirme aqui sua senha'

const txtBtn            = 'próximo'



const MainRegister = () => {

  const ref_radio_1                   = useRef(null)
  const ref_radio_2                   = useRef(null)

  const [value, setValue]             = useState('Entregador')
  const [mark, setMark]               = useState(value)
  const [email, setEmail]             = useState('')
  const [pass, setPass]               = useState('')
  const [cPass, setCPass]             = useState('')


  useEffect(() => {
    setMark(value)
  }, [value])
  
  useEffect(() => {
    console.log(email)
  }, [email])

  useEffect(() => {
    console.log(pass)
  }, [pass])
  
  useEffect(() => {
    console.log(cPass)
  }, [cPass])

  const H_type = (e) => {
    setValue(e.target.value)
    console.log(e.target.value)
  }

  const onChange_email            = (e) => setEmail(e.target.value)
  const onChange_pass             = (e) => setPass(e.target.value)
  const onChange_confirmedPass    = (e) => setCPass(e.target.value)

  return (
  <>
    <S_mainRegister_main>
      <S_mainRegister_section>
        <S_mainRegister_text_h1>{txtH1}</S_mainRegister_text_h1>

        <S_mainRegister_section_item>
          <S_radio_container_01 onChange={H_type}>
              <S_desc_radio_label className={`border-bottom ${mark === 'Entregador' ? 'backG' : ''}`} >{txtLabel1}
                <S_inpt_radio_01
                  defaultChecked={value === 'Entregador'} 
                  type="radio" 
                  value="Entregador" 
                  name="tipo" 
                /> 
              </S_desc_radio_label>

              <S_desc_radio_label className={`border-rad ${mark === 'Restaurante' ? 'backG' : ''}`}>{txtLabel2}
                <S_inpt_radio_01
                  defaultChecked={value === 'Restaurante'} 
                  type="radio" 
                  value="Restaurante" 
                  name="tipo" 
                />
              </S_desc_radio_label>
          </S_radio_container_01>
        </S_mainRegister_section_item>

        <S_mainRegister_section_item>
          <InptText 
            id="email"
            placeholder={txtEmailP}
            label={txtEmailL}
            onChangeFN={onChange_email}
          />
          <InptText 
            id="pass"
            placeholder={txtPassP}
            label={txtPassL}
            onChangeFN={onChange_pass}
          />
          <InptText 
            id="cpass"
            placeholder={txtCPassP}
            label={txtCPassL}
            onChangeFN={onChange_confirmedPass}
          />
        </S_mainRegister_section_item>
        <Link href={
          value === 'Entregador' ? 
          '/registerEntregador' : 
          '/registerRestaurante'
        }>
          <S_btn_01>{txtBtn}</S_btn_01>
        </Link>
      </S_mainRegister_section>
    </S_mainRegister_main>
  </>
);

}

export default MainRegister;