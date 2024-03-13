import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="bg-orange-100 p-5 rounded-lg h-full">
            <h2 className='text-2xl font-bold'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;