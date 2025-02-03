# Weather Dashboard

## Overview
This project is a *Weather Dashboard* built with *React.js* that allows users to search for weather information of different cities using the *OpenWeather API*. It provides real-time weather data, including temperature, humidity, wind speed, and weather conditions, and allows users to switch between Celsius and Fahrenheit.

## Tech Stack Used
- *React.js*: For building the UI components and managing state.
- *Styled-components*: For styling components dynamically.
- *Axios*: For making API requests to fetch weather data.
- *Context API*: For managing global state (WeatherContext).
- *OpenWeather API*: To retrieve weather data based on user input.

## Project Structure
The project consists of the following key files:

### **1. main.jsx**
- Entry point for the React app.
- Renders the root component <App /> within *React.StrictMode*.

### **2. App.jsx**
- Wraps the entire application inside *WeatherProvider* to provide a global state.
- Renders the WeatherDashboard component.

### **3. WeatherDashboard.jsx**
- Fetches weather data from the OpenWeather API.
- Contains the search input and temperature unit toggle button.
- Displays weather information using WeatherInfo.jsx.
- Shows errors using ErrorMessage.jsx.
- Automatically updates weather data every *30 seconds*.

### **4. WeatherContext.jsx**
- Manages global state using the React *Context API*.
- Stores city name, weather data, error messages, and temperature unit.
- Saves the last searched city in *localStorage* for persistence.

### **5. SearchInput.jsx**
- Provides an input field to search for a city.
- Calls fetchWeather(city, unit) when the search button is clicked.

### **6. WeatherInfo.jsx**
- Displays weather details such as *temperature, humidity, wind speed, and condition*.
- Fetches weather icons from OpenWeather API.

### **7. ErrorMessage.jsx**
- Displays error messages (e.g., "City not found").
- Uses *styled-components* for styling the error message.

### **8. index.css**
- Global styles for the application.
- Includes responsive design and UI elements such as buttons and input fields.

## *How to Set Up and Run the Project*
### Prerequisites:
- Node.js and npm installed on your system.

### *Steps to Run the Project:*
1. Clone the repository:
    git clone https://github.com/your-repo/weather-dashboard.git
   cd weather-dashboard
   
2. Install dependencies:
    npm install
   
3. Replace the *API_KEY* in WeatherDashboard.jsx with your *OpenWeather API Key*:
    const API_KEY = "4c0263b9a6d2310438d4f911c6f0c4b2";
   
4. Start the development server:
    npm run dev
   
5. Open *http://localhost:5173/* in your browser.

## *Usage*
- Enter a city name in the search input and click the "Search" button.
- View real-time weather data including temperature, humidity, wind speed, and weather conditions.
- Click the *"Switch to Fahrenheit/Celsius"* button to toggle between *metric (°C)* and *imperial (°F)* units.
- The app refreshes the weather data *every 30 seconds* automatically.

## *Approach to the Assignment*
1. *Component-Based Architecture: Built a modular structure with **React components* for better code organization.
2. *State Management: Used **Context API* to manage state globally, reducing prop-drilling.
3. *Asynchronous API Calls: Integrated **Axios* to fetch real-time weather data from OpenWeather API.
4. *Local Storage for Persistence*: Stored the last searched city to retain user preference.
5. *Styling with Styled-components: Used **styled-components* for reusable and maintainable styles.
6. *Automatic Updates: Implemented a **30-second interval* to fetch fresh weather data.
7. *Error Handling*: Displayed error messages when invalid city names are entered or API calls fail.

## *Future Improvements*
- Add *5-day weather forecast* functionality.
- Implement a *dark mode toggle*.
- Improve *UI animations* and transitions.
- Support for *multiple locations*.

