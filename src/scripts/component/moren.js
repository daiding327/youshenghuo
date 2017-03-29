import React from 'react';

class Moren extends React.Component {
  constructor (props) {
    super(props)
    this.state={
    	list:[]
    }
  }
  
  render() {
	return (
		<div className="box">
			{this.state.list} 
			
		</div>
	)	
  }

	componentDidMount(){
	  	fetch("./data/data.json")
		.then(response=>response.json())
		.then(res=>{
			var arr=[];
			for(var k in res.swiper){
				arr.push(<div className="small"><img src={res.swiper[k]} alt=""/><p>{res.tuijian[k].title}</p></div>)
			}
			this.setState({
				list:arr
			})
		})
		
	}
	
	  	
				

	
  
}


export default Moren;