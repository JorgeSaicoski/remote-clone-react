import React from "react";
import Job from "./Job/Job"
import data from "../../services/data.json"

const List = () => {
    return(
        <table>
            <thead></thead>
            <Job jobs={data}></Job>
        </table>
    )
}

export default List

