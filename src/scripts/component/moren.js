import React from 'react';

class Moren extends React.Component {
  constructor (props) {
    super(props)
    
  }
  
  render() {
	return (
		<div className="box">
				<img src="" alt=""/>
				<p>asdsad</p>	
		</div>
	)	
  }

  componentDidMount({
	fetch("/students.json")
	.then(
	    function(response){
	        console.log(response.headers.get('Content-Type'));
	        console.log(response.headers.get('Date'));
	        console.log(response.status);
	        console.log(response.statusText);
	        console.log(response.type);
	        console.log(response.url);
	    }
)

  })
}


export default Moren;