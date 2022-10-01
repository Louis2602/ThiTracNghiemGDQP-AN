import React from 'react';
import { Container, Grid, Box, Link } from '@mui/material';

const Footer = () => {
	return (
		<Box bgcolor='text.secondary'>
			<Container maxWidth='lg'>
				<Grid container spacing={5}>
					<Grid item xs={12} sm={4}>
						<Box borderBottom={1}>Help</Box>
						<Box>
							<Link href='/' color='inherit'>
								Contact
							</Link>
						</Box>
						<Box>
							<Link href='/' color='inherit'>
								Support
							</Link>
						</Box>
						<Box>
							<Link href='/' color='inherit'>
								Privacy
							</Link>
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box borderBottom={1}>Help</Box>
						<Box>
							<Link href='/' color='inherit'>
								Contact
							</Link>
						</Box>
						<Box>
							<Link href='/' color='inherit'>
								Support
							</Link>
						</Box>
						<Box>
							<Link href='/' color='inherit'>
								Privacy
							</Link>
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box borderBottom={1}>Help</Box>
						<Box>
							<Link href='/' color='inherit'>
								Contact
							</Link>
						</Box>
						<Box>
							<Link href='/' color='inherit'>
								Support
							</Link>
						</Box>
						<Box>
							<Link href='/' color='inherit'>
								Privacy
							</Link>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;
