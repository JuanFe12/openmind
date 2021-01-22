import "reflect-metadata";
import {createConnection} from "typeorm";
export async function intializeDB(): Promise<void> {
  await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "asdqwe123",
    database: "openmind"
  });
}

