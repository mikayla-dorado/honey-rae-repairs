import { useParams } from "react-router-dom"

export const CustomerDetails = () => {
    // customer/3 the number here, 3 is the value
    //path="/customers/customerId" "customerId" is the key

    const { customerId } = useParams() // { customerId: 3}

    return <div>Customer #{customerId}</div>
}
