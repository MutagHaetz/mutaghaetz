import React, { useEffect, useState } from 'react';

import { Button, Flex, useMediaQuery } from '@chakra-ui/react';

import ArrowLeft from '../svg/ArrowLeft';
import ArrowRight from '../svg/ArrowRight';

const PaginationDisplay = ({ total, setTotal, page, setPage }) => {
	const [buttonsArr, setButtonsArr] = useState([]);

	const [countPages, setCountPages] = useState();

	const [isLargerThan1278] = useMediaQuery('(min-width: 1278px)');

	let limit = 4;

	useEffect(() => {
		total && setTotal(total);
	}, [setTotal, total]);

	useEffect(() => {
		setCountPages(Math.ceil(total / limit));
		const pages = Array.from({ length: countPages }, (_, index) => index + 1);
		setButtonsArr(pages);
	}, [countPages, limit, total]);

	const handlePageChange = newPage => {
		!isLargerThan1278 && window.scrollTo({ top: 0, behavior: 'smooth' });

		setPage(newPage);
	};

	const hasPrev = parseInt(page) > 1;

	const hasNext =
		parseInt(limit) * (parseInt(page) - 1) + parseInt(limit) < total;

	if (countPages > 1)
		return (
			<Flex dir={'ltr'} justifyContent="center">
				<Button
					aria-label="previous page"
					key={'next'}
					variant={'ghost'}
					visibility={hasPrev ? 'visible' : 'hidden'}
					transition={'all 0.1s'}
					fill={'white'}
					stroke={'white'}
					_hover={{
						transform: 'translateX(-5px)',
						bg: 'none',
						fill: '#a98841',
						stroke: '#a98841',
					}}
					onClick={() => handlePageChange(page - 1)}
				>
					<ArrowLeft />
				</Button>
				{buttonsArr.map(pageNumber => (
					<Button
						aria-label={`page ${pageNumber}`}
						key={pageNumber}
						variant={'ghost'}
						fontSize={'14px'}
						color={'white'}
						borderRadius={'0'}
						transition={'all 0.1s'}
						_hover={{
							color: '#a98841',
							bg: 'none',
						}}
						borderBottom={page === pageNumber ? '2px #a28445 solid' : ''}
						onClick={() => handlePageChange(pageNumber)}
					>
						{pageNumber}
					</Button>
				))}
				<Button
					aria-label="previous page"
					key={'prev'}
					variant={'ghost'}
					transition={'all 0.1s'}
					fill={'white'}
					stroke={'white'}
					_hover={{
						bg: 'none',
						fill: '#a98841',
						stroke: '#a98841',
					}}
					visibility={hasNext ? 'visible' : 'hidden'}
					onClick={() => {
						handlePageChange(page + 1);
					}}
				>
					<ArrowRight />
				</Button>
			</Flex>
		);
};

export default PaginationDisplay;
