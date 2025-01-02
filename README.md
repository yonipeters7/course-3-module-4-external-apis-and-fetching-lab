
# Lab: External APIs and Fetching

## Introduction

As a junior developer at a tech company specializing in travel solutions, you are tasked with building a simple application to fetch and display weather data for a given city. This involves using external APIs, processing JSON data, and dynamically updating the DOM. Mastering these skills is essential for modern web development.

## Challenge

1. Fetch Weather Data from an API
2. Display Weather Data on the Page
3. Handle User Input
4. Implement Error Handling

## Bonus Challenge

5. Optimize Code for Maintainability

## Instructions

1. **Fork and Clone the Repository:**
   - Go to the provided GitHub repository link.
   - Fork the repository to your GitHub account.
   - Clone the forked repository to your local machine.
   - Open the project in VSCode.
   - Run `npm install` to install all necessary dependencies.

2. **Fetch Weather Data from an API**
   - Create a function `fetchWeatherData(city)` to make a GET request to the OpenWeather API.
   - Use the `fetch()` method to retrieve weather data based on the city name provided by the user.
   - Parse the JSON response and log the data to the console for testing.

3. **Display Weather Data on the Page**
   - Create a function `displayWeather(data)` that dynamically updates the DOM with weather details.
   - Include information such as temperature, humidity, and weather description.

4. **Handle User Input**
   - Attach an event listener to the button to capture the city name entered by the user.
   - Call `fetchWeatherData(city)` with the input value.

5. **Implement Error Handling**
   - Add error handling for invalid city names or network issues.
   - Display user-friendly error messages in a dedicated section of the page.

6. **BONUS CHALLENGE: Optimize Code for Maintainability**
   - Refactor repetitive code into reusable functions.
   - Use `async/await` for better readability and manageability.

## BONUS: Additional Features

Explore additional features to further improve the application:

### `loading` Indicator

Add a loading spinner while fetching data to improve user experience:

```js
function showLoadingSpinner() {
  spinnerElement.style.display = 'block';
}

function hideLoadingSpinner() {
  spinnerElement.style.display = 'none';
}
```

### Error Styling

Use CSS classes to style error messages dynamically:

```js
function displayError(message) {
  errorElement.textContent = message;
  errorElement.classList.add('error');
}
```

## Resources

- [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
- [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [append()](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)
- [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
