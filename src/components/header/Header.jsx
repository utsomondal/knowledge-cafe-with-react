import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center border-b-2 py-4 mb-10 max-w-6xl mx-auto'>
            <h1 className="text-[40px] font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="user avatar" />
        </div>
    );
};

export default Header;