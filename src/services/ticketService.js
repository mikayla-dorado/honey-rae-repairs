export const getAllTickets = async () => {
    const response = await fetch("http://localhost:8088/serviceTickets")
    const tickets = await response.json()
     return tickets
}