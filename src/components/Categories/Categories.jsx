import React from 'react'
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';

function Categories({category}) {
	return (
			<ul className='Categories'>
				{category.IsLoading ? <div>zdarova banditi</div> : category.Categories.map((item) => {
					return (
						<li className='Categories-Link' 
						style={{order: item.menuOrder}}
						key={item.id}>
								<NavLink 
								to={`/${item.alias}`} 
								className='Categories-Text'>
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

export default connect(mapStateToProps, null)(Categories);