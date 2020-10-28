import React from 'react';
import './Showplaces.css';


class Showplaces extends React.Component {

  constructor(props){
    super();        
    this.state = {
      vit:[],
      imgpl:[],
      places: []      
    };
  }
  
   handleChange=(e)=>{
    this.setState({
      places:e.target.value                 
    })
  } 
  
  
  componentDidMount() {
    
      fetch('/imgpl')
        .then(res => res.json())
        .then(imgpl => this.setState({imgpl}
        ));

        fetch('/vit')
        .then(res => res.json())
        .then(vit => this.setState({vit}));
    }		
       
	render(){    
        
  return (
    <div>

      <center>
        <p><b> Узнайте больше о Витебске и Витебском регионе </b></p>
      </center>

      <p className="text">Выберите направление:</p>


      {this.state.vit.map(vit =>{
      return (
      <div>
        <select onChange={this.handleChange} className="course">

          <option value="">направление не выбрано:</option>
          <option value={vit.centrsh}>Витебск-Арт-центр М. Шагала</option>
          <option value={vit.sobor}>Витебск-Успенский собор</option>
          <option value={vit.sh}>Витебск-Дом-музей М. Шагала</option>
          <option value={vit.kruglik}>Витебск-Духовский Круглик</option>
          <option value={vit.amf}>Витебск-Летний Амфитеатр</option>
          <option value={vit.pob}>Витебск-Площадь Победы</option>
          <option value={vit.pocr}>Витебск-Свято-Покровский кафедральный собор</option>
          <option value={vit.mon}>Витебск-Свято-Духов женский монастырь</option>

          <option value={vit.zdrav}>Здравнево-усадьба И.Репина</option>
          <option value={vit.polock}>Полоцк-Софийский собор</option>
          <option value={vit.miory}>Миоры-костел Вознесения Девы Марии</option>
          <option value={vit.elna}>Ельня</option>
          <option value={vit.braslav}>Браслав-Браславские озера</option>
          <option value={vit.vidzy}>Видзы-Троицкий костел</option>
          <option value={vit.postavy}>Поставы</option>
          <option value={vit.kamai}>д.Камаи-Камайский костел</option>
          <option value={vit.glubokoe}>Глубокое</option>
          <option value={vit.mosar}>д.Мосар-белорусский Версаль</option>
          <option value={vit.bbz}>Березинский биосферный заповедник</option>
          <option value={vit.orsha}>Орша</option>


        </select>
      </div>
      ) }
      )}



      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-md-12 col-12">
            <div className="hs-2 hs-md-2 hs-xl-2">

              <p>{this.state.places}</p>

              {this.state.imgpl.map(places =>{
              return (
              <div>
                <img src={places.imgvitshcen} alt="" title="Арт-центр Марка Шагала" className="img_pl2" />

                <img src={places.imgvitch} alt="" title="Витебский Свято-Успенский кафедральный собор"
                  className="img_pl2" />

                <img src={places.imgvitsh} alt="" title="Дом-музей Марка Шагала" className="img_pl2" />

                <img src={places.imgvitkr} alt="" title="Духовский Круглик" className="img_pl2" />

                <img src={places.imgvitamf} alt="" title="Летний Амфитеатр" className="img_pl2" />

                <img src={places.imgvitpob} alt="" title="Площадь Победы в Витебске" className="img_pl2" />

                <img src={places.imgvitpoc} alt="" title="Свято-Покровский кафедральный собор Витебска"
                  className="img_pl2" />

                <img src={places.imgvitmon} alt="" title="Свято-Духов женский монастырь" className="img_pl2" />



                <img src={places.imgzdr} alt="" title="Здравнево" className="img_pl2" />

                <img src={places.imgpol} alt="" title="Cофийский Собор в Полоцке" className="img_pl2" />

                <img src={places.imgmiory} alt="" title="костел Вознесения Девы Марии в Миорах" className="img_pl2" />

                <img src={places.imgelna} alt="" title="Ельня" className="img_pl2" />

                <img src={places.imgbras} alt="" title="Браславские озера" className="img_pl2" />

                <img src={places.imgvidzy} alt="" title="Костел Рождества Девы Марии в Видзах" className="img_pl2" />

                <img src={places.imgpostavy} alt="" title="Поставы" className="img_pl2" />

                <img src={places.imgkamai} alt="" title="Камайский костел" className="img_pl2" />

                <img src={places.imgglub} alt="" title="Глубокое" className="img_pl2" />

                <img src={places.imgmosar} alt="" title="Мосар" className="img_pl2" />

                <img src={places.imgbbz} alt="" title="Березинский биосферный заповедник" className="img_pl2" />

                <img src={places.imgorsha} alt="" title="Орша" className="img_pl2" />
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

export default Showplaces;




