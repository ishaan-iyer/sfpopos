import POPOSSpace from './POPOSSpace'

import './POPOSList.css';

import data from './sfpopos-data.json'


function POPOSList() {

const spaces = data.map(({ title, desc, address, images, hours }, i) => {

  return (
    <POPOSSpace
      id={i}
      key={title}
      name={title}
      description={desc}
      address={address}
      image={images[0]}
      hours={hours} // add a new prop for hours here
    />
  )
})

    return (
        <div className="POPOSList">
            { spaces }
        </div>
    )
}


export default POPOSList