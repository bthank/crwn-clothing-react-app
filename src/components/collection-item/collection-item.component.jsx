import React from 'react';
//import CollectionPreview from '../collection-preview/collection-preview.component';

import './collection-item.styles.scss';

// this component does not require any state, so it will be a functional component
const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className='collection-item'>
        <div 
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{ name }</span>
            <span className='price'>{ price }</span>
        </div>

    </div>
);

export default CollectionItem;