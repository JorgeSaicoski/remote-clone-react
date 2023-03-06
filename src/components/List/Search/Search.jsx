import React from "react";

const Search = () => {
    return(
        <tr className="table-header">
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
        </tr>

    )
}

export default Search
