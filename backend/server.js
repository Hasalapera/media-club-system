// Example from a file like backend/server.js or backend/config/db.js


const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const User = require('./models/User');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Mount Routers
app.use('/api/auth', authRoutes);

// Admin Seeding Logic
const seedAdmin = async () => {
  try {
    const adminEmail = 'admin@gmail.com';
    const existingAdmin = await User.findOne({ email: adminEmail });

    if (!existingAdmin) {
      const admin = new User({
        email: adminEmail,
        password: 'admin123',
        role: 'Super Admin',
      });
      await admin.save();
      console.log('Default Super Admin seeded successfully.');
    } else {
      console.log('Super Admin already exists.');
    }
  } catch (error) {
    console.error('Error seeding admin:', error.message);
  }
};

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    seedAdmin();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('Database connection failed:', err.message));

// Basic Route for testing
app.get('/', (req, res) => {
  res.send('Media Club System API is running...');
});
