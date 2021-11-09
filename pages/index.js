import Head from 'next/head'
import { useRouter } from 'next/router'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import utilStyles from '../styles/utils.module.css'
import Navbar from '../components/navbar'
import green from '@material-ui/core/colors/green';
import Products from "../components/Products";
import {useEffect, useState} from "react";
import BookList from "../datasources/BookList";
import Grid from "@material-ui/core/Grid";

export default function Home() {
  const siteTitle = 'Hon Bookstore';
  const bookList = new BookList();
  const [books, setBooks] = useState(bookList.getAll());
  const [isFilter, setIsFilter] = useState(false);
  const router = useRouter();

  const filterBooks = (keyword) => {
    setBooks(bookList.searchByKeyword(keyword));
    setIsFilter(true);
  }

  const backToHome = () => {
    console.log("back to home");
    router.push('/');
    setBooks(bookList.getAll());
    setIsFilter(false);
  }

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: green[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Navbar
        filterBooks={filterBooks}
        backToHome={backToHome}
      />
      <Grid>

      </Grid>
      <Products books={books}/>
    </ThemeProvider>
  )
}