import { Card } from "../components/card/Card"
import { CardList } from "../components/cardList/CardList"
import { FooterMenu } from "../components/footerMenu/FooterMenu"
import { Nav } from "../components/nav/Nav"
import { Slider } from "../components/slider/Slider"


export const Home = () => {
  return ( 
    <>
        <Nav/>
        <Slider/>
        <h2 className="text-center py-6 font-bold text-2xl">NUESTRA CARTA</h2>
        <CardList/>
        <FooterMenu/>
    </>
  )
}