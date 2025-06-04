$(document).ready(function () {
  // Sidebar navigation
  $(".sidebar-nav .nav-link").click(function (e) {
    e.preventDefault();
    $(".sidebar-nav .nav-link").removeClass("active");
    $(this).addClass("active");
  });

  // Search functionality
  $(".search-box input").on("keyup", function () {
    const searchTerm = $(this).val().toLowerCase();
    console.log("Searching for:", searchTerm);
  });

  const toggleBtn = document.getElementById("toggleSidebar");
  const sidebar = document.getElementById("sidebar");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  // Initialize Charts
  initializeCharts();

  // Interactive job card checkbox
  $(".job-card .form-check-input").change(function () {
    const isChecked = $(this).is(":checked");
    const jobCard = $(this).closest(".job-card");
    jobCard.css("opacity", isChecked ? "1" : "0.6");
  });

  // Add job post button
  $(".btn-add").click(function () {
    alert("Add new job post functionality would be implemented here");
  });

  // Dropdown toggle
  $(".dropdown-toggle").click(function (e) {
    e.preventDefault();
    console.log("Dropdown clicked");
  });

  // Profile dropdown toggle
  $(".user-profile").click(function () {
    console.log("Profile menu clicked");
  });

  // Reminder notifications hover effect
  $(".reminder-item").hover(
    function () {
      $(this).css("transform", "translateX(5px)");
    },
    function () {
      $(this).css("transform", "translateX(0)");
    }
  );

  // Upgrade button
  $(".upgrade-card .btn").click(function () {
    alert("Upgrade to Premium functionality would be implemented here");
  });

  // Animate progress bars
  setTimeout(function () {
    $(".stat-bar").each(function () {
      const width = $(this).css("width");
      $(this).css("width", "0").animate({ width: width }, 1000);
    });
  }, 500);

  // Simulate real-time data updates
  setInterval(function () {
    const randomIncrease = Math.floor(Math.random() * 5) + 1;
    const currentTotal = parseInt($(".stat-card h3").first().text());
    // Simulated data update
    console.log("Simulating data update: +" + randomIncrease);
    // You can update DOM elements here if needed
  }, 30000);
});

function initializeCharts() {
  // Total Applications Chart
  new Chart(document.getElementById("totalChart").getContext("2d"), {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [74, 26],
          backgroundColor: ["#7001fd", "#e2e8f0"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      cutout: "70%",
    },
  });

  // Gender Distribution Chart
  new Chart(document.getElementById("genderChart").getContext("2d"), {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [60, 40],
          backgroundColor: ["#6366f1", "#f97316"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: { legend: { display: false } },
      cutout: "60%",
    },
  });

  // Shortlisted Chart
  new Chart(document.getElementById("shortlistedChart").getContext("2d"), {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [65, 35],
          backgroundColor: ["#eab308", "#e2e8f0"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      cutout: "70%",
    },
  });

  // Rejected Chart
  new Chart(document.getElementById("rejectedChart").getContext("2d"), {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [46, 54],
          backgroundColor: ["#f97316", "#e2e8f0"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      plugins: { legend: { display: false } },
      cutout: "70%",
    },
  });

  // Weekly Applications Bar Chart
  const ctx3 = document.getElementById("applicationChart").getContext("2d");

  new Chart(ctx3, {
    type: "bar",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Applications",
          data: [20, 18, 22, 20, 25, 24, 20],
          backgroundColor: "#7001fd", // Indigo
          borderRadius: 6,
          barThickness: 10,
        },
        {
          label: "Shortlisted",
          data: [20, 18, 20, 15, 20, 22, 18],
          backgroundColor: "#eab308", // Yellow
          borderRadius: 6,
          barThickness: 10,
        },
        {
          label: "Rejected",
          data: [25, 25, 28, 25, 30, 28, 30],
          backgroundColor: "#f97316", // Orange
          borderRadius: 6,
          barThickness: 10,
        },
        {
          label: "On Hold",
          data: [15, 14, 15, 10, 15, 16, 12],
          backgroundColor: "#e0e7ff", // Light gray/blue
          borderRadius: 6,
          barThickness: 10,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false,
        },

        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y}%`,
          },
        },
        // 👇 If using chartjs-plugin-datalabels
        datalabels: {
          display: false,
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            drawBorder: false,
            drawOnChartArea: false,
          },
          ticks: {
            display: true,
          },
        },
        y: {
          stacked: true,
          grid: {
            drawBorder: false,
          },
          beginAtZero: true,
          max: 100,
          ticks: {
            display: true,
          },
        },
      },
    },
  });

  const ctx = document.getElementById("timeChart").getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, "rgba(255, 99, 132, 0.4)");
  gradient.addColorStop(1, "rgba(255, 99, 132, 0)");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM"],
      datasets: [
        {
          label: "Applications Received",
          data: [50, 65, 60, 70, 70, 85, 80],
          fill: true,
          backgroundColor: gradient,
          borderColor: "orange",
          tension: 0.4,
          pointBackgroundColor: function (context) {
            // Highlight the peak point
            return context.dataIndex === 3 ? "red" : "orange";
          },
          pointRadius: function (context) {
            return context.dataIndex === 3 ? 6 : 3;
          },
        },
      ],
    },
    options: {
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.parsed.y}%`,
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            drawBorder: false,
            drawOnChartArea: false,
          },
          ticks: {
            display: true,
          },
        },
        y: {
          beginAtZero: true,

          ticks: {
            callback: (value) => `${value}%`,
          },
        },
      },
    },
  });
}
