import React from 'react';
import './Threenews.css';
import {NavLink} from "react-router-dom";


class Threenews extends React.Component {
    constructor() {
        super();
        this.state = {
        threenews:[],
        isLoading: false
        };
      }
    
      componentDidMount() {
        this.setState({ isLoading: true })
        fetch('/threenews')
          .then(res => res.json())
          .then(threenews => this.setState({threenews, isLoading: false}
          ));
      }		

	render(){
	
    const {isLoading}= this.state;
	
return (
<div>
    {isLoading && <p>Загружаю...</p>}
    {this.state.threenews.map(three =>{
    return (
    <div>
        <div className="wrapper">
            <div className="articles">

                <article className="hotnews">
                    <img src={three.img1} alt="Изображение" title="Изображение" />
                    <h2>{three.title1}</h2>

                    <p>{three.anons1}
                    </p>
                    <NavLink to={three.link1} title="посмотреть статью">Читать далее</NavLink>
                </article>

                <article className="hotnews">
                    <img src={three.img2} alt="Изображение" title="Изображение" />
                    <h2>{three.title2}</h2>

                    <p>{three.anons2}
                    </p>
                    <NavLink to={three.link2} title="посмотреть статью">Читать далее</NavLink>
                </article>

                <article className="hotnews">
                    <img src={three.img3} alt="Изображение" title="Изображение" />
                    <h2>{three.title3}</h2>

                    <p>{three.anons3}
                    </p>
                    <NavLink to={three.link3} title="посмотреть статью">Читать далее</NavLink>
                </article>
            </div>
        </div>
    </div>
    ) }
    )}


</div>
);
}
}

export default Threenews;