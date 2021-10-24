import { exit } from "process";
import { Connection, createConnection } from "typeorm";

const connect = async (): Promise<Connection> => {
  try {
    const connection = await createConnection();
    console.log("Conectado ao banco de dados");
    return connection;
  } catch (err) {
    console.log(err);
    exit(1);
  }
};

export default connect;
