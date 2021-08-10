



const MarkerPoint = (props: any) => {

  const { c } = props

  return (
  <>
    <svg height="16"  style={{transform: 'rotate(180deg)'}}
      viewBox="0 0 97 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.823 0l48.089 48.088L97 0H.823z"
        fill={c}
      />
    </svg>
  </>
);

}

export default MarkerPoint;