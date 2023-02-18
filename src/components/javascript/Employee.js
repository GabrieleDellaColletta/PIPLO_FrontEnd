import './Employee.css';

function Employee(employee_props) {

    return (
        <div className='employee'>          

            <div className='employee_name'>{employee_props.name}</div>
            <div className='employee_wage'>{employee_props.wage}</div>
            <div className='employee_role'>{employee_props.role}</div>
        </div>
    );
}

export default Employee;