import { useEffect, useState } from 'react';
import { getEmployees } from '../tools/api';

function Home() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees().then(setEmployees);
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
