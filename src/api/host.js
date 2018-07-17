const env = process.env.NODE_ENV;
const config = require("../config.json")[env];

export const host = config.host || "http://localhost:8080/";
