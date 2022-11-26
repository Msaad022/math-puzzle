import Image from "next/image"
import map from '../public/map-game1.svg'

function Map  () {
  let bgImage= { backgroundImage: `url(/map-game1.svg)` }
  return (
    <main className=" mx-auto max-w-[636px] ">
        <section>
          <div className="relative h-screen min-h-[667px] bg-center bg-cover" style={bgImage}></div>
        </section>
    </main>
  )
}

export default Map