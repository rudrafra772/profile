function fetchHealthCheck() {
    fetch('https://tms.work.gd/api/health_check/')  // Replace with your endpoint URL
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();  // Parse the JSON data
        })
        .then(data => {
            // Handle success, data contains the response
            console.log('Data received:', data);
            // You can update the UI here based on the received data
        })
        .catch(error => {
            // Handle error
            console.error('Error occurred:', error);
        });
}

// Call the function immediately to fetch data the first time
fetchHealthCheck();

// Set an interval to call the function every hour (3600000 milliseconds)
setInterval(fetchHealthCheck, 3600000);
