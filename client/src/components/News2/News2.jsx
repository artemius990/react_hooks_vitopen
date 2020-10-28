import React from 'react';
import {NavLink} from "react-router-dom";
import './News2.css';

class News2 extends React.Component {
  constructor() {
    super();
    this.state = {
    two: [],
	  news:[],
	  isLoading: false
    };
  }

  componentDidMount() {
	this.setState({ isLoading: true })
    fetch('/two')
      .then(res => res.json())
      .then(two => this.setState({two, isLoading: false}
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

        {this.state.two.map(news =>{
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

              <NavLink to={newsother.link3} title="посмотреть статью" className="a_news">{newsother.titlelink3}
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

export default News2;


