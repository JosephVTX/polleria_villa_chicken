export const Card = ({title, img}: {title:string, img:string}) => {
  return (
    <div className="w-max">

        <img className="max-[600px]:h-[13rem] max-[600px]:w-[13rem] rounded-lg h-[18rem] w-[18rem] lg:h-[20rem] lg:w-[20rem]" src={img} alt="Comida" />
        <h4 className="font-bold text-center py-2 text-[14px]">{title}</h4>

    </div>
  )
}