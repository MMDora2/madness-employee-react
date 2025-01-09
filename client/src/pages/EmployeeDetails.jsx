import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEmployeeById } from '../tools/api';

function EmployeeDetails() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    getEmployeeById(id).then(setEmployee);
  }, [id]);

  if (!employee) return <div>Loading...</div>;

  return (
    <div>
      <h1>{employee.name}</h1>
      <p>Position: {employee.position}</p>
      <p>Level: {employee.level}</p>
    </div>
  );
}

export default EmployeeDetails;
