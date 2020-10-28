import React from 'react';
import {NavLink} from "react-router-dom";
import './News3.css';

class News3 extends React.Component {
  constructor() {
    super();
    this.state = {
    three: [],
	  news:[],
	  isLoading: false
    };
  }

  componentDidMount() {
	this.setState({ isLoading: true })
    fetch('/three')
      .then(res => res.json())
      .then(three => this.setState({three, isLoading: false}
      ));
    fetch('/news')
      .then(res => res.json())
      .then(news => this.setState({news, isLoading: false}
      ));

  }		

	render(){
	
  const {isLoading}= this.state;
		
  return (
    <div>
      {isLoading && <p>Загружаю...</p>}
      <article className="news">

        {this.state.three.map(news =>{
        return (
        <div>
          <h1>{news.title}</h1>
          <div><img src={news.img} alt="" className="img_news" /></div>
          <div>

            {news.main}

            <br />
            <br />
            <br />
            <h3>Читайте также:</h3>
            {this.state.news.map(newsother =>{
            return (
            <div>
              <NavLink to={newsother.link1} title="посмотреть статью" className="a_news">{newsother.titlelink2}
              </NavLink>
              <br />

              <NavLink to={newsother.link2} title="посмотреть статью" className="a_news">{newsother.titlelink3}
              </NavLink>
            </div>
            ) }
            )}
          </div>
        </div>
        ) }
        )}

      </article>

    </div>
  );
  }
}

export default News3;


