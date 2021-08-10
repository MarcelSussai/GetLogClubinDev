import HeaderPanel from "./headerPanel"
import styled from 'styled-components'
import { cusMQ, cusTR, fontF } from '../../../stylesConfig'
import GoogleMapReact from 'google-map-react'
import { S_main } from "../../styles/main_S"
import Mark_01 from "./mark_01"



const S_mainSty = styled(S_main)`
  display: flex;
  justify-content: center;
  /* align-items: center; */
`
const S_container_maps_div = styled.div`
  width: 80%;
  height: 400px;
  border: solid 1px;
`

// -23.463296, -47.483368

const PainelRestaurante = () => {

  const propriedades = {
    center: {
      lat: -23.463296,
      lng: -47.483368
    },
    zoom: 16
  }

  return (
  <>
    <HeaderPanel />
    <S_mainSty>

      <S_container_maps_div>

        <GoogleMapReact
          bootstrapURLKeys={{ key: `AIzaSyBsTL52koPNmZSG7Wop5-tvFND_39Qr_z0` }}
          defaultCenter={propriedades.center}
          defaultZoom={propriedades.zoom}
        >
          <Mark_01
            lat={propriedades.center.lat}
            lng={propriedades.center.lng}
          />
        </GoogleMapReact>

      </S_container_maps_div>
    </S_mainSty>
  </>
);

}

export default PainelRestaurante