import React from 'react';
import './Newsvitandobl.css';

class Newsvitandobl extends React.Component {
  constructor() {
    super();
    this.state = {
    newsvitandobl:[],
	  isLoading: false
    };
  }

  componentDidMount() {
	this.setState({ isLoading: true })
    fetch('/newsvitandobl')
      .then(res => res.json())
      .then(newsvitandobl => this.setState({newsvitandobl, isLoading: false}
      ));
  }		

	render(){	 
	
  const {isLoading}= this.state;
  
  return (
    
      <aside className="ColumnRight_news2">
        <h4>Новости Витебска и области:</h4>

        <br />
        {isLoading && <p>Загружаю...</p>}	

        {this.state.newsvitandobl.map(a =>
                  <p>{a.nvo} </p>
                  )}	  
        
        <br />
      </aside>
    
  );
  }
}

export default Newsvitandobl;

		