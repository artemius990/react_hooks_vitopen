import React from 'react';
import './Sport.css';


class Sport extends React.Component {
  constructor() {
    super();
    this.state = {
    sport:[],
    rez:[],
	  isLoading: false
    };
  }

  componentDidMount() {
	this.setState({ isLoading: true })
    fetch('/sport')
      .then(res => res.json())
      .then(sport => this.setState({sport, isLoading: false}
      ));
    fetch('/rez')
      .then(res => res.json())
      .then(rez => this.setState({rez, isLoading: false}
      ));
  }		

	render(){
		
  const {isLoading}= this.state;
  
    return (

    <div className="container-fluid">
      {isLoading && <p>Загружаю...</p>}
      {this.state.sport.map(dbsport =>{
      return (
      <div>
        <div className="row">

          <div className="col-xl-8 col-md-8 col-8">
            <div className="row">
              <div className="col-xl-12 col-md-12 col-12">
                <div className="h-3 h-md-3 h-xl-3">

                  <h1 className="zag_sp">Новости спорта</h1>
                  <div><img src={dbsport.img} alt="" className="img_spnews" /></div>
                  <div className="pre_sp">
                    <p>{dbsport.sn}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-xl-4 col-md-4 col-4">
            <div className="row">

              <div className="col-xl-12 col-md-12 col-12">
                <div className="h-2 h-md-2 h-xl-2">
                  <h4>Результаты:</h4>
                  <br />

                  {this.state.rez.map(a =>{
                  return (
                  <div>
                    {isLoading && <p>Загружаю...</p>}
                    <p>{a.r} </p>
                  </div>
                  ) }
                  )}


                </div>
              </div>

              <div className="col-xl-12 col-md-12 col-12">
                <div className="h-1 h-md-1 h-xl-1">
                  <h4>Скоро:</h4>
                  <marquee direction="left" scrollamount="4">{dbsport.soon}</marquee>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12 col-md-12 col-12">
            <div className="h-1 h-md-1 h-xl-1">
              <h5>LIVE</h5>
              <marquee scrollamount="4">{dbsport.live}</marquee>
            </div>
          </div>
        </div>
      </div>
      ) }
      )}


    </div>
  );
	}
}

export default Sport;

