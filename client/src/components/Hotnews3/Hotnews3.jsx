import React from 'react';

import News3 from '../News3/News3';
import Newskorotko from '../Newskorotko/Newskorotko';
import Newsvitandobl from '../Newsvitandobl/Newsvitandobl';


class Hotnews3 extends React.Component {
	render(){	
	
  return (
    <div>        
          <News3/>;             
          <Newskorotko />;          
          <Newsvitandobl />;   
  </div>
  );
  }
}

export default Hotnews3;