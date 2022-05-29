import "./sidebar.css"
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle"> About Me</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle"> Categories</span>
        <li className="sidebarListItem"> First</li>
        <li className="sidebarListItem"> Music</li>
        <li className="sidebarListItem"> Tech</li>
        <li className="sidebarListItem"> First</li>
        <li className="sidebarListItem"> Music</li>
        <li className="sidebarListItem"> Tech</li>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle"> Follow Me</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
