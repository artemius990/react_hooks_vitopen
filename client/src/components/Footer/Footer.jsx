import React from 'react';
import './Footer.css'


class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
    footer:[],
	  isLoading: false
    };
  }

  componentDidMount() {
	this.setState({ isLoading: true })
    fetch('/footer')
      .then(res => res.json())
      .then(footer => this.setState({footer, isLoading: false}
      ));
  }		



	render(){
	
  const {isLoading}= this.state;
  
  return (
    <div>
      
      {isLoading && <p>Загружаю...</p>}
      {this.state.footer.map(footer =>{
                  return (
                    <footer>
                    <span className="left">
                    {footer.allright}</span>
                  <span className="right">{footer.soc}
                    <a href={footer.facebook}target="blank"><img src={footer.imgfb} alt="facebook" title="facebook" /></a>
                    <a href={footer.vk} target="blank"><img src={footer.imgvk} alt="vk" title="vk" /> </a>
                    <a href={footer.instagram}target="blank"><img src={footer.imginst} alt="instagram" title="instagram" /> </a>
                  </span>
                  </footer>
                  ) }
                  )}       
      
    </div>
  );
  }
}

export default Footer;