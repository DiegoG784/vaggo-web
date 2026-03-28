import Link from "next/link"
// import Image from "next/image";


export default function SpotCard() {
  // set variable where stores Spot's object
  // with Spot object set, set all info with possible formatting needed
  let spot
  
  return (
    <section>
        <div className="bg-gray-200 w-fit p-3 mx-1">
          <img src={"/spot_image_test.webp"} width={164} height={186}/> {/* replace with <Image/> */}
          <Link href={"/spot/id"}>
            <p className="text-black mt-2">Shopping Interlagos</p>
          </Link>
          <p className="text-black">Seg-Sex - 10h-18h</p>
          <p className="text-black">R$ 120/Diária</p>
          <div className="flex flex-row justify-center mt-3">
            <button className="text-black bg-red-200 p-1 mr-2" onClick={() => {console.log("Reservar")}}>Reservar</button>
            <button className="text-black bg-red-200 p-1" onClick={() => {console.log("Reservar")}}>C</button>
          </div>
        </div>
    </section>
  )
}