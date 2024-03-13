import PropTypes from 'prop-types';

const Markread = ({ readingTime }) => {
    return (
        <div className="border border-[#6047EC9a] rounded-lg p-5 mb-5">
            <h1 className="text-[#6047EC] text-2xl font-bold"> Spent time on read: {readingTime} min</h1>
        </div>
    );
};

Markread.propTypes = {
    readingTime: PropTypes.number
}

export default Markread;