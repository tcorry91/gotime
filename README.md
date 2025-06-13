🕒 GoTime — Fitness Tracking App
GoTime is a professional-grade fitness app built with React Native and Expo, designed for performance-focused users who want clean UX and serious features. Built in under 3 weeks as a portfolio piece demonstrating scalable architecture and SOLID principles.

🔧 Tech Stack
React Native (Expo SDK 53)

TypeScript

SQLite (local storage)

React Navigation (Bottom Tabs)

Modular architecture with reusable components

Prettier + ESLint for consistent code formatting

📱 App Features
🏠 Home Screen – Displays today’s summary

💪 Workout Logger – Tracks full workouts with multiple sets

📅 Calendar View – See your training schedule

📊 Stats Screen – View progress over time

⚙️ Settings – Local reminders, dark mode (optional), etc.

🗂️ Project Structure
bash
Copy
Edit
src/
│
├── components/          # Reusable UI pieces
├── screens/             # Page-level components
├── services/            # DB logic, notifications, etc.
├── hooks/               # Custom React hooks
└── utils/               # Date/time helpers, etc.
💡 Goals
This project is meant to showcase:

Production-ready organization

Integration of native device features (SQLite, reminders)

Testable, scalable patterns using SOLID principles

🚧 Known Issues
expo-sqlite may fail under Hermes JS engine
→ Workaround: using "jsEngine": "jsc" in app.json

🧠 Future Improvements
Add authentication + cloud sync

More granular progress charts

Workout plan marketplace or community sharing

👨‍💻 Author
Timothy Corry
