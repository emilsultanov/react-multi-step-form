import React from 'react';
import {Box, Container, Grid, List, ListItem, ListItemButton, ListItemText} from "@mui/material";



function App() {
  return (
    <Box className="app">
      <Container sx={{paddingY: '50px'}}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Step-1" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Step-2" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Step-3" />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={8}>
            right
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
