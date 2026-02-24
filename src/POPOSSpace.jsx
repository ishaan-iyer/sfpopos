// src/POPOSSpace.js

function POPOSSpace(props) {
    const { name, image, address } = props
  return (
    <div>
      <img src={`/images/${image}`}     
        width="300"
        height="300"
        alt="Hello"
      />
      <h1>{name}</h1>
      <div>{address}</div>
    </div>
  )
}

export default POPOSSpace