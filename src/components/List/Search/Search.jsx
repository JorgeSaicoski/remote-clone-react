import React from "react";

const Search = () => {
    return(
        <tr className="table-header">
            <th className="intro">
                <div className="intro-text">
                    <p>
                        Hiring remotely?
                        <span>
                            Reach 2,000,000+ remote workers
                        </span>
                        on the #1 Remote Job Board
                    </p>
                    <div className="intro-buttons">
                        <button className="red"><p>Post a remote job</p></button>
                        <button className="white-red"><p>Hide this</p></button>
                    </div>
                </div>
            </th>
            <th className="trusted">
                <p>Truted by:</p>
                <img src={require('../../../assets/images/logowb.png')} alt="logowb" />
                <img src={require('../../../assets/images/logowb.png')} alt="logowb" />
                <img src={require('../../../assets/images/logowb.png')} alt="logowb" />
                <img src={require('../../../assets/images/logowb.png')} alt="logo" />
                <img src={require('../../../assets/images/logowb.png')} alt="logo" />

            </th>
            <th className="filter">
                <div className="filter-select">
                    <img src={require('../../../assets/images/logo.png')} alt="logo" />
                    <select>
                        <option>Search</option>
                    </select>
                    <select>
                        <option>Location</option>
                    </select>
                    <select>
                        <option>Salary</option>
                    </select>
                    <select>
                        <option>Benefits</option>
                    </select>
                </div>
                <div className="filter-sort">
                    <select></select>
                </div>
            </th>
            <th className="categories">
                <div>
                    <img src={require('../../../assets/images/logo.png')} alt="logo" />
                    <p>Engineer</p>
                </div>
                <div>
                    <img src={require('../../../assets/images/logo.png')} alt="logo" />
                    <p>Executive</p>
                </div>
                <div>
                    <img src={require('../../../assets/images/logo.png')} alt="logo" />
                    <p>Senior</p>
                </div>
                <div>
                    <img src={require('../../../assets/images/logo.png')} alt="logo" />
                    <p>Developer</p>
                </div>
                <div>
                    <img src={require('../../../assets/images/logo.png')} alt="logo" />
                    <p>Finance</p>
                </div>
                <div>
                    <img src={require('../../../assets/images/logo.png')} alt="logo" />
                    <p>Sys Admin</p>
                </div>
            </th>
        </tr>

    )
}

export default Search
