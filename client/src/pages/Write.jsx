import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Write = () => {
	const [value, setValue] = useState("");
	return (
		<div className="flex z-30 justify-center p-5">
			<div className="w-3/4 h-auto items-center   ">
				<input
					type="text"
					placeholder="Title"
					className="input text-3xl w-full"
				/>
				<ReactQuill theme="snow" value={value} onChange={setValue} />
			</div>
			<div className="justify-end flex flex-col gap-5  p-5">
				<h1>publish</h1>
				<p>
					status: <b>draft</b>{" "}
				</p>
				<p>
					visibility : <b>public</b>
				</p>
				<input type="file" className="file-input w-full max-w-xs" />
				<button className="btn ">Save as Draft</button>
				<button className="btn bg-amber-400">update</button>
				<div>
          <h3>Category</h3>
          <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Blue pill</span> 
    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
  </label>
</div>
<div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Art</span> 
    <input type="radio" name="radio-10" value="art" id="art" className="radio checked:bg-blue-500" checked />
  </label>
</div><div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Blue pill</span> 
    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
  </label>
</div>
        </div>
			</div>
		</div>
	);
};
export default Write;
