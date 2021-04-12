import React, { useState, useEffect } from 'react'
import './Footer.css'

const Footer =()=> {
	
  const [footer, setFooter] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(!loading)
     fetch('/footer')
      .then(res => res.json())
      .then((footer) => setFooter(footer))
      .then((loading) => setLoading(loading))
  }, [])  

  return (
    <div>      
      {loading && <p>Загружаю...</p>}
      {footer.map(footer =>{
                  return (
                    <footer>
                    <span className="left">
                    {footer.allright}</span>
                  <span className="right">{footer.soc}
                    <a href={footer.facebook}target="blank"><img src={footer.imgfb} alt="facebook" title="facebook" /></a>
                    <a href={footer.vk} target="blank"><img src={footer.imgvk} alt="vk" title="vk" /> </a>
                    <a href={footer.instagram}target="blank"><img src={footer.imginst} alt="instagram" title="instagram" /> </a>
                  </span>
                  </footer>
                  ) }
                  )}  
       </div>
  );  
}

export default Footer;