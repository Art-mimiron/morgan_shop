import React from 'react'
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';

import * as actions from '../../actions/actions'

function Categories({category, categoryFilter}) {
	return (
			<ul className='Categories'>
				{category.IsLoading ? <div>zdarova banditi</div> : category.Categories.map((item) => {
					return (
						<li className='Categories-Link' 
						style={{order: item.menuOrder}}
						key={item.id}>
								<NavLink 
								to={`/${item.alias}`} 
								className='Categories-Text'
								onClick={() => {categoryFilter(item.id)}}>
									<span>{item.title}</span>
									<img src={item.image} alt={item.alias} className='Categories-Picture'/>
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