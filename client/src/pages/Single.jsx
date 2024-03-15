import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
const Single = () => {
	return (
		<div className="flex  justify-center p-5">
			<div className="card  bg-base-100 shadow-xl rounded-lg overflow-hidden">
				<figure>
					<img
						src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
						alt="Shoes"
						className="rounded-t-xl"
					/>
				</figure>
				<div className="card-body">
					<div className="flex items-center  ml-0">
						{" "}
						{/* Adjusted flex and added margin for alignment */}
						<div className="w-20 h-20 rounded-full overflow-hidden">
							<img
								src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
								alt="Avatar"
								className="object-cover w-full h-full"
							/>
						</div>
						<div className=" ml-3">
							<h2 className="text-xl font-semibold">John</h2>
							<p className="text-gray-600">Posted 2 days ago</p>
						</div>
					</div>
					<div className="flex gap-2 justify-center">
						<Link to={`/write?edit=2`}>
							<FaRegEdit className="text-2xl  pt-1 cursor-pointer" />
						</Link>
						<MdDelete className="text-2xl  pt-1 cursor-pointer" />
					</div>
					<div className="mt-4 ml-4">
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
							adipisci deserunt, nisi similique nemo minima unde, hic tenetur
							alias ea, pariatur enim eum repellat perferendis aspernatur? Quod,
							accusantium? Sed fuga eum quae magnam voluptatum neque odit labore
							debitis dolore ratione velit repellendus deserunt similique animi
							nisi facere veritatis dignissimos possimus ipsa, sunt repudiandae
							ipsam provident explicabo? Eos est eum pariatur aut suscipit enim
							quidem sunt at, inventore expedita explicabo minus repellat
							voluptates quam cum odio. Repudiandae, sit delectus maxime
							laudantium inventore eius numquam ducimus dicta temporibus
							consectetur corrupti sint esse nobis rerum quasi alias sunt
							tempore earum doloremque, ullam quas sed. Facilis aliquid illo
							modi accusantium ad! Nobis fugiat, dolorem eius facere placeat
							quos cum officia rerum nam ea iure doloremque provident, doloribus
							minima laboriosam soluta sequi dolor voluptas est esse dolore?
							Commodi ab eum eius neque nostrum atque magnam ipsam sint
							recusandae rerum voluptatum sit, veritatis cum, repellendus
							repellat! Possimus minus ab fuga. Quo rem aliquam totam doloribus
							similique tempora libero aliquid ipsum eligendi. Sit fugiat fugit
							doloremque est minus nostrum eum facilis, sapiente fuga
							consequatur alias nobis ea praesentium, quam voluptatem suscipit
							dicta accusantium. Pariatur, nostrum veritatis ratione illum
							possimus id officiis alias quis voluptate. Dolor deleniti debitis
							laboriosam natus recusandae quibusdam. Omnis magnam magni illum
							hic repellendus nulla doloribus tempore minima, ex voluptatem
							cumque officia, aliquid autem enim voluptatibus id quisquam veniam
							ullam distinctio similique. Nihil vel maiores amet debitis quo ea
							consequatur rem, dolorem ipsa quae sunt non asperiores adipisci
							tempora consequuntur laboriosam perferendis delectus libero enim
							natus, sint laudantium blanditiis. Nostrum libero expedita porro
							voluptate aut earum quia, minima nemo incidunt! Quaerat obcaecati
							maiores libero cupiditate amet unde earum commodi, odit asperiores
							soluta autem et maxime porro quo reiciendis quisquam quae
							quibusdam minima, in expedita temporibus! Consectetur, rem
							reiciendis magnam quas perspiciatis quos molestiae impedit.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Single;
