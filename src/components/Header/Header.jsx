import React from "react";

const Header = () =>{
    return(
        <section className="header">
            <div></div>
            <div className="header-description">
                <h2>remote|OK</h2>
                <div>
                    <h3>find a <strong>remote job</strong></h3>
                    <h3>work from <strong>anywhere</strong></h3>
                </div>
                <input type="text"/>
            </div>
            <div className="header-buttons">
                <button className="blue"><p>Health insurance</p></button>
                <button className="red"><p>Post a remote job</p></button>
                <button className="white"><p>Log in</p></button>
            </div>

        </section>
    )
}

export default Header