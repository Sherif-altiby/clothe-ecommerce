import './SearchItem.scss'

const SearchItem  = ({item}) => {
  return (
    <div className='search_item'  >
      <div className="img">
        <img src={item.src} alt="" />
      </div>
      <div className="text">
        <p> {item.brand} </p>
        <h3> {item.title} </h3>
        <h4> {item.price} </h4>
      </div>
       </div>
  )
}

export default SearchItem 