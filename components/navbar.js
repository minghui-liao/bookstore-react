import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
  },
  pageButton: {
    marginLeft: theme.spacing(2),
  },
  logo_container: {
    position: 'relative',
    margin: 'auto',
    textAlign: 'center',
    maxHeight: '100px',
    maxWidth: '100px'
  },
  logo: {
    position: 'relative',
    margin: 'auto',
    textAlign: 'center',
  },
  space: {
    flexGrow: 1
  },
  search: {
    justify: "flex-end",
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    float: 'right',
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar(props) {
  const filterBooks = props.filterBooks;
  const backToHome = props.backToHome;
  const classes = useStyles();
  const [keyword, setKeyword] = useState("");

  const handleSearchInputChanges = (e) => {
    setKeyword(e.target.value);
  }

  const resetInputField = () => {
    setKeyword("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    console.log("callSearchFunction");
    filterBooks(keyword);
    resetInputField();
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid position="absolute" className={classes.logo_container}>
            <IconButton onClick={backToHome}>
              <CardMedia
                component="img"
                className={classes.logo}
                image="./navbar_logo.ico"
                alt="logo"
              />
            </IconButton>

          </Grid>

          <IconButton
            className={classes.pageButton}
            color="inherit"
            onClick={backToHome}
          >Home</IconButton>
          <IconButton
            className={classes.pageButton}
            color="inherit"
          >Sign Up</IconButton>
          <IconButton
            className={classes.pageButton}
            color="inherit"
          >View Cart</IconButton>
          <IconButton
            className={classes.pageButton}
            color="inherit"
          >Books</IconButton>
          <div className={classes.space} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon onClick={callSearchFunction}/>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={keyword}
              onChange={handleSearchInputChanges}
              onKeyPress={e => {
                if (e.key == 'Enter') {
                  filterBooks(keyword);
                  resetInputField();
                }
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}