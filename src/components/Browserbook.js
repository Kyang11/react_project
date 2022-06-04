import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import BookmarkAddSharpIcon from '@mui/icons-material/BookmarkAddSharp';
import Box from '@mui/material/Box';
import { CircularProgress } from '@mui/material';
import Error from './Error';
import book from '../hooks/book';


export default function Browserbook() {
  const {books, error} = book();



  if(!books){
    return(
    <Box sx={{display:"flex"}}>
      <CircularProgress/>
    </Box>

    )

  }
  if (error){
    return (
      <Box sx={{display:"flex"}}>
        <Error>{error}</Error>
      </Box>
    )
  }


  return (
    <ImageList cols={3}>
      
      {books.map((book) => (
        <ImageListItem key={book.id}>
          <img
            src={`${book.img}`}
            srcSet={`${book.img}`}
            alt={book.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={book.title}
            subtitle={book.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${book.title}`}
              >
                <BookmarkAddSharpIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const book1={
  "title":"Think and Growth Rich",
  "author":"Napoleon Hill and Arthur R. Pell",
  "subject":"Granddaddy of All Motivational Literature",
  "img":"https://res.cloudinary.com/ddi2tydzs/image/upload/v1654373050/book1_kj56fo.jpg",
  "id":1
}
const book2={
  "title":"The Undefected Mind",
  "author":"Dr. Alex Lickerman MD",
  "subject":"The key to happiness",
  "img":"https://res.cloudinary.com/ddi2tydzs/image/upload/v1654373065/book2_sj10uu.jpg",
  "id":2
}
const book3={
  "title":"The Mind of the Leader",
  "author":" Rasmus Hougaard and Jacqueline Carter",
  "subject":"Leadership qualities",
  "img":"https://res.cloudinary.com/ddi2tydzs/image/upload/v1654373070/book3_m5unuv.jpg",
  "id":3
}

const books=[book1, book2, book3]