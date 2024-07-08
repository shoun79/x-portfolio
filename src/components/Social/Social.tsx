import { IconBrandGithub } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { IconBrandFacebook } from '@tabler/icons-react';

const Social = () => {
    const socialLinks = [
        {
            link: 'https://github.com/shoun79',
            icon: IconBrandGithub,
        },
        {
            link: 'https://www.linkedin.com/in/shounweb',
            icon: IconBrandLinkedin,
        },
        {
            link: 'https://www.facebook.com/md.shoun2',
            icon: IconBrandFacebook,
        }
    ];
    const socialIcons = socialLinks.map((socialLink, i) => <a key={i} className="font-mono text-lg hover:text-primaryColor hover:-translate-x-2 transition ease-in-out  duration-500 " href={socialLink.link} target='_blank'><socialLink.icon className='-rotate-90' stroke={2} size={30} /> </a>)
    return (
        <div className="flex items-center gap-10 text-textColor fixed bottom-56 -left-16  rotate-90">
            {socialIcons}
            <hr className="border-[2px] w-[70px] bg-textColor border-textColor rounded-full" />
        </div>
    );
};

export default Social;