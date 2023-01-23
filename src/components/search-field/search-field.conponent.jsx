import './search-field.style.css'

const SearchField = ({className, placeholder, onChangeHandler}) => (
    <input type='search'
           className={`search-box ${className}`}
           placeholder={placeholder}
           onChange={onChangeHandler}/>
)

export default SearchField