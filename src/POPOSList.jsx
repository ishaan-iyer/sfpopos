import POPOSSpace from './POPOSSpace'

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
      hours={hours}
    />
  )
})

    return (
        <div className="mx-auto grid w-[calc(100%-2rem)] grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            { spaces }
        </div>
    )
}


export default POPOSList