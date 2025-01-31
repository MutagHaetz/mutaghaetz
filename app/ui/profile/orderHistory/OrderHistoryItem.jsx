import React from 'react';
import Image from 'next/image';

import { Link } from '@chakra-ui/next-js';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export const OrderHistoryItem = ({ lang, title, descShort, imgurl, uid }) => {
	return (
		<Box
			display="flex"
			as={Link}
			href={`/${lang}/catalog/${uid}`}
			aria-label={`navigate to product ${title || ''} details page`}
		>
			<Flex
				flexDir={{ base: 'column', lg: 'row' }}
				justifyContent="space-between"
			>
				<Box
					position="relative"
					w="100px"
					h="100px"
					mr={lang === 'en' && '30px'}
					ml={lang === 'he' && '30px'}
					width={100}
					height={100}
				>
					<Image
						src={imgurl}
						alt="product img"
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						style={{
							objectFit: 'cover',
						}}
					/>
				</Box>
			</Flex>

			<Flex flexDirection={{ base: 'column', lg: 'row' }} flex={1} gap="10px">
				<Box maxW="257px">
					<Heading as="h3" fontSize="24px" fontWeight={700}>
						{title}
					</Heading>
					<Text fontSize="14px" color="#808080">
						{descShort}
					</Text>
				</Box>
			</Flex>
		</Box>
	);
};
