import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img className="profileImg"
                            src="https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?cs=srgb&dl=pexels-markus-spiske-1089440.jpg&fm=jpg"
                            alt="pic"
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                        <label>Username</label>
                        <input type="text" placeholder="Name" />
                        <label>Email</label>
                        <input type="email" placeholder="name@example.com" />
                        <label>Username</label>
                        <input type="password" />
                        <button className="settingsSubmit">Update</button>
                    </div>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
