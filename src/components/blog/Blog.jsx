import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    const { title, cover_img, author, author_img, posted_date,reading_time,hashtags } = blog
    return (
        <div>
            <img src={cover_img} alt={`Cover images of ${title}`} className='w-full' />
            <div className='flex justify-between my-4'>
                <div className='flex items-center gap-4'>
                    <img src={author_img} alt={`Author image`} className='w-[10%]' />
                    <div>
                        <h1 className='text-2xl font-bold'>{author}</h1>
                        <p className='font-semibold text-[#11111199]'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <h1 className='text-xl text-[#11111199] font-medium'>{`${reading_time} min read`}</h1>
                    <button>mr</button>
                </div>
            </div>
            <h1 className='text-[40px] text-[#111111] font-bold'>{title}</h1>
            <p>
                {
                    hashtags.map((hash,idx)=><span className='text-xl text-[#11111199] font-medium' key={idx}><a href="#"> #{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;