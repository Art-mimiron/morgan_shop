import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions/actions'

import categoryFilter from '../../selectors/categoryFilterSelector'

import arrow from '../../img/Nav_arrow.png'

const ProductList = ({products, cart, renderCount, showMore, scrollArrow, buyItem, removeItem, sortProducts, sort}) => {
	
	return (
		<div className='Product' >
			<button className={scrollArrow === 'top' ? "Product-Scroll" : "Product-Scroll Product-Scroll_scroll "}
			onClick={scrollArrow === 'top' ? () => window.scrollTo(0, 0) : () => window.scrollTo(0, document.documentElement.scrollHeight)}>
				<img src={arrow} alt="" className="Product-Arrow"/>
				<span className="Product-Nav">{scrollArrow === 'top' ? 'Top' : 'Scroll'}</span>
			</button>
			<div className="Product-Sort">
				Sort by:
					<select 
					name="sort" 
					id="productSort"
					className="Product-Filter"
					defaultValue={sort}
					onChange={(e) => sortProducts(e.target.value)}>
						<option value="Newness">Newness</option>
						<option value="Hight_price">Price hight to low</option>
						<option value="Low_price">Price low to hight</option>
					</select>
			</div>
			<ul className='Product-List'>
				{products.slice(0, renderCount).map((item) => {
					return(
						<li className="Product-Item" key={item.id}>
							<img src={'https://morgan-shop.herokuapp.com'+item.image} alt={item.alias} className="Product-Picture"/>
							<div className="Product-Description">
								<div className="Product-Name">{item.name}</div>
								<div className="Product-Price">£{item.price}.00</div>
							</div>
							<button 
							className={cart.cart.some(elem => elem.id === item.id) ? 
							'Product-Btn Product-Btn_remove' : 
							'Product-Btn'}
							onClick={cart.cart.some(elem => elem.id === item.id) ? 
							() => {removeItem(item.id)} : 
							() => {buyItem(item)}}></button>
						</li>
					)
				})}
			</ul>
			{products.length <= renderCount ? 
				null
				:
				<button 
				onClick={() => {
					showMore(renderCount);
					setTimeout(()=>{window.scrollTo(0, document.documentElement.scrollHeight)},80)
				}} 
				className='Product-Loader'>
					Show more
				</button> }
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		products: categoryFilter(state),
		renderCount: state.productItems.renderSize,
		sort: state.productItems.sortType,
		cart: state.cart,
		scrollArrow: state.productItems.scrollArrow
	}
}

export default connect(mapStateToProps, actions)(ProductList);