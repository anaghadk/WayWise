# WayWise

WayWise

WayWise is a prototype mobile app built with React Native (Expo).
It’s designed as a travel itinerary planner, where users can explore destinations, food spots, and shopping places, and add them into a customizable trip list.


Features


🗺️ Create and manage travel itineraries

🍜 Browse restaurants and menus

🛍️ Add shopping spots and destinations

🔍 Functional search bar and filters

📌 Add items into a trip list


Backend


The backend is a simple MERN stack (MongoDB, Express, React Native frontend, Node.js) setup.

Currently supports Sign-up & Login (basic authentication).

Built for demonstration purposes.



Tech Stack


Frontend: React Native (Expo)

Backend: Node.js, Express, MongoDB

Version Control: Git & GitHub


Disclaimer

This app was developed as a student project prototype and is not a finished product.


Getting Started

Clone this repo

git clone https://github.com/anaghadk/WayWise.git

Go into the folder

cd WayWise

Install dependencies

npm install

Start the app

npx expo start

Scan the QR code in the Expo Go app (on Android/iOS)

Running the Backend

Go to backend folder

cd backend

Install dependencies

npm install

Set up environment variables

Create a file named .env inside the backend folder.

Add your MongoDB connection string and JWT secret:


MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

Start the backend server

npm start

or (if you’re using nodemon for auto-restart while developing):
npm run dev

The server will run on:
http://localhost:5000
