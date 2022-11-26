import Image from "next/image"
import map from '../public/map-game.svg'

function Map  () {
  return (
    <main>
        <section>
            <div className="relative bg-no-repeat h-screen">
              <Image className="object-contain object-top"
                src={map} 
                alt="map game"  
                fill
                sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"/>
            </div>
        </section>
    </main>
  )
}

export default Map