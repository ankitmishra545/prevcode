import React, { useState } from "react";
import "./css/home.css";

const attendanceDetailsColumns = [
  "#",
  "Date",
  "Day type",
  "Check In",
  "Check Out",
  "Time Spent",
  "Spent Summary",
  "Points Earned",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const profileTableData = [
  { "Total Days": 1111 },
  { "Working Days": 847 },
  { Leaves: "0 days" },
  { Absents: "842 days" },
  { "Days Attended": "5 days" },
  { "Updates Sent": "5 days" },
  { "Working Hours": "5 times" },
  { "Worked Hours": "6776:00:00" },
  { "Overall Spent Summary": "120:00:00" },
  { "Worked Per day(Avg.Hrs)": "-6656:60:60" },
  { "Shortage Per day(Avg.Hrs)": "00:08:30(2%)" },
  { "Late to Office": "07:51:29(98%)" },
  { "Minimum Hrs Missed": "0 times" },
  { "Max Points": "25410" },
  { "Points Earned": "-25110" },
  { "Your Performance Score": "-98.8194%" },
];

const attendanceDetailsData = [
  {
    dayType: "ClassLab",
    checkIn: "10:00:00",
    checkOut: "18:00:00",
    timeSpent: "08:00:00",
    spentSummary: "00:00:00",
    pointsEarned: 30,
  },
  {
    dayType: "Holiday",
    checkIn: "Corona Virus Lockdown Holiday",
    checkOut: "",
    timeSpent: "",
    spentSummary: "",
    pointsEarned: "",
  },
  {
    dayType: "Holiday",
    checkIn: "Some Festive Holiday",
    checkOut: "",
    timeSpent: "",
    spentSummary: "",
    pointsEarned: "",
  },
  {
    dayType: "JustLab",
    checkIn: "Absent",
    checkOut: "",
    timeSpent: "00:00:00",
    spentSummary: "-08:00:00",
    pointsEarned: "-30",
  },
  {
    dayType: "ClassLab",
    checkIn: "Absent",
    checkOut: "",
    timeSpent: "00:00:00",
    spentSummary: "-08:00:00",
    pointsEarned: "-30",
  },
];

const ProfileTable = () => {
  return (
    <table className="profile-table">
      <caption>
        <i className="bi bi-sliders"></i>
        <span id="captionText">Attendance Summary </span>
      </caption>
      <tbody>
        {profileTableData.map((detail, index) => {
          const key = Object.keys(detail)[0];
          return (
            <tr>
              <th>{key}</th>
              <td>{detail[key]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const AttendanceDetailsTable = () => {
  return (
    <>
      <table className="attendance-details-table">
        <thead>
          <tr>
            {attendanceDetailsColumns.map((column) => (
              <th>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {attendanceDetailsData.map((attendance, index) => {
            const arrayLength = attendanceDetailsData.length;
            const newDate = new Date(
              new Date().setDate(new Date().getDate() - index)
            );
            const day = newDate.getDay();
            const fullDate = `${days[day]}, ${newDate.getDate()}-${
              months[newDate.getMonth()]
            }-${newDate.getFullYear()}`;
            const isHoliday = day === 0;
            const isAbsent = !isHoliday && attendance.checkIn === "Absent";
            const absentClassName = isAbsent ? "absentCell" : "";
            const isOtherHoliday = attendance.dayType === "Holiday";
            return (
              <tr>
                <td>{arrayLength - index}</td>
                <td>{fullDate}</td>
                <td>{day === 0 ? "Holiday" : attendance.dayType}</td>
                <td
                  className={absentClassName}
                  style={{ textAlign: "center" }}
                  colSpan={isAbsent || isHoliday || isOtherHoliday ? 2 : ""}
                >
                  {isHoliday ? "Sunday Holiday" : attendance.checkIn}
                </td>
                {!(isAbsent || isHoliday || isOtherHoliday) && (
                  <td className={absentClassName}>
                    {isHoliday ? "" : attendance.checkOut}
                  </td>
                )}
                <td className={absentClassName}>
                  {isHoliday ? "" : attendance.timeSpent}
                </td>
                <td className={absentClassName}>
                  {isHoliday ? "" : attendance.spentSummary}
                </td>
                <td>{isHoliday ? "" : attendance.pointsEarned}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pt-2">
        Showing 1 to {attendanceDetailsData.length} of{" "}
        {attendanceDetailsData.length} entries
      </div>
    </>
  );
};

const Home = () => {
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(true);
  return (
    <div className="home-page-container">
      <div className="breadcrumb">
        <i class="bi bi-house-fill"></i> Home
      </div>
      <div className="profile-container d-flex  flex-wrap">
        <div className="d-flex flex-column justify-content-center px-5 py-3">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/MS_Dhoni_2016.jpg/800px-MS_Dhoni_2016.jpg"
              alt=""
            />
          </div>
          <ul className="pt-5">
            <li>MS Dhoni</li>
            <li>Profession: Cricket</li>
            <li>Jersey Number: Seven</li>
            <li>Teams: Bharat,CSK</li>
          </ul>
        </div>
        <div className="profile-table-container">
          <ProfileTable />
        </div>
      </div>
      <div className="attendance-details-container">
        <div className="attendance-accordian">
          <i className="bi bi-pencil-square" style={{ color: "#FFFFFF" }}>
            {" "}
            Attendance Details
          </i>
          <i
            title="Collapse/Expand"
            className={`bi bi-chevron-${isDetailsExpanded ? "down" : "up"}`}
            style={{ color: "#FFFFFF" }}
            onClick={() => setIsDetailsExpanded(!isDetailsExpanded)}
          ></i>
        </div>
        {isDetailsExpanded && (
          <div>
            <div className="table-form-field">
              <div className="label-input-container">
                <select>
                  {[5, 15, 25, "All"].map((option) => (
                    <option>{option}</option>
                  ))}
                </select>
                <label>records</label>
              </div>
              <div className="label-input-container">
                <label>My Search:</label>
                <input type="text" />
              </div>
            </div>
            <div className="attendance-details-table-container">
              <AttendanceDetailsTable />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
