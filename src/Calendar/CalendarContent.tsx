import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "../Shared/ListItems";
import Drawer from "../Shared/Drawer";
import AppBar from "../Shared/AppBar";
import { Calendar, Event, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Popup from "reactjs-popup";
import Modal from "react-bootstrap/Modal";
import "reactjs-popup/dist/index.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/esm/Form";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer

function CalendarComponent() {
  const now = new Date();

  const myEventsList = [
    {
      id: 0,
      title: "All Day Event very long title",
      allDay: true,
      start: new Date(2022, 3, 0),
      end: new Date(2022, 3, 1),
    },
    {
      id: 1,
      title: "Long Event",
      start: new Date(2022, 3, 7),
      end: new Date(2022, 3, 10),
    },

    {
      id: 2,
      title: "DTS STARTS",
      start: new Date(2022, 2, 13, 0, 0, 0),
      end: new Date(2022, 2, 20, 0, 0, 0),
    },

    {
      id: 3,
      title: "DTS ENDS",
      start: new Date(2022, 10, 6, 0, 0, 0),
      end: new Date(2022, 10, 13, 0, 0, 0),
    },

    {
      id: 4,
      title: "Some Event",
      start: new Date(2022, 3, 9, 0, 0, 0),
      end: new Date(2022, 3, 10, 0, 0, 0),
    },
    {
      id: 5,
      title: "Conference",
      start: new Date(2022, 3, 11),
      end: new Date(2022, 3, 13),
      desc: "Big conference for important people",
    },
    {
      id: 6,
      title: "Meeting",
      start: new Date(2022, 3, 12, 10, 30, 0, 0),
      end: new Date(2022, 3, 12, 12, 30, 0, 0),
      desc: "Pre-meeting meeting, to prepare for the meeting",
    },
    {
      id: 7,
      title: "Lunch",
      start: new Date(2022, 3, 12, 12, 0, 0, 0),
      end: new Date(2022, 3, 12, 13, 0, 0, 0),
      desc: "Power lunch",
    },
    {
      id: 8,
      title: "Meeting",
      start: new Date(2022, 3, 12, 14, 0, 0, 0),
      end: new Date(2022, 3, 12, 15, 0, 0, 0),
    },
    {
      id: 9,
      title: "Happy Hour",
      start: new Date(2022, 3, 12, 17, 0, 0, 0),
      end: new Date(2022, 3, 12, 17, 30, 0, 0),
      desc: "Most important meal of the day",
    },
    {
      id: 10,
      title: "Dinner",
      start: new Date(2022, 3, 12, 20, 0, 0, 0),
      end: new Date(2022, 3, 12, 21, 0, 0, 0),
    },
    {
      id: 11,
      title: "Planning Meeting with Paige",
      start: new Date(2022, 3, 13, 8, 0, 0),
      end: new Date(2022, 3, 13, 10, 30, 0),
    },
    {
      id: 11.1,
      title: "Inconvenient Conference Call",
      start: new Date(2022, 3, 13, 9, 30, 0),
      end: new Date(2022, 3, 13, 12, 0, 0),
    },
    {
      id: 11.2,
      title: "Project Kickoff - Lou's Shoes",
      start: new Date(2022, 3, 13, 11, 30, 0),
      end: new Date(2022, 3, 13, 14, 0, 0),
    },
    {
      id: 11.3,
      title: "Quote Follow-up - Tea by Tina",
      start: new Date(2022, 3, 13, 15, 30, 0),
      end: new Date(2022, 3, 13, 16, 0, 0),
    },
    {
      id: 12,
      title: "Late Night Event",
      start: new Date(2022, 3, 17, 19, 30, 0),
      end: new Date(2022, 3, 18, 2, 0, 0),
    },
    {
      id: 12.5,
      title: "Late Same Night Event",
      start: new Date(2022, 3, 17, 19, 30, 0),
      end: new Date(2022, 3, 17, 23, 30, 0),
    },
    {
      id: 13,
      title: "Multi-day Event",
      start: new Date(2022, 3, 20, 19, 30, 0),
      end: new Date(2022, 3, 22, 2, 0, 0),
    },
    {
      id: 14,
      title: "Today",
      start: new Date(new Date().setHours(new Date().getHours() - 3)),
      end: new Date(new Date().setHours(new Date().getHours() + 3)),
    },
    {
      id: 15,
      title: "Point in Time Event",
      start: now,
      end: now,
    },
    {
      id: 16,
      title: "Video Record",
      start: new Date(2022, 3, 14, 15, 30, 0),
      end: new Date(2022, 3, 14, 19, 0, 0),
    },
    {
      id: 17,
      title: "Dutch Song Producing",
      start: new Date(2022, 3, 14, 16, 30, 0),
      end: new Date(2022, 3, 14, 20, 0, 0),
    },
    {
      id: 18,
      title: "Itaewon Halloween Meeting",
      start: new Date(2022, 3, 14, 16, 30, 0),
      end: new Date(2022, 3, 14, 17, 30, 0),
    },
    {
      id: 19,
      title: "Online Coding Test",
      start: new Date(2022, 3, 14, 17, 30, 0),
      end: new Date(2022, 3, 14, 20, 30, 0),
    },
    {
      id: 20,
      title: "An overlapped Event",
      start: new Date(2022, 3, 14, 17, 0, 0),
      end: new Date(2022, 3, 14, 18, 30, 0),
    },
    {
      id: 21,
      title: "Phone Interview",
      start: new Date(2022, 3, 14, 17, 0, 0),
      end: new Date(2022, 3, 14, 18, 30, 0),
    },
    {
      id: 22,
      title: "Cooking Class",
      start: new Date(2022, 3, 14, 17, 30, 0),
      end: new Date(2022, 3, 14, 19, 0, 0),
    },
    {
      id: 23,
      title: "Go to the gym",
      start: new Date(2022, 3, 14, 18, 30, 0),
      end: new Date(2022, 3, 14, 20, 0, 0),
    },
  ];

  // const openModal = (data: any) => {
  //   setPopupData(data);
  // };

  const [open, setOpen] = React.useState(true);
  const [openModal, setOpenModal] = React.useState(true);
  const [modalData, setModalData] = React.useState<Event>();
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Calendar
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />

          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid xs={12}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 1000,
                  }}
                >
                  <Modal show={openModal} centered>
                    <Modal.Header closeButton>
                      <Modal.Title>{modalData?.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DateTimePicker
                            className="form"
                            label="Start time"
                            value={modalData?.start}
                            onChange={() => {}}
                            renderInput={(params) => <TextField {...params} />}
                          />
                          <DateTimePicker
                            className="form"
                            label="End time"
                            value={modalData?.end}
                            onChange={() => {}}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Example textarea</Form.Label>
                          <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          setOpenModal(false);
                        }}
                      >
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => {
                          setOpenModal(false);
                        }}
                      >
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <Calendar
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: "100vh" }}
                    onSelectEvent={(data: Event) => {
                      setModalData(data);
                      setOpenModal(true);
                    }}
                  />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper
                  elevation={3}
                  sx={{ p: 2, display: "flex", flexDirection: "column" }}
                ></Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default function CalendarContent() {
  return <CalendarComponent />;
}
