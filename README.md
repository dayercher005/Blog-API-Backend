# Blog-API (Backend)


## Project Structure

```bash
.
├── app.ts
├── generated
├── LICENSE
├── package-lock.json
├── package.json
├── prisma
│   ├── migrations
│   │   ├── 20260125030916_init
│   │   │   └── migration.sql
│   │   ├── 20260127034311
│   │   │   └── migration.sql
│   │   ├── 20260127055041
│   │   │   └── migration.sql
│   │   ├── 20260130140930
│   │   │   └── migration.sql
│   │   ├── 20260202031726
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── prisma.config.ts
├── README.md
├── script.ts
├── src
│   ├── config
│   │   ├── authentication.ts
│   │   ├── jwtGenerator.ts
│   │   └── jwtStrategy.ts
│   ├── controllers
│   │   ├── Author
│   │   │   ├── CreateBlog.ts
│   │   │   ├── Dashboard.ts
│   │   │   ├── Login.ts
│   │   │   ├── Logout.ts
│   │   │   └── SignUp.ts
│   │   └── User
│   │       ├── CreateComment.ts
│   │       ├── Homepage.ts
│   │       ├── Login.ts
│   │       ├── Logout.ts
│   │       └── SignUp.ts
│   ├── lib
│   │   ├── prisma.ts
│   │   └── queries.ts
│   └── routes
│       ├── Author-Frontend.ts
│       └── User-Frontend.ts
└── tsconfig.json

```

---

## System Architecture

```mermaid
---
config: 
    theme: 'dark'
---

graph TB
    AuthorClient[Author Blog Website]
    UserClient[User Blog Website]
    Server[Blog Express API]
    Database[(PostgreSQL Database)]
    Passport[Passport.js Auth]
    Prisma[Prisma ORM]
    
    AuthorClient --> |HTTP Requests| Server
    UserClient -->|HTTP Requests| Server
    Server -->|JWT Authentication| Passport
    Server -->|Database Queries| Prisma
    Prisma -->|SQL Queries| Database
    Server -->|HTTP Responses| AuthorClient
    Server -->|HTTP Responses| UserClient

```

---

##  🛠️ Languages and Tools
![Static Badge](https://img.shields.io/badge/Typescript-_?style=for-the-badge&logo=Typescript&logoColor=%233178C6&labelColor=black&color=%233178C6)![Static Badge](https://img.shields.io/badge/Express-_?style=for-the-badge&logo=Express&labelColor=black&color=%23000000)   ![Static Badge](https://img.shields.io/badge/Passport-_?style=for-the-badge&logo=Passport&logoColor=%2334E27A&labelColor=black&color=%2334E27A)![Static Badge](https://img.shields.io/badge/JSON%20Web%20Tokens-_?style=for-the-badge&logo=JSON%20Web%20Tokens&logoColor=white&labelColor=black&color=white)![Static Badge](https://img.shields.io/badge/PostgreSQL-_?style=for-the-badge&logo=PostgreSQL&logoColor=%234169E1&labelColor=black&color=%234169E1)

---

## How to Run

1. Clone the repository
```bash
git clone
```

2. Install dependencies
```bash
npm install
```

3. Run Development Server
```bash
npm install
```

4. Open `http://localhost:8080` in your browser
