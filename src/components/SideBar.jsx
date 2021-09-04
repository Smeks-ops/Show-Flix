const Sidebar = () =>{
  return(
    <>
    <div className="container">
      <div className="logo">
        <h3>Show<span>Flix</span></h3>
      </div>
      <div className="nav-section">
        <div className="nav-item active">
          <img src="/assets/images/searchicon.svg" alt=""/>
          <div className="nav-item_text">
            <p>Search</p>
          </div>
        </div>
        <div className="nav-item"></div>
      </div>
    </div>
    </>
  )
}
export default Sidebar;