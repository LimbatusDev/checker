export const SocialResults = ({ name, socialStatus }) => {
  console.log(socialStatus)
  return (
    <div className="talla">
      {
        Object.keys(socialStatus).forEach((i, j) => {
          return <p>{j}</p>
        })
      }
      <p>{JSON.stringify(socialStatus)}</p>
    </div>
  )
}