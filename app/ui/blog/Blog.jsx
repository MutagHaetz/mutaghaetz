import React from 'react';

import { Text } from '@chakra-ui/react';

import BlogSlider from '../blogSlider/BlogSlider';
import SectionWrapper from '../sectionWrapper/SectionWrapper';
import TextLink from '../textLink/TextLink';

const Blog = async ({ lang, dictionary, posts }) => {
	return (
		<SectionWrapper heading={dictionary.header.navItems[3].title}>
			<BlogSlider posts={posts} lang={lang} />
			<Text mt={'32px'}>
				{dictionary.pageLinksText.catalog.fromBlog}
				<TextLink
					aria-label={`navigate to ${dictionary.pageLinksText.catalog.linkName}`}
					href={`/${lang}/${dictionary.pageLinksText.catalog.link}`}
				>
					{dictionary.pageLinksText.catalog.linkName}
				</TextLink>
			</Text>
		</SectionWrapper>
	);
};

export default Blog;
