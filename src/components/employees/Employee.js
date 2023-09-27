import "./Employees.css"

export const Employee = ({employee}) => {
    return (
        <div className="employee">
                    <div>
                        <div className="employees">Name</div>
                        <div>{employee.fullName} </div>
            </div>
                    <div>
                        <div className="employees">Email</div>
                        <div>
                            {employee.email}
                        </div>
                    </div>
                </div>
    )
}