/*
Filename: ComplexCode.js
Content: A complex code that performs a variety of tasks, including data manipulation, DOM manipulation, API requests, and asynchronous operations.
*/

// Import required libraries
const axios = require('axios');

// Declare async function to demonstrate complex operations
async function performComplexTasks() {
  try {
    // Make an API request to fetch some data
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

    // Create a dynamic HTML table with the fetched data
    const table = document.createElement('table');
    table.className = 'my-table';
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Generate table headers dynamically
    const headers = Object.keys(posts[0]);
    const headerRow = document.createElement('tr');
    headers.forEach((headerText) => {
      const th = document.createElement('th');
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Generate table rows dynamically
    posts.forEach((post) => {
      const row = document.createElement('tr');
      Object.values(post).forEach((value) => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Insert the table into the DOM
    document.body.appendChild(table);

    // Perform an expensive calculation
    let result = 0;
    for (let i = 0; i <= 100000; i++) {
      result += i;
    }
    console.log('Calculation result:', result);

    // Simulate an asynchronous operation with a promise
    const msg = await new Promise((resolve, reject) => {
      setTimeout(() => resolve('Async operation is completed'), 2000);
    });
    console.log(msg);

    // Manipulate the fetched data - filter and sort posts
    const filteredPosts = posts.filter((post) => post.userId === 1);
    const sortedPosts = filteredPosts.sort((a, b) => b.id - a.id);
    console.log('Filtered and sorted posts:', sortedPosts);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Execute the complex task function
performComplexTasks();