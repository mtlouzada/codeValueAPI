import { Router } from 'express';

const router = Router();

const salaries = [
  { year: 2018, salary: 2000 },
  { year: 2019, salary: 2200 },
  { year: 2020, salary: 2400 },
  { year: 2021, salary: 2600 },
  { year: 2022, salary: 2800 },
  { year: 2023, salary: 3000 },
  { year: 2024, salary: 3200 },
];

router.get('/', (req, res) => {
  res.json(salaries);
});

router.get('/average', (req, res) => {
  const { start, end } = req.query;
  const startYear = parseInt(start as string, 10);
  const endYear = parseInt(end as string, 10);

  const filteredSalaries = salaries.filter(
    (s) => s.year >= startYear && s.year <= endYear
  );

  const average =
    filteredSalaries.reduce((sum, s) => sum + s.salary, 0) /
    filteredSalaries.length;

  res.json({ average });
});

export default router;
