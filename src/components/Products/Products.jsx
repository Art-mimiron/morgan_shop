import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions/actions'

import categoryFilter from '../../selectors/categoryFilterSelector'

const ProductList = ({products, cart, renderCount, showMore, buyItem, removeItem}) => {
	return (
		<>
			<ul className='Product'>
				{products.slice(0, renderCount).map((item) => {
					return(
						<li className="Product-Item" key={item.id}>
							<img src={item.image} alt={item.alias} className="Product-Picture"/>
							<div className="Product-Description">
								<div className="Product-Name">{item.name}</div>
								<div className="Product-Price">${item.price}</div>
							</div>
							<button 
							className='Product-Btn'
							onClick={cart.forEach(elem => console.log(elem))? 
							() => {removeItem(item.id)} : 
							() => {buyItem(item)}}></button>
						</li>
					)
				})}
			</ul>
			<button onClick={() => showMore(renderCount)} className='Product-Loader'>Show more</button>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		products: categoryFilter(state),
		renderCount: state.productItems.renderSize,
		cart: state.cart
	}
}

export default connect(mapStateToProps, actions)(ProductList);