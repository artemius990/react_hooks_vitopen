import React from 'react';
import {NavLink} from "react-router-dom";

class Jobtransportaboutvit extends React.Component {
	constructor() {
	  super();
	  this.state = {
	    job6: [],
	    transport6: [],
	    aboutvit6: [],	    
	    isLoading: false
	  };
	}

	componentDidMount() {
	  this.setState({
	    isLoading: true
	  })
	  fetch('/job6')
	    .then(res => res.json())
	    .then(job6 => this.setState({
	      job6,
	      isLoading: false
	    }));
	  fetch('/transport6')
	    .then(res => res.json())
	    .then(transport6 => this.setState({
	      transport6,
	      isLoading: false
	    }));
	  fetch('/aboutvit6')
	    .then(res => res.json())
	    .then(aboutvit6 => this.setState({
	      aboutvit6,
	      isLoading: false
	    }));	  
	}	
	
	render(){
	
  return (
    <div>
      <div className="wrapper">
        <div className="articles">

          <article className="six">

            {this.state.job6.map(job =>
            <img src={job.img} alt={job.title} title={job.title} />
            )}


            {this.state.job6.map(job =>
            <h2>{job.title}</h2>
            )}


            {this.state.job6.map(job =>
            <p>{job.main}</p>
            )}


            {this.state.job6.map(job =>
            <NavLink to={job.link1} title="посмотреть статью">
              Подробнее
            </NavLink>
            )}

          </article>



          <article className="six">

            {this.state.transport6.map(transport =>
            <img src={transport.img} alt={transport.title} title={transport.title} />

            )}


            {this.state.transport6.map(transport =>
            <h2>{transport.title}</h2>
            )}

            {this.state.transport6.map(transport =>
            <p>{transport.main}</p>
            )}


            {this.state.transport6.map(transport =>
            <NavLink to={transport.link1} title="посмотреть статью">
              Подробнее
            </NavLink>
            )}

          </article>


          <article className="six">

            {this.state.aboutvit6.map(aboutvit =>
            <img src={aboutvit.img} alt={aboutvit.title} title={aboutvit.title} />
            )}


            {this.state.aboutvit6.map(aboutvit =>
            <h2>{aboutvit.title}</h2>
            )}


            {this.state.aboutvit6.map(aboutvit =>
            <p>{aboutvit.main}</p>
            )}


            {this.state.aboutvit6.map(aboutvit =>
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
}

export default Jobtransportaboutvit;


