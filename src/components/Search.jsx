/* eslint-disable react/prop-types */


const Search = (props) => {

    
  return (
    <>
    {/* <input type="text" value={search} onChange={(e)=>{
        setSearch(e.target.value)
      }}/> */}
    <form className="flex text-black" role="search">
          <input
            className="form-control text-black rounded-end-5 my-3 fw-semibold" 
            type="text"
            value={props.search}
            onChange={props.handleChange}
          />
         
        </form>
    </>
  )
}

export default Search