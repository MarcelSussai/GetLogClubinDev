import { useState, createContext } from 'react'

export const AppCtx = createContext({})

export default function CtxProvider({ children }) {

  const [ctx_is_btnActive, setCtx_is_btnActive] = useState<boolean>(false)
  const [ctx_textEmailLogin, setCtx_textEmailLogin] = useState<string>('')
  const [ctx_textPassLogin, setCtx_textPassLogin] = useState<string>('')

  return (
    <>      
      <AppCtx.Provider value={{ 
        ctx_is_btnActive, setCtx_is_btnActive,
        ctx_textEmailLogin, setCtx_textEmailLogin,
        ctx_textPassLogin, setCtx_textPassLogin,
      }} >
        { children }
      </AppCtx.Provider>
    </>
  )
}