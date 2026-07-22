import React from 'react';
import { makeStyles } from '@mui/styles';
import { Paper, Tabs, Tab } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: '#e0e0e0',
        fontWeight: 'bold',
    },
});

export default function NavBar() {
    const classes = useStyles();
    const location = useLocation();

    // Define tab index based on route
    const getTabIndex = () => {
        switch (location.pathname) {
            case '/clients': return 0;
            case '/subscribe-user': return 1;
            case '/analytics': return 2;
            default: return 0;  // Default to 'Clients'
        }
    };

    const [value, setValue] = React.useState(getTabIndex);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Clients" component={Link} to="/clients" />
                <Tab label="subscribe User" component={Link} to="/subscribe-user" />
                <Tab label="Analytics" component={Link} to="/analytics" />
            </Tabs>
        </Paper>
    );
}
