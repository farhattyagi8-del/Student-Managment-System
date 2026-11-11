import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import ConnectDB from './Config/db.js'
import Routes from './Routes/Student route.js'


dotenv.config();
const app = express();
ConnectDB();


const PORT  = process.env.PORT || 5000
app.use(express.json());
app.use(cors());

app.use('/api/students', Routes)

app.get('/', (req, res) => {
    res.send('Server mode on')    
});

app.listen(PORT, () => {
  console.log(`Server PORT ${PORT} Live` )
})