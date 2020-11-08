import React, { useState, useEffect } from 'react'
import './Aboutus.css'

function Aboutus() {
  
  const [aboutus, setAboutus] = useState([])
  const [loading, setLoading] = useState(false) 

  useEffect(() => {
    setLoading(!loading)
    fetch('/aboutus')
      .then(res => res.json())
      .then((aboutus) => setAboutus(aboutus))
      .then((loading) => setLoading(loading))
  }, [])

  return (
    <div>
      <center>
        <article className="about_us">
          {aboutus.map((a) => (
            <h1 key={a.id}>{a.title}</h1>
          ))}

          <div>
            {aboutus.map((a) => (
              <img key={a.id} src={a.img} alt="" className="img_aboutus" />
            ))}
          </div>
          {loading && <p>Загружаю...</p>}
          
          <div>
            <br />
            {aboutus.map((a) => (
              <p>{a.ab1} </p>
            ))}
            <br />
            {aboutus.map((a) => (
              <p>{a.ab2} </p>
            ))}
            <br />

            {aboutus.map((a) => (
              <p>{a.ab3} </p>
            ))}
            <br />

            {aboutus.map((a) => (
              <p>{a.ab4} </p>
            ))}
            <br />

            {aboutus.map((a) => (
              <p>{a.ab5} </p>
            ))}
            <br />

            {aboutus.map((a) => (
              <p>{a.ab6} </p>
            ))}
          </div>
        </article>
      </center>
    </div>
  )
}

export default Aboutus

 
