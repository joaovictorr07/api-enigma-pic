const http = require("http");
const app = require("./config/express"); // Importa o app do arquivo ./config/express
const PORT = process.env.PORT || 3030;

http.createServer(app).listen(PORT, function() {
  console.log(`Server started on port ${PORT}`);
});