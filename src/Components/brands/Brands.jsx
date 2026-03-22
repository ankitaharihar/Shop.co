import Container from "../layout/Container"

export default function Brands() {
  return (
    <div className="bg-black text-white py-8">
      <Container className="flex flex-wrap justify-between items-center gap-6 
      text-xl md:text-2xl font-semibold tracking-wider">

        <span>VERSACE</span>
        <span>ZARA</span>
        <span>GUCCI</span>
        <span>PRADA</span>
        <span>Calvin Klein</span>

      </Container>
    </div>
  )
}