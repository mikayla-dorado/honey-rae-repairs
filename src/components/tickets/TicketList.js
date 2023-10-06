import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService"
import "./Tickets.css"
import { Ticket } from "./Ticket"
import { TicketFilterBar } from "../TicketFilterBar"

export const TicketList = ({currentUser}) => {
    const [allTickets, setAllTickets] = useState([])
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
  

    const getAndSetTickets = () => {
      getAllTickets().then((ticketsArray) => {
        setAllTickets(ticketsArray)
      })
    }
  
    useEffect(() => {
      getAndSetTickets()
    }, [])
  
  
  useEffect(() => {
   if (showEmergencyOnly === true) {
    const emergencyTickets = allTickets.filter(
      ticket => ticket.emergency === true
      )
      setFilteredTickets(emergencyTickets)
   } else {
      setFilteredTickets(allTickets)
   }
  }, [showEmergencyOnly, allTickets]) //when showEmergencyOnly changes, this function will run


  useEffect(() =>{
    const foundTickets = allTickets.filter(ticket => ticket.description.toLowerCase().includes(searchTerm.toLowerCase())//used toLowerCase so someone can search lowercase or uppercase and it will find it
    ) 
    setFilteredTickets(foundTickets)
  }, [searchTerm, allTickets]) //whenever [searchTerm] changes, want to filter tickets
  
  
    return (
      <div className="tickets-container">
        <h2>Tickets</h2>
        <TicketFilterBar setShowEmergencyOnly={setShowEmergencyOnly} setSearchTerm={setSearchTerm}/>
        <article className="tickets">
          {filteredTickets.map((ticketObj) => {
            return <Ticket ticket={ticketObj} 
            currentUser={currentUser} 
            getAndSetTickets={getAndSetTickets}
            key={ticketObj.id}/>
          })}
        </article>
      </div>
    )
  }
  