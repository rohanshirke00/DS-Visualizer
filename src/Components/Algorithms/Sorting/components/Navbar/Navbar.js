import React from "react";
import "./Navbar.css";

const Navbar = ({
	handleLength,
	handleSpeed,
	handleAlgo,
	generateRandomArray,
	handleSort,
	sorting,
	completed,
	len,
	speed,
	algo
}) => {
	return (
		<nav>
			{/* <div className="nav-brand">Sorting Visualizer</div> */}

			<div className="toolbox">
				<div>
					<select onChange={handleAlgo} disabled={sorting} value={algo}>
						<option value="bubbleSort">Bubble Sort</option>
						<option value="insertionSort">Insertion Sort</option>
						<option value="selectionSort">Selection Sort</option>
						<option value="mergeSort">Merge Sort</option>
						<option value="quickSort">Quick Sort</option>
					</select>
                    
				</div>

				<div>
					<button onClick={generateRandomArray} disabled={sorting}>
						Randomize
					</button>
					<button onClick={handleSort} disabled={sorting || completed}>
						Sort
					</button>
				</div>
                <div className="group length">
						<label>Length</label>
						<select onChange={handleLength}>
							<option value="5">5</option>
							<option value="10">10</option>
							<option value="20">20</option>
							<option value="30">30</option>
							<option value="40">40</option>
							<option value="50">50</option>
						</select>
					</div>
                    <div className="group speed">
						<label>Speed</label>
						<input
							type="range"
							onChange={handleSpeed}
							min="1"
							max="10"
							value={Math.ceil(400 / speed)}
							disabled={sorting}
						></input>
					</div>
			</div>
		</nav>
	);
};

export default Navbar;
