import React, { useState, useEffect } from 'react'
import {NavLink} from "react-router-dom";

const Jobtransportaboutvit =()=>{
	
  const [job6, setJob6] = useState([])
  const [transport6, setTransport6] = useState([])
  const [aboutvit6, setAboutvit6] = useState([])  
  const [loading, setLoading] = useState(false)	

  useEffect(() => {
    setLoading(!loading)
     fetch('/job6')
      .then(res => res.json())
      .then(job6 => setJob6(job6))
      .then(loading => setLoading(loading))	  
  }, [])  
  
  useEffect(() => {
    setLoading(!loading)
     fetch('/transport6')
      .then(res => res.json())
      .then(transport6 => setTransport6(transport6))
      .then(loading => setLoading(loading))	  
  }, [])  
  
  useEffect(() => {
    setLoading(!loading)
     fetch('/aboutvit6')
      .then(res => res.json())
      .then(aboutvit6 => setAboutvit6(aboutvit6))
      .then(loading => setLoading(loading))	  
  }, [])  	
	
  return (
    <div>
	 {loading && <p>Загружаю...</p>}
      <div className="wrapper">
        <div className="articles">

          <article className="six">
            {job6.map(job =>
            <img src={job.img} alt={job.title} title={job.title} />
            )}
            {job6.map(job =>
            <h2>{job.title}</h2>
            )}
            {job6.map(job =>
            <p>{job.main}</p>
            )}
            {job6.map(job =>
            <NavLink to={job.link1} title="посмотреть статью">
              Подробнее
            </NavLink>
            )}
          </article>

          <article className="six">
            {transport6.map(transport =>
            <img src={transport.img} alt={transport.title} title={transport.title} />
            )}
            {transport6.map(transport =>
            <h2>{transport.title}</h2>
            )}
            {transport6.map(transport =>
            <p>{transport.main}</p>
            )}
            {transport6.map(transport =>
            <NavLink to={transport.link1} title="посмотреть статью">
              Подробнее
            </NavLink>
            )}
          </article>

          <article className="six">
            {aboutvit6.map(aboutvit =>
            <img src={aboutvit.img} alt={aboutvit.title} title={aboutvit.title} />
            )}
            {aboutvit6.map(aboutvit =>
            <h2>{aboutvit.title}</h2>
            )}
            {aboutvit6.map(aboutvit =>
            <p>{aboutvit.main}</p>
            )}
            {aboutvit6.map(aboutvit =>
            <NavLink to={aboutvit.link1} title="посмотреть статью">
             Подробнее
            </NavLink>
            )}
          </article>
		  
        </div>
      </div>
    </div>
  );    
}

export default Jobtransportaboutvit;


