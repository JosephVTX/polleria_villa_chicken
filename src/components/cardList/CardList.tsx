import { Card } from "../card/Card"

export const CardList = () => {
  return (
    <div className="grid grid-cols-2 m-auto mb-[70px] lg:grid-cols-3 place-items-center">
        <Card title="ENSALADAS" img="./img/ensalada.png"/>
        <Card title="CARNES A LA PARRILLA" img="./img/ensalada.png"/>
        <Card title="PARRILLAS ESPECIALES" img="./img/ensalada.png"/>
        <Card title="ACOMPAÑAMIENTO" img="./img/ensalada.png"/>
        <Card title="ANTOJOS" img="./img/ensalada.png"/>
        <Card title="BEBIDAS" img="./img/ensalada.png"/>
        <Card title="POLLO A LA LEÑA" img="./img/ensalada.png"/>
        <Card title="PIQUEO A LA PARILLA" img="./img/ensalada.png"/>
        <Card title="POSTRES" img="./img/ensalada.png"/>
    </div>
  )
}