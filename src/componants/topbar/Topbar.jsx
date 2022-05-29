import "./Topbar.css";

const Topbar = () => {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <div className="topListItem">Home</div>
                    <div className="topListItem">About</div>
                    <div className="topListItem">Contact</div>
                    <div className="topListItem">Write</div>
                    <div className="topListItem">Log Out</div>
                </ul>
            </div>
            <div className="topRight">
                <img 
                
                className="topImg"
                alt=""
                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500">
                 
                </img>
            </div>
        </div>
    )
}

export default Topbar
