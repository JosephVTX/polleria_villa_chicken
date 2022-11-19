import { Card } from "../card/Card"

export const CardList = () => {
  return (
    <div className="grid grid-cols-2 m-auto mb-[70px] lg:grid-cols-3 place-items-center">
        <Card title="ENSALADAS" img="../img/ensalada.png"/>
        <Card title="CARNES A LA PARRILLA" img="../img/parrilla1.png"/>
        <Card title="PARRILLAS ESPECIALES" img="../img/parrilla2.png"/>
        <Card title="ACOMPAÑAMIENTO" img="../img/adicionales.png"/>
        <Card title="ANTOJOS" img="../img/antojos.png"/>
        <Card title="BEBIDAS" img="../img/bebidas.png"/>
        <Card title="POLLO A LA LEÑA" img="../img/pollo_leña.png"/>
        <Card title="PIQUEO A LA PARILLA" img="../img/piqueo_parrilla.png"/>
        <Card title="POSTRES" img="../img/postres.png"/>
    </div>
  )
}