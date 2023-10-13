export const getAllTickets =  () => {
    return fetch(
        'http://localhost:8088/serviceTickets?_embed=employeeTickets'
    ).then((res) => res.json())
}

export const assignTicket = (employeeTicket) => {
    return fetch(`http://localhost:8088/employeeTickets`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(employeeTicket),
})
}

//this fetch request is here so when we click 'close' the button goes away for that ticket
// indicating that we finished the task

export const updateTicket = (ticket) => {
return fetch(`http://localhost:8088/serviceTickets/${ticket.id}`,{
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(ticket),
})
}

export const deleteTicket = (ticketId) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticketId}`,{
        method: "DELETE",
    })
}

export const createTicket = (ticket) => {
    return fetch(`http://localhost:8088/serviceTickets`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(ticket),
    })
}