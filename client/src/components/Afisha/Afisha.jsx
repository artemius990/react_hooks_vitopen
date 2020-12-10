import React, { useState, useEffect } from 'react';
import './Afisha.css';


const Afisha = () => {

  const [afisha, setAfisha] = useState([])
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(!loading)
    fetch('/afisha')
      .then((res) => res.json())
      .then((afisha) => setAfisha(afisha))
      .then((loading) => setLoading(loading))

  }, [])

  useEffect(() => {

    fetch('/events')
      .then((res) => res.json())
      .then((events) => setEvents(events))
      .then((loading) => setLoading(loading))
  }, [])

  return (
    <div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-8 col-md-8 col-8">

            <div className="row">
              <div className="col-xl-12 col-md-12 col-12">
                <div className="h-2 h-md-2 h-xl-2">
                  <h1 className="af_h1">Cмотрите в кинотеатрах:</h1>

                  {afisha.map(afisha => {
                    return (
                      <div>
                        {loading && <p>Загружаю...</p>}

                        <img src={afisha.img1} alt="" align="left" className="afisha_img" />
                        <h3 className="af_h3">{afisha.teatr1}</h3>
                        <p className="af_f">
                          <strong> {afisha.af} </strong>
                          <br />
                          <br />
                          {afisha.film}
                          <br />
                          <br />
                          <strong>Cеанс: </strong>
                          {afisha.seans}
                          <br />
                          <br />
                          <strong>{afisha.pricetitle} </strong>
                          {afisha.price}
                          <br />
                          <br />
                          {afisha.aboutfilm}
                          <br />
                          <strong>{afisha.mainrole} </strong> {afisha.roles}
                        </p>
                      </div>
                    )
                  }
                  )}

                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12 col-md-12 col-12">
                <div className="h-2 h-md-2 h-xl-2">
                  <h1 className="af_h1">Cмотрите в кинотеатрах:</h1>

                  {afisha.map(afisha => {
                    return (
                      <div>
                        {/* {loading && <p>Загружаю...</p>} */}
                        <img src={afisha.img2} alt="" align="left" className="afisha_img" />
                        <h3 className="af_h3">{afisha.teatr2}</h3>
                        <p className="af_f">
                          <strong> {afisha.af} </strong>
                          <br />
                          <br />
                          {afisha.film}
                          <br />
                          <br />
                          <strong>Cеанс: </strong>
                          {afisha.seans}
                          <br />
                          <br />
                          <strong>{afisha.pricetitle} </strong>
                          {afisha.price}
                          <br />
                          <br />
                          {afisha.aboutfilm}
                          <br />
                          <strong>{afisha.mainrole} </strong> {afisha.roles}
                        </p>
                      </div>
                    )
                  }
                  )}

                </div>
              </div>
            </div>

          </div>

          <div className="col-xl-4 col-md-4 col-4">
            <div className="row">
              <div className="col-xl-12 col-md-12 col-12">
                <div className="h-4 h-md-4 h-xl-4">
                  <h4>Выставки, театр и прочие мероприятия:</h4>
                  <br />

                  {events.map(a =>
                    <p>{a.one} </p>
                  )}

                  <br />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

}

export default Afisha;


// class Afisha extends React.Component {

	// constructor() {
    // super();
    // this.state = {
    // events: [],
    // afisha: [],
	  // isLoading: false
    // };
  // }

  // componentDidMount() {
  // this.setState({ isLoading: true })
  // fetch('/afisha')
      // .then(res => res.json())
      // .then(afisha => this.setState({afisha, isLoading: false}
      // ));

    // fetch('/events')
      // .then(res => res.json())
      // .then(events => this.setState({events, isLoading: false}
      // ));
  // }	

	// render(){
  // const {isLoading}= this.state; 

  // return (
    // <div>      

      // <div className="container-fluid">
        // <div className="row">
          // <div className="col-xl-8 col-md-8 col-8">

            // <div className="row">
              // <div className="col-xl-12 col-md-12 col-12">
                // <div className="h-2 h-md-2 h-xl-2">
                  // <h1 className="af_h1">Cмотрите в кинотеатрах:</h1>

                  // {this.state.afisha.map(afisha =>{
                  // return (
                  // <div>
                    // {isLoading && <p>Загружаю...</p>}
                    // <img src={afisha.img1} alt="" align="left" className="afisha_img" />
                    // <h3 className="af_h3">{afisha.teatr1}</h3>
                    // <p className="af_f">
                      // <strong> {afisha.af} </strong>
                      // <br />
                      // <br />
                      // {afisha.film}
                      // <br />
                      // <br />
                      // <strong>Cеанс: </strong>
                      // {afisha.seans}
                      // <br />
                      // <br />
                      // <strong>{afisha.pricetitle} </strong>
                      // {afisha.price}
                      // <br />
                      // <br />
                      // {afisha.aboutfilm}
                      // <br />
                      // <strong>{afisha.mainrole} </strong> {afisha.roles}
                    // </p>
                  // </div>
                  // ) }
                  // )}

                // </div>
              // </div>
            // </div>

            // <div className="row">
              // <div className="col-xl-12 col-md-12 col-12">
                // <div className="h-2 h-md-2 h-xl-2">
                  // <h1 className="af_h1">Cмотрите в кинотеатрах:</h1>

                  // {this.state.afisha.map(afisha =>{
                  // return (
                  // <div>
                    // {isLoading && <p>Загружаю...</p>}
                    // <img src={afisha.img2} alt="" align="left" className="afisha_img" />
                    // <h3 className="af_h3">{afisha.teatr2}</h3>
                    // <p className="af_f">
                      // <strong> {afisha.af} </strong>
                      // <br />
                      // <br />
                      // {afisha.film}
                      // <br />
                      // <br />
                      // <strong>Cеанс: </strong>
                      // {afisha.seans}
                      // <br />
                      // <br />
                      // <strong>{afisha.pricetitle} </strong>
                      // {afisha.price}
                      // <br />
                      // <br />
                      // {afisha.aboutfilm}
                      // <br />
                      // <strong>{afisha.mainrole} </strong> {afisha.roles}
                    // </p>
                  // </div>
                  // ) }
                  // )}

                // </div>
              // </div>
            // </div>

          // </div>

          // <div className="col-xl-4 col-md-4 col-4">
            // <div className="row">
              // <div className="col-xl-12 col-md-12 col-12">
                // <div className="h-4 h-md-4 h-xl-4">
                  // <h4>Выставки, театр и прочие мероприятия:</h4>
                  // <br />

                  // {this.state.events.map(a =>
                  // <p>{a.one} </p>
                  // )}

                  // <br />
                // </div>
              // </div>
            // </div>
          // </div>

        // </div>
      // </div>
    // </div>
  // );
  // }
// }

// export default Afisha;










