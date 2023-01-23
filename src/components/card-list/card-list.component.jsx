import CardItem from "../card-item/card-item.component";
import './card-list.style.css'

const CardList = ({monsters}) => (
    <ul className="cardList">
      {monsters.map((monster) => {
        const {id, name, email} = monster
        return <CardItem key={id} id={id} name={name} email={email}/>
      })}
    </ul>
)

export default CardList