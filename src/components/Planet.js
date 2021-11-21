import React, { useState } from 'react'
import { Card, CloseButton, Container} from 'react-bootstrap'
import AddForm from './AddForm'
import { allPlanets } from './sources'
import './styledComponents/Planet.css'
import SidebarList from './SidebarList'
import './styledComponents/Sidebar.css'



function Planet() {
    const [isOpen, setisOpen] = useState(false)
    return (
            <div className=" Character fullBox position-relative d-flex flex wrap">
                <div className={!isOpen ? 'fullSize d-flex flex-wrap position-relative' : 'halfSize d-flex flex-wrap position-relative'}>
                {
                allPlanets.map(each=>( 
                    <Card  className="m-1"onClick={()=>setisOpen(true)}>
                        <div className="cardImg">
                        <Card.Img variant="top" src={each.image}/>
                        </div>
                    <div className="cardText">
                    <p>{each.title}</p>
                    <h6 >pop: 235</h6>
                    </div>
                    </Card>
                  
                ))
                }
                 <div className="posi">
                <AddForm name="PLANET"/>
                </div>
                </div >
                {
                    isOpen?<div className="sidebar p-3 m-2">
                         <CloseButton onClick={()=>setisOpen(false)} className="ms-auto m-2" />
                          <h2>Planet Alpha</h2>
                    <p className="fw-light text-secondary text-wrap">PLanet Alpha is the place to be if 
                    you like everything related to planets.
                    I know it is a bit meta,but come see by yourself
                    </p>
                    <h6>Population</h6>
                    <p className="fw-bold">234</p>
                    <div className="d-flex  justify-content-between">
                        <div className="col-4"><h5 className="fw-light">CHARCTERS</h5></div>
                        <div ClassName="col-4 fw-bold"><img src="https://cdn.icon-icons.com/icons2/2550/PNG/512/plus_icon_152556.png" alt="" className="icon" /></div>
                    </div>
                    <Container>
                <SidebarList />
                    </Container>
                    </div>:""
                }
            </div>
            
    )
}

export default Planet
