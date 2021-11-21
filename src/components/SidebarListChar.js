import React from 'react'
import { sidebarCharacters } from './sources'
import './styledComponents/SidebarList.css'

function SidebarListChar() {
    return (
        <div className="sidebarList">
            {
                sidebarCharacters.map(each=>(
                    <div className="d-flex m-1">
                        <div className="imgBox">
                            <img src={`${each.image}`} alt="" />
                        </div>
                        <div className='p-2'>
                            <h6>{each.title}</h6>
                            <p className="fw-light">{each.about} friends</p>
                        </div>
                            
                    </div>
                ))
            }
           
        </div>
    )
}

export default SidebarListChar
