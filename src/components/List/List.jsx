import React from "react";
import Job from "./Job/Job"
import data from "../../services/data.json"
import Search from "./Search/Search";

const List = () => {
    return(
        <table>
            <thead><Search></Search></thead>
            <Job jobs={data}></Job>
        </table>
    )
}

export default List

