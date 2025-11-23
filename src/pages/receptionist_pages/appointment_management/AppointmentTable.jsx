import React from "react";
import styles from "./appointment_managment_table.module.css";

export default function AppointmentTable() {
  const data = [
    {
      patient: "John Doe",
      doctor: "Dr. Emily Carter",
      datetime: "2024-10-26 10:00 AM",
      status: "Approved",
    },
    {
      patient: "Jane Smith",
      doctor: "Dr. Ben Adams",
      datetime: "2024-10-26 10:30 AM",
      status: "Pending",
    },
    {
      patient: "Peter Jones",
      doctor: "Dr. Emily Carter",
      datetime: "2024-10-26 11:00 AM",
      status: "Checked-in",
    },
    {
      patient: "Susan Miller",
      doctor: "Dr. Chloe Davis",
      datetime: "2024-10-26 11:15 AM",
      status: "Rejected",
    },
    {
      patient: "Michael Brown",
      doctor: "Dr. Ben Adams",
      datetime: "2024-10-26 11:45 AM",
      status: "Pending",
    },
     {
      patient: "John Doe",
      doctor: "Dr. Emily Carter",
      datetime: "2024-10-26 10:00 AM",
      status: "Approved",
    },
    {
      patient: "Jane Smith",
      doctor: "Dr. Ben Adams",
      datetime: "2024-10-26 10:30 AM",
      status: "Pending",
    },
    {
      patient: "Peter Jones",
      doctor: "Dr. Emily Carter",
      datetime: "2024-10-26 11:00 AM",
      status: "Checked-in",
    },
    {
      patient: "Susan Miller",
      doctor: "Dr. Chloe Davis",
      datetime: "2024-10-26 11:15 AM",
      status: "Rejected",
    },
    {
      patient: "Michael Brown",
      doctor: "Dr. Ben Adams",
      datetime: "2024-10-26 11:45 AM",
      status: "Pending",
    },
  ];

  return (
    <div className={styles.tableWrapper}>
    <div className={styles.headerBackground}></div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>PATIENT NAME</th>
            <th>DOCTOR</th>
            <th>DATE & TIME</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className={styles.patient}>{item.patient}</td>
              <td>{item.doctor}</td>
              <td>{item.datetime}</td>
              <td>
                <span className={`${styles.status} ${styles[item.status.toLowerCase()]}`}>
                  {item.status}
                </span>
              </td>
              <td>
                <button className={styles.moreBtn}>⋯</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
