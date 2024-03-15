const Home = () => {
	// const [posts, setPosts] = useState([]);

	const posts = [
		{
			id: 1,
			title: "captured",
			desc: "sweet tent brother why according finest differ master individual consist energy rays room leg bound exact seems into give board golden roll atom visitor",
			img: "https://images.unsplash.com/photo-1559703248-dcaaec9fab78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2JqZWN0fGVufDB8fDB8fHww",
		},
		{
			id: 5,
			title: "captured2",
			desc: "sweet tent brother why according finest differ master individual consist energy rays room leg bound exact seems into give board golden roll atom visitor",
			img: "https://images.unsplash.com/photo-1516410529446-2c777cb7366d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRhcmt8ZW58MHx8MHx8fDA%3D",
		},
		{
			id: 2,
			title: "seven",
			desc: "beneath specific fun sets throw related badly buffalo lower dirty ship leaving your worse travel center shape addition home last porch cake street queen",
			img: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2JqZWN0fGVufDB8fDB8fHww",
		},
		{
			id: 3,
			title: "basic",
			desc: "ahead ourselves bowl environment especially beyond pond pony winter hide compass fill hat mighty appropriate sound noun yourself soldier your blind son milk greatest",
			img: "https://images.unsplash.com/photo-1550403089-f09a746cd003?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGJhc2ljfGVufDB8fDB8fHww",
		},
		{
			id: 4,
			title: "dot",
			desc: "cabin ocean settle ranch broad saved care begun coffee frequently finally smell plates though dawn led vapor gravity art tea information else cell exist",
			img: "https://images.unsplash.com/photo-1501951653466-8df816debe46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG9iamVjdHxlbnwwfHwwfHx8MA%3D%3D",
		},
	];
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{posts.map((post) => (
				<div
					key={post.id}
					className="bg-white shadow-xl rounded-lg overflow-hidden"
				>
					<figure>
						<img
							src={post.img}
							alt={post.title}
							className="w-full h-64 object-cover object-center"
						/>
					</figure>
					<div className="p-4">
						<h2 className="text-lg font-semibold mb-2">{post.title}</h2>
						<p className="text-gray-700">{post.desc}</p>
						<div className="mt-4">
							<span className="inline-block bg-blue-500 text-white px-2 py-1 text-sm font-semibold rounded-md">
								NEW
							</span>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
export default Home;
