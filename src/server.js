import { Factory, Model, Server } from "miragejs";
import faker from "faker";

export function makeServer({ environment = "development " } = {}) {
  const server = new Server({
    environment,

    models: {
      user: Model
    },

    factories: {
      user: Factory.extend({
        id(i) {
          return `user${i}`;
        },
        name(i) {
          return `userName${i}`;
        },
        description: faker.lorem.sentence()
      })
    },

    seeds(svr) {
      svr.createList("user", 5);
    },

    routes() {
      this.get("/users");
    }
  });

  return server;
}
