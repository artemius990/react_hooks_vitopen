import React from 'react';

import News1 from '../News1/News1';
import Newskorotko from '../Newskorotko/Newskorotko';
import Newsvitandobl from '../Newsvitandobl/Newsvitandobl';

class Hotnews1 extends React.Component {
	
	render(){	
	
  return (
    <div >
     
          <News1/>;             
          <Newskorotko />;          
          <Newsvitandobl />;  
             
    </div>
  );
  }
}

export default Hotnews1;

