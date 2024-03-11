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
		<div className="min-h-screen w-full  min-w-1295 bg-black overflow-clip ">
			<div className="max-h-screen w-[396px] bg-gray-50 float-left overflow-x-hidden overflow-y-clip">
				<div className="w-full h-[100px]">header</div>
				<div className=" max-h-screen bg-red-50 flex overflow-x-scroll overflow-y-clip">
					<div className="  grow 1 bg-blue-50 min-w-[300px] overflow-y-scroll ">
						<div className=" h-[10000px] w-full bg-purple-50  ">hello</div>
					</div>
				</div>
			</div>
			<div className=" max-h-screen bg-red-50 flex overflow-x-scroll overflow-y-clip">
				<div className="  grow 1 bg-blue-50 min-w-[300px] overflow-y-scroll ">
					<div className=" h-[10000px] w-full bg-purple-50  ">hello</div>
				</div>
				<div className="grow 1 bg-yellow-50 min-w-[300px] overflow-y-scroll ">
					<div className=" h-[10000px] w-full bg-purple-50  ">bye</div>
				</div>
			</div>
		</div>

		// <div className="min-h-screen w-full min-w-1295 flex">
		// 	{sideBar}
		// 	<div className="grow 1">
		// 		{left}
		// 		{right}
		// 	</div>
		// </div>
	);
}
export default MainLayout;
