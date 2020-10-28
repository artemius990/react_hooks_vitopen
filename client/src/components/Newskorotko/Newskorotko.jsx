import React from 'react';
import './Newskorotko.css';

class Newskorotko extends React.Component {
  constructor() {
    super();
    this.state = {
    newskorotko:[],
	  isLoading: false
    };
  }

  componentDidMount() {
	this.setState({ isLoading: true })
    fetch('/newskorotko')
      .then(res => res.json())
      .then(newskorotko => this.setState({newskorotko, isLoading: false}
      ));
  }		

  
	render(){
  
  const {isLoading}= this.state;
  
  return (    
      <aside className="ColumnRight_news">
        <h4>Коротко:</h4>		
        <br />

        {isLoading && <p>Загружаю...</p>}	

        {this.state.newskorotko.map(a =>
                  <p>{a.nk} </p>
                  )}	  
        <br />
      </aside>    
  );
  }
}

export default Newskorotko;



