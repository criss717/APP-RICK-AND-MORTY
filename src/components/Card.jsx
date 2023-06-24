import { Link } from 'react-router-dom';
import s from './Card.module.css'


export default function Card(props) {
   return (      
      <div className={s.card}>
         <div className={s.div1}>
            <img src={props.image} alt='' />
            <button className={s.buttonX} onClick={()=>props.onClose(props.id)}>X</button>
            <Link to={`/detail/${props.id}`}>
               <h2>{props.name}</h2>
            </Link>
         </div>
         <div className={s.txt}>
            <h2>{props.status}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
            <h2 className={s.origin}>{props.origin}</h2>

         </div>
      </div>
   );
}
