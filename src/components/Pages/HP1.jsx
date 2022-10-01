import {
	Box,
	Button,
	Checkbox,
	Grid,
	FormControl,
	FormControlLabel,
	FormGroup,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';

const contents = [
	{
		name: 'ĐL1',
		title: 'Đối tượng, nhiệm vụ, phương pháp nghiên cứu môn học',
	},
	{
		name: 'ĐL2',
		title: 'Đối tượng, nhiệm vụ, phương pháp nghiên cứu môn học',
	},
	{
		name: 'ĐL3',
		title: 'Đối tượng, nhiệm vụ, phương pháp nghiên cứu môn học',
	},
	{
		name: 'ĐL4',
		title: 'Đối tượng, nhiệm vụ, phương pháp nghiên cứu môn học',
	},
	{
		name: 'ĐL5',
		title: 'Đối tượng, nhiệm vụ, phương pháp nghiên cứu môn học',
	},
	{
		name: 'ĐL6',
		title: 'Đối tượng, nhiệm vụ, phương pháp nghiên cứu môn học',
	},
	{
		name: 'ĐL7',
		title: 'Đối tượng, nhiệm vụ, phương pháp nghiên cứu môn học',
	},
];

const HP1 = () => {
	const [subs, setSubs] = useState([]);

	const handleChange = (e) => {
		const index = subs.indexOf(e.target.value);
		if (index === -1) {
			setSubs([...subs, e.target.value]);
		} else {
			setSubs(subs.filter((sub) => sub !== e.target.value));
		}
	};
	return (
		<Grid
			container
			spacing={3}
			direction='column'
			alignItems='center'
			justifyContent='center'
			style={{ minHeight: '50vh' }}
		>
			<Grid item xs={12}>
				<Box>
					<FormControl>
						<Typography
							variant='h4'
							sx={{
								mt: 10,
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
								textAlign: 'center',
							}}
						>
							HỌC PHẦN 1: Đường lối quốc phòng và an ninh của Đảng
							Cộng sản Việt Nam
						</Typography>
						<Typography
							variant='h5'
							sx={{
								my: 4,
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'red',
								textDecoration: 'none',
								textAlign: 'center',
							}}
						>
							Chọn nội dung câu hỏi trắc nghiệm muốn làm
						</Typography>
						<FormGroup
							sx={{ display: 'flex', alignItems: 'center' }}
						>
							{contents.map((content) => (
								<FormControlLabel
									key={content.name}
									label={`${content.name} : ${content.title}`}
									control={
										<Checkbox
											value={content.name}
											checked={subs.includes(
												content.name
											)}
											onChange={handleChange}
										/>
									}
								></FormControlLabel>
							))}
						</FormGroup>
					</FormControl>
				</Box>
			</Grid>
			<Grid item xs={3}>
				<Button variant='contained' color='primary'>
					BẮT ĐẦU THI
				</Button>
			</Grid>
		</Grid>
	);
};

export default HP1;
