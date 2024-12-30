# CodeValueAPI

![Screenshot 2024-12-30 185924](https://github.com/user-attachments/assets/5aa81191-9dc0-494c-bf1e-1ac614e7aac3)

Este repositório contém um projeto dividido em **backend** e **frontend**, com o objetivo de exibir informações sobre os salários mínimos de 2010 a 2024 e calcular a média dos salários entre 2018 e 2024. A solução é moderna, responsiva e utiliza tecnologias atuais como Vite, TypeScript, SASS e Node.js.

---

## Tecnologias Utilizadas

### Backend
- **Node.js**
- **Express**
- **TypeScript**

### Frontend
- **Vite**
- **React**
- **TypeScript**
- **SASS**

---

## Funcionalidades

### Backend
- API RESTful para gerenciamento de salários mínimos.
- Endpoints:
  - `GET /api/salaries`: Retorna a lista de salários.
  - `GET /api/salaries/average?start=2018&end=2024`: Retorna a média de salários no intervalo especificado.

### Frontend
- Interface responsiva para exibir a lista de salários.
- Exibição da média de salários entre 2018 e 2024.
- Estilização minimalista e centralizada com SASS.

---

## Configuração do Projeto

### Requisitos
- Node.js (v16 ou superior)
- NPM ou Yarn

### Passo a Passo

#### 1. Clonar o repositório
```bash
git clone <URL_DO_REPOSITORIO>
cd CodeValueAPI
```

#### 2. Configurar o Backend
```bash
cd backend
npm install
npx ts-node src/index.ts
```
O servidor será iniciado em `http://localhost:3000`.

#### 3. Configurar o Frontend
```bash
cd frontend
npm install
npm run dev
```
O frontend será iniciado em `http://localhost:5173`.

## Exemplos de Uso

### Requisições da API
- **Obter a lista de salários:**
  ```bash
  curl http://localhost:3000/api/salaries
  ```
- **Calcular a média dos salários entre 2018 e 2024:**
  ```bash
  curl "http://localhost:3000/api/salaries/average?start=2018&end=2024"
  ```

---
