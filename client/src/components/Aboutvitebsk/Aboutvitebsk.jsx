import React from 'react';
import './Aboutvitebsk.css'


class Aboutvitebsk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show:'',
      show2:'',
      show3:'',
      show4:'',
      show5:'',
    aboutvit: [],
    vitmain: [],
    isLoading: false
    };
  }

showNav =()=>{
 
  this.setState({show:Object.keys(this.props.abvit.events.dr).map(elem => {
    return (<div key={elem}><p>{this.props.abvit.events.dr[elem]} </p>
   
    </div> )
      })});
}

showNav3 =()=>{  

  this.setState({show2:Object.keys(this.props.abvit.events.lit).map(elem => {
    return (<div key={elem}><p>{this.props.abvit.events.lit[elem]} </p>
   
    </div> )
      })});
}

showNav5 =()=>{
	
  this.setState({show3:Object.keys(this.props.abvit.events.rus).map(elem => {
    return (<div key={elem}><p>{this.props.abvit.events.rus[elem]} </p>
   
    </div> )
      })});
}

showNav7 =()=>{
  
  this.setState({show4:Object.keys(this.props.abvit.events.sov).map(elem => {
    return (<div key={elem}><p>{this.props.abvit.events.sov[elem]} </p>
   
    </div> )
      })});
}

showNav9 =()=>{
  
  this.setState({show5:Object.keys(this.props.abvit.events.now).map(elem => {
    return (<div key={elem}><p>{this.props.abvit.events.now[elem]} </p>
   
    </div> )
      })});
}


showNav2 =()=>{
	this.setState({show:''});	
}

showNav4 =()=>{
	this.setState({show2:''});	
}

showNav6 =()=>{
	this.setState({show3:''});	
}

showNav8 =()=>{
	this.setState({show4:''});	
}

showNav10 =()=>{
	this.setState({show5:''});	
}



componentDidMount() {
  this.setState({ isLoading: true })
    fetch('/aboutvit')
      .then(res => res.json())
      .then(aboutvit => 
    this.setState({aboutvit,isLoading: false})	);
    fetch('/vitmain')
        .then(res => res.json())
        .then(vitmain => 
      this.setState({vitmain,isLoading: false})	);
  }  

  render() {    
    const {isLoading}= this.state;

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-8 col-md-8 col-8">
              <div className="row">
                <div className="col-xl-12 col-md-12 col-12">
                  <div className="h2-4 h2-md-4 h2-xl-4">
                    { this.state.aboutvit.map(a => <h1 className="zag_av">
                      {a.title}</h1>) }
                    {isLoading && <p>Загружаю...</p>}
                    <div>
                      {this.state.aboutvit.map(a =>

                      <img src={a.img} alt="" className="img_av" />
                      )}

                    </div>
                    <div className="vit">
                      {this.state.vitmain.map(a => {
                        return <div>{
                          a.vit.split("\\n").map(b => <p>{b}</p>)
                        }</div>
                      })}
                      {/* {abvit.vit} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-4 col-4">
              <div className="row">
                <div className="col-xl-12 col-md-12 col-12">
                  <div className="h2-4 h2-md-4 h2-xl-4">

                    {this.state.aboutvit.map(a =>

                    <h4>{a.eventstitle}</h4>
                    )}



                    <br />
                    <b>Древнерусский период</b>
                    <br />
                    <button type="button" onClick={this.showNav}>Показать </button>&nbsp;
                    <button type="button" onClick={this.showNav2}> Свернуть </button>
                    <p>{this.state.show}</p>

                    <b>Литовский период</b>
                    <br />
                    <button type="button" onClick={this.showNav3}>Показать </button>&nbsp;
                    <button type="button" onClick={this.showNav4}> Свернуть </button>
                    <p>{this.state.show2}</p>

                    <b>Российский период</b>
                    <br />
                    <button type="button" onClick={this.showNav5}>Показать </button>&nbsp;
                    <button type="button" onClick={this.showNav6}> Свернуть </button>
                    <p>{this.state.show3}</p>

                    <b>Советский период</b>
                    <br />
                    <button type="button" onClick={this.showNav7}>Показать </button>&nbsp;
                    <button type="button" onClick={this.showNav8}> Свернуть </button>
                    <p>{this.state.show4}</p>

                    <b>Современный период</b>
                    <br />
                    <button type="button" onClick={this.showNav9}>Показать </button>&nbsp;
                    <button type="button" onClick={this.showNav10}> Свернуть </button>
                    <p>{this.state.show5}</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default Aboutvitebsk;

