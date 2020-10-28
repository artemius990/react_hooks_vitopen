import React from 'react';
import './Souvenirs.css';

class Souvenirs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sou:this.props.sou.pr,
      img:this.props.sou.imgpr
    };
  }

  showSou1 =()=>{
    this.setState({
      sou:this.props.sou.pr,
      img:this.props.sou.imgpr
    });	    
  }


  showSou2 =()=>{
    this.setState({
      sou:this.props.sou.rat,
      img:this.props.sou.imgrat
    });	    
  }

  showSou3 =()=>{
    this.setState({
      sou:this.props.sou.shoko,
      img:this.props.sou.imgsho
    });	    
  }

  showSou4 =()=>{
    this.setState({
      sou:this.props.sou.syrki,
      img:this.props.sou.imgsyr
    });	    
  }

  showSou5 =()=>{
    this.setState({
      sou:this.props.sou.trub,
      img:this.props.sou.imgtr
    });	    
  }

  showSou6 =()=>{
    this.setState({
      sou:this.props.sou.black,
      img:this.props.sou.imgbl
    });	    
  }

	render(){
    
  return (
    <div>
      <center>
        <p><b> Что привезти из Витебска </b></p>
      </center>

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-7 col-md-7 col-7">
            <div className="hv-2 hv-md-2 hv-xl-2">
              <div> <img src={this.state.img} className="photo" alt="" /></div>
            </div>
          </div>
          <div className="col-xl-5 col-md-5 col-5">
            <div className="hv-2 hv-md-2 hv-xl-2">
              <h4>Подробнее</h4>
              <p>{this.state.sou}</p>
              <div className="ezhe">
                <p><b>Ещё:</b></p>
              </div>
              <button type="button" onClick={this.showSou2}>Вафли "Ратуша"</button>
              <br /><br />
              <button type="button" onClick={this.showSou3}>Шоколадница</button>
              <br /><br />
              <button type="button" onClick={this.showSou4}>Глазированные сырки</button>
              <br /><br />
              <button type="button" onClick={this.showSou5}>Вафельные рулетики</button>
              <br /><br />
              <button type="button" onClick={this.showSou6}>Витьба "Black"</button>
              <br /><br />
              <button type="button" onClick={this.showSou1}>В начало</button>

            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-md-12 col-12">
            <div className="h-1 h-md-1 h-xl-1">
              <h4>Где купить</h4>
              <p>Адреса магазинов: Корона
                Витебск, Бешенковичское шоссе, 3/1, <br /> Евроопт г. Витебск, пр-т Строителей, 15-1,<br /> Торговый
                центр "Ника" г.Витебск, ул.Титова, 136Б
              </p>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
  }
}

export default Souvenirs;








