


const Contact_Icon = (props: any) => {
  const { color } = props
  return (
  <>
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 25.6" {...props}>
      <g data-name="Camada 2">
        <path
          d="M28.8 0H3.2A3.18 3.18 0 000 3.2v19.2a3.21 3.21 0 003.2 3.2h25.6a3.21 3.21 0 003.2-3.2V3.2A3.2 3.2 0 0028.8 0zM24 20.8H8v-3.2h16zm0-6.4H8v-3.2h16zM28.8 8H24V3.2h4.8"
          fill={color}
          data-name="Camada 1"
        />
      </g>
    </svg>
  </>
);

}

export default Contact_Icon;