import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CalendarComponent from "./Calendar/CalendarContent";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const mdTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  require("react-big-calendar/lib/css/react-big-calendar.css");

  return (
    <ThemeProvider theme={mdTheme}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Calendar" element={<CalendarComponent />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
