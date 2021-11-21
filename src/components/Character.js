import React,{useState} from 'react'
import { Card, CloseButton, Container } from 'react-bootstrap'
import AddForm from './AddForm'
import SidebarListChar from './SidebarListChar'
import { allCharacters } from './sources'
import './styledComponents/Character.css'
// import '../../public'
// import {picture} from "character1.png"


function Character() {
    const [isOpen, setisOpen] = useState(false)
    const [value, setValue] = useState({})
    const rollit = ( person ) => {
        setisOpen(true)
        setValue({ title: person.title,
            friend: person.friend })
      }
    return (
        <div className="fullBox position-relative d-flex flex-wrap">
              <div className={!isOpen ? 'fullSize d-flex flex-wrap position-relative' : 'halfSize d-flex flex-wrap position-relative'}>
                  
             {
                allCharacters.map(each=>( 
                    <Card  className="m-3 pb-2" style={{width:'15rem'}} key={each.id} onClick={(e) => rollit( each )}>
                         <div className="text-center charImg"><img src = {each.image} alt = "22222" /></div>
                            <p className="px-2">{each.title}</p>
                            <h6 className="px-2">Friends: {each.friend}</h6>
                    </Card>
                  
                ))
                }
                    <div className="posi">
                    <AddForm name="CHARACTER"/>
                    </div>
                </div>
                {
                    isOpen?<div className="sidebar p-2">
                         <CloseButton onClick={()=>setisOpen(false)} className="ms-auto" />
                         
                <h3 className="fw-bold">{value.title}</h3>
                <p className="text1">{value.title} is really a nice Person. She's been
                    living on planet Alpha for 10 years
                </p>
                <div className="d-flex ">
                    <div>
                        <h5 className="text2">Planet</h5>
                        <h5 className="text2 fw-bold">Alpha</h5>
                    </div>
                    <div className="mx-4">
                        <h5 className="text2">Friends</h5>
                        <h5 className="text2 fw-bold">{value.friend}</h5>
                    </div>
                </div>
                    <div className="d-flex  justify-content-between">
                        <div className="col-4"><h5 className="fw-light">FRIENDS</h5></div>
                        <div ClassName="col-4 fw-bold"><img src="https://cdn.icon-icons.com/icons2/2550/PNG/512/plus_icon_152556.png" alt="plus icon" className="icon" /></div>
                    </div>
                    <Container>
                <SidebarListChar />
                    </Container>
                    </div>:""
                }

        </div>
    )
}

export default Character
