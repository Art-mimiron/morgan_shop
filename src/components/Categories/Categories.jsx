import React from 'react'
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';

import * as actions from '../../actions/actions'

function Categories({category, categoryFilter}) {
	return (
			<ul className='Categories' id='Categories'>
				{category.IsLoading ? <div>zdarova banditi</div> : category.Categories.map((item) => {
					return (
						<li className='Categories-Link' 
						key={item.id}>
								<NavLink 
								to={`/${item.alias}`} 
								className='Categories-Text'
								onClick={() => {categoryFilter(item.id)}}>
									<span className='Categories-Name'>{item.title}</span>
									<img src={'https://morgan-shop.herokuapp.com'+item.image} alt={item.alias} className='Categories-Picture'/>
								</NavLink>
						</li>
					)
				})}
			</ul>  
	)
}

const mapStateToProps = (state) => ({
	category: state.productCategories
  })

export default connect(mapStateToProps, actions)(Categories);