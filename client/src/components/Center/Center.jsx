import React from 'react';
import './Center.css';
import {NavLink} from "react-router-dom";


class Center extends React.Component {
  constructor() {
    super();
    this.state = {
    center:[],
	  isLoading: false
    };
  }

  componentDidMount() {
	this.setState({ isLoading: true })
    fetch('/center')
      .then(res => res.json())
      .then(center => this.setState({center, isLoading: false}
      ));
  }		

	render(){	
  const {isLoading}= this.state;
  
  return (
    <div>
      <div className="clear">
      {this.state.center.map(center =>{
                  return (
                    <center>
                    <div className="main2_soc_block_in">
                    {isLoading && <p>Загружаю...</p>}	
                      <h3>{center.title}</h3>
                      <p>{center.desc}</p>
                      <NavLink to="/Showplaces" title="направления и достопримечательности" className="nav">подробнее </NavLink>
                    </div>
                  </center>
                  ) }
                  )}       

      </div>
    </div>
  );
    }
}

export default Center;