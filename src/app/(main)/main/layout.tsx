function MainLayout({
	children,
	sideBar,
	left,
	right,
}: {
	children: React.ReactNode;
	sideBar: React.ReactNode;
	left: React.ReactNode;
	right: React.ReactNode;
}) {
	return (
		<div className="min-h-screen min-w-1295  ">
			{sideBar}
			<div className="flex flex-row grow  w-full min-h-screen  bg-black overflow-auto">
				{left}
				{right}
			</div>
		</div>
	);
}
export default MainLayout;
