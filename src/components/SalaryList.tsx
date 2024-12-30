import React, { useEffect, useState } from 'react';
import { fetchSalaries, fetchAverageSalary } from '../utils/api';

const SalaryList: React.FC = () => {
  const [salaries, setSalaries] = useState<{ year: number; salary: number }[]>([]);
  const [average, setAverage] = useState<number | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const salaryData = await fetchSalaries();
      setSalaries(salaryData);

      const avgData = await fetchAverageSalary(2018, 2024);
      setAverage(avgData.average);
    };

    loadData();
  }, []);

  return (
    <div className="container">
      <h1>Salários Mínimos</h1>
      <ul className="salary-list">
        {salaries.map((s) => (
          <li key={s.year}>
            {s.year}: R$ {s.salary.toLocaleString('pt-BR')}
          </li>
        ))}
      </ul>
      {average !== null && (
        <div className="average">
          Média (2018-2024): R$ {average.toLocaleString('pt-BR')}
        </div>
      )}
    </div>
  );
};

export default SalaryList;
