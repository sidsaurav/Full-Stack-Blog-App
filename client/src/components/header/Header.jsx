import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className = "headerTitles">
                <span class="headerTitleSm">React & Node</span>
                <span class="headerTitleLg">Blog</span>
            </div>
            <img
            className="headerImg"
            src="https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?cs=srgb&dl=pexels-pixabay-459654.jpg&fm=jpg"
            alt="main"
            />
        </div>
    )
}

export default Header
