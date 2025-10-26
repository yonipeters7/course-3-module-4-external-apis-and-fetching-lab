// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="

// Your code here!
// index.js
// Step 1: Fetch Alerts for a State from the API
function fetchWeatherAlerts(state) {
  fetch(`${weatherApi}${state}`)
    .then(response => {
      if (!response.ok) {
        // Show API/network error in the error-message div
        document.getElementById("error-message").textContent = `Error fetching alerts: ${response.status} ${response.statusText}`;
        document.getElementById("error-message").classList.remove("hidden");
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      // Clear error message and input field
      document.getElementById("error-message").textContent = "";
      document.getElementById("error-message").classList.add("hidden");
      document.getElementById("state-input").value = "";

      displayAlerts(data, state); // Step 2: Display alerts
    })
    .catch(error => {
      console.error("Error fetching weather alerts:", error.message);
      // Only show if not already displayed
      if (!document.getElementById("error-message").textContent) {
        document.getElementById("error-message").textContent = error.message;
        document.getElementById("error-message").classList.remove("hidden");
      }
    });
}

// Step 2: Display the Alerts on the Page
function displayAlerts(data, state) {
  const alertsDisplay = document.getElementById("alerts-display");
  alertsDisplay.innerHTML = ""; // Clear previous alerts

  if (!data.features || data.features.length === 0) {
    alertsDisplay.textContent = `No active alerts for ${state}.`;
    return;
  }

  // Summary message
  const summary = document.createElement("p");
  summary.textContent = `Current watches, warnings, and advisories for ${state}: ${data.features.length}`;
  alertsDisplay.appendChild(summary);

  // List of alerts
  const list = document.createElement("ul");
  data.features.forEach(alert => {
    const listItem = document.createElement("li");
    listItem.textContent = alert.properties.headline;
    list.appendChild(listItem);
  });
  alertsDisplay.appendChild(list);
}

// Step 4: Add event listener to button
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("fetch-alerts").addEventListener("click", () => {
    const stateInput = document.getElementById("state-input").value.trim().toUpperCase();
    if (!stateInput) {
      const errorDiv = document.getElementById("error-message");
      errorDiv.textContent = "Please enter a valid U.S. state abbreviation.";
      errorDiv.classList.remove("hidden");
      return;
    }
    fetchWeatherAlerts(stateInput);
  });
});
