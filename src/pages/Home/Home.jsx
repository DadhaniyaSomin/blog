import Header from "../../componants/Header/Header"
import Posts from "../../componants/posts/Posts"
import Sidebar from "../../componants/sidebar/Sidebar"
import "./home.css";
function Home() {
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </>
    )
}

export default Home
