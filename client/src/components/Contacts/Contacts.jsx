import React from 'react';
import './Contacts.css';

class Contacts extends React.Component {
	
	constructor() {
    super();
    this.state = {     
	  contacts:[],
	  isLoading: false
    };
  }

  componentDidMount() {
	this.setState({ isLoading: true })
    fetch('/contacts')
      .then(res => res.json())
      .then(contacts => this.setState({contacts, isLoading: false}
      ));
  }	
		
	render(){
    
	const {isLoading}= this.state;
	
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-md-12 col-12">
            <div className="hcon-2 hcon-md-2 hcon-xl-2">
            
              <h1>Cвязаться с нами:</h1>           
              <br />
             {isLoading && <p>Загружаю...</p>}

              {this.state.contacts.map(a =>{
              return (
              <div>               
                <p>{a.mail} </p>
              <p>{a.email} </p>
              <p>{a.phone} </p>
              </div>              
              ) }
              )}

              
            </div>
          </div>
        </div>
      </div>

    </div>
  );
  }
}

export default Contacts;


