import React, {  useEffect,useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, LineElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

// Registering Chart.js components and plugins
ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, LineElement, ArcElement, Title, Tooltip, Legend);

// Options for the bar chart
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Users Bar Chart",
    },
  },
  scales: {
    y: {
      ticks: {
        beginAtZero: true,
        stepSize: 1,
        precision: 0,
      },
    },
  },
};

const AdminDashboard = (props) => {
  const [users, setUsers] = useState([]);
  const [intervalType, setIntervalType] = useState("day");

  console.log(props.allParents.allParents)
  useEffect(() => {
    setUsers(props.allParents.allParents);
  }, [props.allParents.allParents]);

  // Calculate the number of users for each interval type (day, week, month)
  const getIntervalUsers = () => {
    let intervalUsers = {};
    console.log(users)

    users.forEach((user) => {
      const date = new Date(user.createdAt
        );
      let intervalDate;

      if (intervalType === "day") {
        intervalDate = date.toLocaleDateString();
      } else if (intervalType === "week") {
        const weekNumber = getWeekNumber(date);
        intervalDate = `Week ${weekNumber}`;
      } else if (intervalType === "month") {
        intervalDate = `${date.toLocaleString("default", {
          month: "long",
        })} ${date.getFullYear()}`;
      }

      if (intervalUsers[intervalDate]) {
        intervalUsers[intervalDate]++;
      } else {
        intervalUsers[intervalDate] = 1;
      }
    });

    return intervalUsers;
  };

  // Calculate the week number for a given date
  const getWeekNumber = (date) => {
    const oneJan = new Date(date.getFullYear(), 0, 1);
    const millisecsInDay = 86400000;
    return Math.ceil(
      ((date - oneJan) / millisecsInDay + oneJan.getDay() + 1) / 7
    );
  };

  // Handle interval change
  const handleIntervalChange = (event, value) => {
    setIntervalType(value);
  };

  // Labels for interval buttons
  const intervalLabels = {
    day: "Per Day",
    week: "Per Week",
    month: "Per Month",
  };

  // Generate interval users data for the bar chart
  const intervalUsers = getIntervalUsers();
  const labels = Object.keys(intervalUsers).sort(
    (a, b) => new Date(a) - new Date(b)
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Users",
        data: labels.map((date) => intervalUsers[date]),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  // ------------------------------------------------------------
  
  // Calculate the number of users for each role
  const getUsersByRole = () => {
    const roleCounts = {};

    users.forEach((user) => {
      if (roleCounts[user.role]) {
        roleCounts[user.role]++;
      } else {
        roleCounts[user.role] = 1;
      }
    });

    const roles = Object.keys(roleCounts);
    const data = roles.map((role) => roleCounts[role]);
    const colors = roles.map((role) => getRandomColor());

    return {
      labels: roles,
      datasets: [
        {
          data,
          backgroundColor: colors,
        },
      ],
    };
  };

  // Generate random color for the doughnut chart
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Generate data for the doughnut chart
  const dataUser = getUsersByRole();

  const options1 = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Users by Role",
      },
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div>
      <div>
        {/* Render interval buttons */}
        {Object.keys(intervalLabels).map((key) => (
          <button
            key={key}
            onClick={(event) => handleIntervalChange(event, key)}
          >
            {intervalLabels[key]}
          </button>
        ))}
      </div>
      <div style={{ width: "800px", height: "600px" }}>
        {/* Render the bar chart */}
        <Bar data={data} options={options} />
      </div>
      <div style={{ width: "800px", height: "600px" }}>
        {/* Render the doughnut chart */}
        <Doughnut data={dataUser} options={options1} />
      </div>
    </div>
  );
};

export default AdminDashboard;
