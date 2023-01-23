import '../card-item/card-item.style.css'

const CardItem = ({id, name, email}) => (
    <li className="cardList-item">
      <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`}/>
      <h2>{name}</h2>
      <p>{email}</p>
    </li>
)

export default CardItem