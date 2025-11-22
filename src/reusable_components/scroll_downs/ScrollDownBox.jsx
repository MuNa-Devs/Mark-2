import { useState } from "react";
import styles from "./scrolldown_box.module.css";

export default function ScrollDownBox({ label, options }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.dropdownBox}>
      {/* Header */}
      <div className={styles.dropdownHeader} onClick={() => setOpen(!open)}>
        <span>{label}</span>
        <span className={styles.arrow}>{open ? "▲" : "▼"}</span>
      </div>

      {/* Options List */}
      {open && (
        <div className={styles.dropdownMenu}>
          {options.map((opt, index) => (
            <div key={index} className={styles.dropdownItem}>
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
