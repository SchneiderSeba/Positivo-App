import express from 'express';
import dotenv from 'dotenv';
import { sendPushNotification } from './sendNotification.js';
import { listenOrdersAndNotify } from './sendNotificationFromBack.js';
import { homePage } from './homePage.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());


listenOrdersAndNotify();

app.get('/', (req, res) => {
  res.send(homePage());
});

app.post('/send-notification', async (req, res) => {
  try {
    const { to, title, body, data } = req.body;
    await sendPushNotification({ to, title, body, data });
    res.status(200).send('Push notification sent successfully');
  } catch (error) {
    res.status(500).send('Failed to send push notification');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port 0.0.0.0:${PORT}`);
});