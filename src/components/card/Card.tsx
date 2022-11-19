export const Card = ({title, img}: {title:string, img:string}) => {
  return (
    <div className="w-max">

        <img className="h-[170px] w-[170px] rounded-lg" src={img} alt="Ensalada" />
        <h4 className="font-bold text-center py-2 text-[14px]">{title}</h4>

    </div>
  )
}