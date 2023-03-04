import React from "react";

const Job = ({jobs}) =>{
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return `${diffDays} days ago`;
    }

    const locationsListeded= (locations) =>{
        const jobLocations = []
        locations.forEach((local)=> {
            jobLocations.push(<li key={local}>{local}</li>)
        })
        return <ul className="jobCardDescriptionLocations">{jobLocations}</ul>
    }

    const requerimentListened = (requeriments) =>{
        const jobRequeriments = []
        requeriments.forEach((requeriment)=> {
            jobRequeriments.push(<li key={requeriment}>{requeriment}</li>)
        })
        return <ul className="jobCardDescriptionLocations">{jobRequeriments}</ul>
    }

    return(
        <tbody>
        {jobs.map((job)=>{
            return(
                <tr key={job.id} className={`${job.color} jobCard`}>
                    <td className="jobCardLogo">{/* {<img src="job.image">} */}</td>
                    <td className="jobCardDescription">
                        <h2>{job.title}{
                            job.verified? <span><p>VERIFIED</p></span>:null
                        }</h2>
                        <h3>{job.description}</h3>
                        {
                            job.location? locationsListeded(job.location):null
                        }
                    </td>
                    <td className="jobCardRequeriments">
                        {
                            job.requirements?
                                requerimentListened(job.requirements)
                                :
                                null
                        }
                    </td>
                    <td className="jobCardDays">{formatDate(job.created_at)}</td>
                    <td className="jobCardButton"><button>Apply</button></td>
                </tr>
            )
        })}
        </tbody>
    )
}

export default Job