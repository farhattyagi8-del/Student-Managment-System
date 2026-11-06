import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import ConnectDB from './Config/db.js'



dotenv.config();
const app = express();
ConnectDB();


const PORT  = process.env.PORT || 5000
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server mode on')
});

app.listen(PORT, () => {
  console.log(`Server PORT ${PORT} Live` )
})