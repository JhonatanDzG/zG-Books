import server from "./src/server.js";
import PORT from "./src/config.js";

try {
  server.listen(PORT, () => {
    console.log("server listening on PORT ", PORT);
  });
} catch (error) {
  console.log("error >>: ", error);
}
