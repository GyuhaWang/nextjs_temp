import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
	title: 'Simtomi Care',
	description: 'Developed by Mediark Inc',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	console.log('home layout');
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
