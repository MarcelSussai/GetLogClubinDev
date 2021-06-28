

const Enter = (props: any) => {
  const { color } = props
  return (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <g data-name="Camada 2">
        <path
          d="M12 10L8 6v3H0v2h8v3zm8 0A10 10 0 01.46 13h2.13a8 8 0 100-6H.46A10 10 0 0120 10z"
          fill={color}
          data-name="Camada 1"
        />
      </g>
    </svg>
  </>
);

}

export default Enter;