import { useState } from 'react'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'
import Markread from './components/markread/Markread';

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const [readingTime, setReadingTime] = useState(0);
  const handleReadingTime = (reading_time, id) => {
    setReadingTime(readingTime + reading_time);
    // remove
    const rem = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(rem);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex gap-6 max-w-6xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleReadingTime={handleReadingTime}></Blogs>
        <div className='md:w-1/3'>
          <Markread readingTime={readingTime}></Markread>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App