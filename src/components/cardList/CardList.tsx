import { Card } from "../card/Card"

export const CardList = () => {
  return (
    <div className="grid grid-cols-2 place-items-center w-full">
        <Card title="ENSALADAS" img="../img/ensalada.png"/>
        <Card title="CARNES A LA PARRILLA" img="../img/parrilla1.png"/>
        <Card title="PARRILLAS ESPECIALES" img="../img/parrilla2.png"/>
        <Card title="ACOMPAÑAMIENTO" img="../img/adicionales.png"/>
    </div>
  )
}