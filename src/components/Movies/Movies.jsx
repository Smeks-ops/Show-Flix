import Input from "../Input/Input"
import "./Movies.css"

const Movie = ( ) => {
  const style = {
    paddingLeft: "3.375rem",
    backgroundColor: "#EFF0F7",
    color: "#A0A3BD",
    borderRadius: "16px",
    border: "1px solid transparent",
    outline:"none",
  };
  return(
    <div className="wrapper">
      <h3>Explore</h3>
      <br/>
      <div className="search-engine">

      <Input placeholder="Search" style={style} />
      <button type="submit" className="btn-search">
        Search
      </button>
      </div>
    </div>
  )
}
export default Movie;