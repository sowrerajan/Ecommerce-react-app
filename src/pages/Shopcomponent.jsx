import React, { Component } from 'react'
import CollectionPreview from '../Components/CollectionPreview'
import Shop_Data from './Shopdata'

export class Shopcomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             collections: Shop_Data
        }
    }
    
    render() {
        const { collections } = this.state
        return (
            <div className='shop-page'>{
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key ={id} {...otherCollectionProps} />
                )) 
            }      
            </div>
        )
    }
}

export default Shopcomponent
