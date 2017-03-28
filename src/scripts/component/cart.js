import React from 'react';

class Cart extends React.Component {
  constructor (props) {
    super(props)
    
  }
  
  render() {
	return (
		<div className="m-cart">
			<div className="swiper">
				购物车
			</div>
			<ul>
				<li>
					<i></i>
					<b></b>
				</li>
				<li>
					<i></i>
					<b></b>
				</li>
			</ul>
		</div>
	)	
  }
}

export default Cart;