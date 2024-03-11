export default function LoginLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<nav></nav>
			{children}
		</div>
	);
}
