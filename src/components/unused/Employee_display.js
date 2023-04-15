import Employee_info from "../javascript/Employee_info";

function Employee_display(props){
        
        let b = props.employees;
        
        return(
            {b}
        );
        
        let i = 0;
        while(i < props.employees.lenght){
            return(
                <Employee_info
                cod_fisc={props.employees[i].cod_fisc}
                name={props.employees[i].name}
                surname={props.employees[i].surname}
                role={props.employees[i].role}
                wage={props.employees[i].wage}
                hired={props.employees[i].hired}
                />
            );
            i++;
        }
        
        
}
export default Employee_display;