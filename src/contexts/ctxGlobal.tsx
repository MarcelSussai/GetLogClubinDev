import { useState, createContext } from 'react'

export const AppCtx = createContext({})

export default function CtxProvider({ children }) {

  const [ctx_is_btnActive, setCtx_is_btnActive] = useState(false)

  return (
    <>      
      <AppCtx.Provider value={{ 
        ctx_is_btnActive, setCtx_is_btnActive
      }} >
        { children }
      </AppCtx.Provider>
    </>
  )
}