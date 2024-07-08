import { Drawer, Burger } from '@mantine/core';
import { IconHexagonLetterS } from '@tabler/icons-react';
import { IconX } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { navLinks } from '../Header/Header';

function SideBar() {
    const [opened, { toggle }] = useDisclosure(false);
    return (
        <>

            <Drawer.Root className='!-z-10'
                opened={opened} onClose={toggle}

                padding="xl"
                position='right'
                size='70vw'

                transitionProps={{
                    transition: "rotate-left",
                    duration: 200,
                    timingFunction: 'ease'
                }}>
                <Drawer.Overlay className='!-z-0' />
                <Drawer.Content className='!-z-0' bg='#0A192F'>
                    <Drawer.Header bg='#0A192F'>
                        <Drawer.CloseButton className=' hover:bg-bgColor hover:text-white' size={50} icon={<IconX className='text-primaryColor' stroke={2} size={30} />} />
                    </Drawer.Header>
                    <Drawer.Body className='flex flex-col  items-center gap-6 capitalize text-xl'>
                        {navLinks()}
                    </Drawer.Body>
                </Drawer.Content>
            </Drawer.Root>


            <Burger className='md:!hidden !z-10' size="lg" color='#64FFDA' opened={opened} onClick={toggle} />
        </>

    );
}

export default SideBar;