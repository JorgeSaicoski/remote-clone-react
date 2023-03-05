import React from "react";

const Job = ({jobs}) =>{
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return `${diffDays}d`;
    }

    const locationsListeded= (job) =>{
        let locations = job.location
        const jobLocations = []
        locations.forEach((local)=> {
            jobLocations.push(<li key={local}>{local}</li>)
        })
        if (job.salary){
            jobLocations.push(<li key={job.salary}>{job.salary}</li>)
        }
        return <ul className="job-card-description-locations">{jobLocations}</ul>
    }

    const requerimentListened = (requirement) =>{
        const jobRequeriments = []
        requirement.forEach((req)=> {
            jobRequeriments.push(<li key={req}>{req}</li>)
        })
        return <ul className="job-card-requirements-requirement">{jobRequeriments}</ul>
    }

    return(
        <tbody className="job-container">
        {jobs.map((job)=>{
            return(
                <tr key={job.id} className={`${job.color} job-card`}>
                    <td className="job-card-logo">
                        {/* {<img src="job.image">} */}
                        <img src={require('../../../assets/images/logo.png')} alt="logo" />
                    </td>
                    <td className="job-card-description">
                        <h2>{job.title}{
                            job.verified? <span><p>VERIFIED</p></span>:null
                        }</h2>
                        <h3>{job.description}{
                            job.extra?
                                job.extra === "new"?
                                    <p>NEW</p>:
                                    <p>HOT</p>
                                :
                                null
                        }</h3>
                        {
                            job.location? locationsListeded(job):null
                        }
                    </td>
                    <td className="job-card-requeriments">
                        {
                            job.requirements?
                                requerimentListened(job.requirements)
                                :
                                null
                        }
                    </td>
                    <td className="job-card-days">{formatDate(job.created_at)}</td>
                    <td className="job-card-button"><button>Apply</button></td>
                </tr>
            )
        })}
        </tbody>
    )
}

export default Job