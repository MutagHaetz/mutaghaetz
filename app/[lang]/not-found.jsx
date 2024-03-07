import { cookies } from 'next/headers';
import Link from 'next/link';

import Btn from '@/app/ui/button/Btn';
import SectionWrapper from '../ui/sectionWrapper/SectionWrapper';

import { Center, Heading, Text } from '@chakra-ui/react';

import { getDictionary } from '../lib/locales/dictionary';

async function NotFound() {
	const lang = cookies().get('lang')?.value || 'he';
	const {
		notFoundMessage,
		buttons: { tryAgain },
	} = await getDictionary(lang);

	return (
		<SectionWrapper>
			<Center flexDir="column" gap={6} h={480}>
				<Heading as="h1" fontWeight="bold">
					{notFoundMessage[0]}
				</Heading>
				<Text>{notFoundMessage[1]}</Text>
				<Link href="/" aria-label="Navigate to home page">
					<Btn>Let&apos;s try again</Btn>
					<Btn>{tryAgain}</Btn>
				</Link>
			</Center>
		</SectionWrapper>
	);
}

export default NotFound;
