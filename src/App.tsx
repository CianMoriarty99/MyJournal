import React from "react";
// import Dashboard from "./Dashboard/Dashboard";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import CalendarComponent from "./Calendar/CalendarContent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {ResponsiveCalendar} from '@nivo/calendar';
import {data} from './data';

function App() {
  // const mdTheme = createTheme({
  //   palette: {
  //     mode: "light",
  //   },
  // });

  return (
    <div className="App">
      {/*<Router>*/}
      {/*  <Routes>*/}
      {/*    <Route path="/" element={<Dashboard />} />*/}
      {/*    <Route path="/Dashboard" element={<Dashboard />} />*/}
      {/*    <Route path="/Calendar" element={<CalendarComponent />} />*/}
      {/*  </Routes>*/}
      {/*</Router>*/}
      <ResponsiveCalendar
        data={data}
        from="2015-03-01"
        to="2016-07-12"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'row',
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: 'right-to-left'
          }
        ]}
      />
    </div>
  );
}

export default App;
