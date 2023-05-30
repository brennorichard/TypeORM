import { DataSource } from "typeorm";

//https://orkhan.gitbook.io/typeorm/docs/data-source-options
const AppDataSource = new DataSource({
    database: 'lqfoeylf', // se for SQLite, então use bdaula.db
    type: "postgres", // se for SQLite, então use sqlite
    host: 'rajje.db.elephantsql.com', // não use esta propriedade se for sqlite
    port: 5432, // não use esta propriedade se for sqlite
    username: 'lqfoeylf', // não use esta propriedade se for sqlite
    password:'Ibp5p-HD_e-UU80dEfGBXaxPCNzEcC_z', // não use esta propriedade se for sqlite
    // true indica que o schema do BD será criado a cada vez que a aplicação inicializar
    // deixe false ao usar migrations
    synchronize: false, 
    logging: true, // true indica que as consultas e erros serão exibidas no terminal
    entities: ["src/entities/*.ts"], // entidades que serão convertidas em tabelas
    migrations: ["src/migrations/*.ts"], // local onde estarão os arquivos de migração
    subscribers: [],
    maxQueryExecutionTime: 2000 // 2 seg.
});

// https://orkhan.gitbook.io/typeorm/docs/data-source
AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source inicializado!")
    })
    .catch((e) => {
        console.error("Erro na inicialização do Data Source:", e)
    });

export default AppDataSource;
