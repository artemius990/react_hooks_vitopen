import React, { useState, useEffect } from 'react'
import './Center.css'
import { NavLink } from "react-router-dom"

const Center = () => {

  const [center, setCenter] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(!loading)
    fetch('/center')
      .then(res => res.json())
      .then((center) => setCenter(center))
      .then((loading) => setLoading(loading))
  }, [])

  return (
    <div>
      <div className="clear">
        {center.map(center => {
          return (
            <center>
              <div className="main2_soc_block_in">
                {loading && <p>Загружаю...</p>}
                <h3>{center.title}</h3>
                <p>{center.desc}</p>
                <NavLink to="/Showplaces" title="направления и достопримечательности" className="nav">подробнее
                        </NavLink>
              </div>
            </center>
          )
        }
        )}

      </div>
    </div>
  )
}

export default Center






