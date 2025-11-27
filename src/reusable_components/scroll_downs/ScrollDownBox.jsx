import { useState } from "react";
import styles from "./scrolldown_box.module.css";

export default function ScrollDownBox({ label, options, setLabel }) {
	const [open, setOpen] = useState(false);

	// Calculate max width of the options we got here:
	let max_width = 0;

	for (let word of options){
		const len = word.length;
		const width_of_word = len * 9;

		if (max_width < width_of_word) max_width = width_of_word;
	}

	return (
		<div className={styles.dropdownBox}>
			{/* Header */}
			<div className={styles.dropdownHeader}
				onClick={() => setOpen(!open)}
				style={{width: `${max_width}px`}}
			>
				<span>{label}</span>
				<span className={styles.arrow}>{open ? "▲" : "▼"}</span>
			</div>

			{/* Options List */}
			{open && (
				<div className={styles.dropdownMenu}>
					{options.map((opt, index) => (
						<div key={index} className={styles.dropdownItem} onClick={() => setLabel(opt)}>
							{opt}
						</div>
					))}
				</div>
			)}
		</div>
	);
}
