import { Stack } from '@mui/material';
import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
	return (
		<Stack className={styles.container}>
			<header className={styles.heading}>
				HỆ THỐNG THI THỬ TRẮC NGHIỆM MÔN GIÁO DỤC QUỐC PHÒNG - AN NINH
			</header>
			<img
				className={styles.photo}
				src='http://cdn.ttgdqp.xyz/upload/2/18690/4.jpg'
				alt='gdqp-an'
			/>
		</Stack>
	);
};

export default HomePage;
