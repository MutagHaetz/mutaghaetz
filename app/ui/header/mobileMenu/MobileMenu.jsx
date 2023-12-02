'use client';

import { useSwipeable } from 'react-swipeable';
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerOverlay,
} from '@chakra-ui/react';

import { FaAnglesRight } from 'react-icons/fa6';
import './MobileMenu.css';

const MobileMenu = ({ children }) => {
	const swipeHandlers = useSwipeable({ onSwipedRight: () => closeModal() });

	return (
		<>
			<Drawer
				// isOpen
				placement="right"
				// onClose={onClose}
				// finalFocusRef={btnRef}
			>
				<DrawerOverlay {...swipeHandlers} />
				<DrawerContent bg={'#181617'}>
					<DrawerBody
						position={'relative'}
						display={'flex'}
						flexDirection={'column'}
						alignItems={'center'}
						justifyContent={'space-between'}
						py={'80px'}
						px={'32px'}>
						{children}
						<Button
							className={'buttonAnimation'}
							position={'absolute'}
							top={'50%'}
							left={'0'}
							zIndex={'99999'}
							bg={'#a28445'}
							transition={'all 0.3s'}
							_hover={{ bg: '#81672e' }}
							color={'white'}
							borderRadius={'full'}>
							<FaAnglesRight />
						</Button>
					</DrawerBody>

					<DrawerFooter></DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default MobileMenu;
