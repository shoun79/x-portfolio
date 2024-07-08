
import { IconHexagonLetterS } from '@tabler/icons-react';
import SideBar from '../Drawer/Drawer';
const links = ['about', 'projects', 'experience', 'contact'];
export const navLinks = () => {
    return links.map((link, i) => <a key={i} className="text-textColor hover:text-primaryColor" href={`#${link}`}>
        {link}
    </a >
    )


}
const Header = () => {

    return (
        <nav className="flex justify-between items-center bg-bgColor  h-[17vh] px-10 dm-mono-regular">
            <IconHexagonLetterS className='!z-10' size={60} color='#64FFDA' stroke={1.25} />
            <div className="gap-10 hidden md:flex capitalize text-xl">
                {navLinks()}
            </div>
            <div className='md:hidden '>

                <SideBar />
            </div>
        </nav>

    );
};

export default Header;
