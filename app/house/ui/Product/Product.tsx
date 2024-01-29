/* eslint-disable @next/next/no-img-element */
import './style.css'
interface ProDuctProps {
    id?: number
    img: string
    name: string
    title: string
}
const ProDuct: React.FC<ProDuctProps> = ({ img, name, title }) => {
 
    return ( 
        <div className="house__product-card">
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{title}</p>
        </div>
     );
}

export default ProDuct;