  
const AddUser = (props: any) => {
  const { color } = props
  return (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 16" {...props}>
      <g data-name="Camada 2">
        <g data-name="Camada 1">
          <path fill={color || '#000000'} d="M14 10c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4zM5 6V3H3v3H0v2h3v3h2V8h3V6H5zM14 8a4 4 0 10-2.83-1.17A4 4 0 0014 8z" />
        </g>
      </g>
    </svg>
  </>
);

}

export default AddUser;