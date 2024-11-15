using {user30 as dbschema} from '../db/schema';

@path: 'service/user30'

service User30info {
    entity Address         as projection on dbschema.Address;
    entity Employee        as projection on dbschema.Employee;
    entity EmployeeDetails as projection on dbschema.EmployeeDetails;
}