import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService"
import { assignTicket } from "../../services/ticketService"

export const Ticket = ({ ticket, currentUser}) => {
  const [employees, setEmployees] = useState([])
  const [assignedEmployee, setAssignedEmployee] = useState({})


  useEffect(() => {
    getAllEmployees().then((employeeArray) => {
      setEmployees(employeeArray)
    })
  }, [])

  useEffect(() => {
    const foundemployee = employees.find(employee => employee.id === ticket.employeeTickets[0]?.employeeId
    )
    setAssignedEmployee(foundemployee)
  }, [employees, ticket])

  const handleClaim = () => {
    const currentEmployee = employees.find(
      (employee) =>  employee.userId === currentUser.id)

    const newEmployeeTicket = {
      employeeId: currentEmployee.id,
      serviceTicketId: ticket.id
    }

    assignTicket(newEmployeeTicket).then(() => {
      console.log("what??")
    })
  
  }

  return (
    <section className="ticket">
      <header className="ticket-info">#{ticket.id}</header>
      <div>{ticket.description}</div>
      <footer>
        <div>
          <div className="ticket-info">assignee</div>
          <div>
            {assignedEmployee ? assignedEmployee.user?.fullName : "None"}
          </div>
        </div>
        <div>
          <div className="ticket-info">emergency</div>
          <div>{ticket.emergency ? "yes" : "no"}</div>
        </div>
        <div className="btn-container">
          {/* if the logged in user is an employee and there is no employee ticket associated
          with the service ticket, then a btn to claim the ticket should display */}

          {currentUser.isStaff && !assignedEmployee ? (
          <button className="btn btn-secondary" onClick={handleClaim}>
            Claim
            </button>
          ) : (
          ""
          )}

          {/* if the logged in user is the assignedEmployee for the ticket and there is no date
          completed, then a btn to close the ticket should display */}

          {assignedEmployee?.userId === currentUser.id && 
          !ticket.dateCompleted ? (
          <button className="btn btn-warning">Close</button>
          ) : (
            ""
          )}

        </div>
      </footer>
    </section>
  )
}