import app from "./app.js";
import { dbConnection } from "./database/dbConnection.js";

dbConnection();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

