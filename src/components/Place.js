import React from 'react'
import './Place.css'
import {HiLocationMarker} from 'react-icons/hi'


function Place(props) {
    
    const {title,location,map,start,end,description,img} = props
    
    return (
        <div>
        <div className='place-container'>
            <div className='img'>
                <img src={img} alt=''/>
            </div>
            <div className='place-content'>
                <div className='location'>
                    <HiLocationMarker size={15} className='country'/ >
                    <div className='country'>{location.toUpperCase()}</div>
                    <a href={map} className='map' target='_blank' rel='noreferrer'>View on Google Maps</a></div>
                <div className='name'>{title}</div>
                <div className='date'>{start} - {end}</div>
                <div className='description'>{description}</div>
            </div>
            
        </div><hr className='line'/></div>
    )
}

export default Place