import React from 'react';


class Transport extends React.Component {
	render(){
  return (
    <div>
      <center>
        <marquee scrollamount="5">
          <p><b>Выберите тип транспорта:</b></p>
        </marquee>

        <span>
          <marquee scrollamount="6">
            <a href="https://vitebsk.btrans.by/avtobus" target="blank"><img src="images\autobus.png" alt="автобус"
                title="автобус" /></a>
            <a href="https://vitebsk.btrans.by/trollejbus" target="blank"><img src="images\troll.png" alt="троллейбус"
                title="троллейбус" /> </a>
            <a href="https://vitebsk.btrans.by/tramvaj" target="blank"><img src="images\tram.png" alt="трамвай"
                title="трамвай" /> </a>
          </marquee>
        </span>
      </center>

    </div>
  );
  }
}

export default Transport;