import React from 'react'
import './Movielist.css'
import Moviecard from './Moviecard'
const Movielist = ({ data }) => {
    return (
        <div className='cardss'>
            {data.map((el) =><Moviecard el={el}/>)}



        </div>
    )
}

export default Movielist
