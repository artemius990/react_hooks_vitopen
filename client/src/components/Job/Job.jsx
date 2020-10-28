import React from 'react';
import './Job.css';


class Job extends React.Component {
  constructor() {
    super();
    this.state = {
      job: [],
    };
  }

  componentDidMount() {
	  fetch('/job')
      .then(res => res.json())
      .then(job => this.setState({job}
      ));
  }		




	render(){
	//let job=this.props.job;
  return (
    <div>
      {this.state.job.map(job =>{
      return (
      <center>
        <p><b>{job.find}</b></p>

        <span>

          <a href="https://praca.by" target="blank"><img src={job.imgpraca} alt="praca.by" title="praca.by"
              className="job_img" /></a>

          <a href="https://jobs.tut.by" target="blank"><img src={job.imgtut} alt="jobs.tut.by" title="jobs.tut.by"
              className="job_img" /> </a>

          <a href="https://belmeta.com" target="blank"><img src={job.imgbelmeta} alt="belmeta.com" title="belmeta.com"
              className="job_img" /> </a>

          <a href="http://trudbox.by/jobs" target="blank"><img src={job.imgtrud} alt="trudbox.by" title="trudbox.by"
              className="job_img" /> </a>

          <a href="https://hh.ru" target="blank"><img src={job.imghh} alt="headhunter.ru" title="headhunter.ru"
              className="job_img" /> </a>

        </span>
        <p><b>{job.addr}</b></p>
      </center>
      ) }
      )}
    </div>
  );
  }
}

export default Job;