import { connect } from "react-redux";
import Card from "../Card";
import s from './Favorites.module.css'


const Favorites = (props) => {
    
    return ( 
        <div className={s.container}> 
            {/* //mapeamos de la lista de favoritos */}
            { 
                props.myFavorites.map((elem)=>
                    <Card 
                        {...elem}
                        onClose={props.onClose}
                        key={elem.id}
                    />
                )
            }
        </div>

     );
}

function mapStateToProps(state){
   return{
      myFavorites:state.myFavorites
   }
} 

export default connect(mapStateToProps,null)(Favorites);