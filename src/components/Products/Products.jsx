import React from 'react'
import {connect} from 'react-redux'

const ProductList = ({products}) => {
	return (
		<ul className='Product'>
			{products.Products.map((item) => {
				return(
					<li className="Product-Item" key={item.id}>
						<img src={item.image} alt={item.alias} className="Product-Picture"/>
						<div className="Product-Description">
							<div className="Product-Name">{item.name}</div>
							<div className="Product-Price">${item.price}</div>
						</div>
					</li>
				)
			})}
		</ul>
	)
}

const mapStateToProps = (state) => {
	return {
		products: state.productItems
	}
}

export default connect(mapStateToProps, null)(ProductList);