const API_BASE_URL = 'http://localhost:3000/api/salaries';

export const fetchSalaries = async () => {
  const response = await fetch(API_BASE_URL);
  return response.json();
};

export const fetchAverageSalary = async (start: number, end: number) => {
  const response = await fetch(`${API_BASE_URL}/average?start=${start}&end=${end}`);
  return response.json();
};
