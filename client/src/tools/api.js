const API_URL = import.meta.env.VITE_API_URL;

export async function getEmployees() {
  const response = await fetch(`${API_URL}/employees`);
  return response.json();  
}

export async function getEmployeeById(id) {
  const response = await fetch(`${API_URL}/employees/${id}`);
  return response.json();  
}
