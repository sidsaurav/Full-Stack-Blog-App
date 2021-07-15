import "./write.css"

const Write = () => {
    return (
        <div className="write">
            <img
                className="writeImg"
                src="http://4.bp.blogspot.com/-aXdYOTx56Dg/Tm_R-jHdW9I/AAAAAAAAFFY/PHNjTgu3gjk/s1600/nature+snow+wallpaper-1.jpg"
                alt="pic" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus" />
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                    <button className="writeSubmit">Publish</button>
                </div>
            </form>
        </div>
    )
}

export default Write
