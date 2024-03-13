import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center mx-4 border-b-2 py-4'>
            <h1 className="text-[40px] font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="user avatar" />
        </div>
    );
};

export default Header;