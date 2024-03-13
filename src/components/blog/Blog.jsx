import PropTypes from 'prop-types';
import { MdOutlineBookmarks } from "react-icons/md";

const Blog = ({ blog, handleAddToBookmark, handleReadingTime }) => {
    const { id, title, cover_img, author, author_img, posted_date, reading_time, hashtags } = blog
    return (
        <div className='mb-10'>
            <img src={cover_img} alt={`Cover images of ${title}`} className=' w-full rounded-lg' />
            <div className='flex justify-between my-4'>
                <div className='flex items-center gap-4'>
                    <img src={author_img} alt={`Author image`} className='w-[10%]' />
                    <div>
                        <h1 className='text-2xl font-bold'>{author}</h1>
                        <p className='font-semibold text-[#11111199]'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-1 text-lg'>
                    <h1 className='text-[#11111199] font-medium'>{`${reading_time} min`}</h1>
                    <button onClick={() => handleAddToBookmark(blog)} className='text-[#11111199]'><MdOutlineBookmarks /></button>
                </div>
            </div>
            <h1 className='text-[40px] text-[#111111] font-bold'>{title}</h1>
            <p>
                {
                    hashtags.map((hash, idx) => <span className='text-xl text-[#11111199] font-medium' key={idx}><a href="#"> #{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleReadingTime(reading_time, id)} className='text-[#6047EC] font-semibold my-2 border-b-2 border-[#6047EC]'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blog;