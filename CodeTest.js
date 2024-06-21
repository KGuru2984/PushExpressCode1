const { Builder, By, Key, until } = require('selenium-webdriver');

// Function to perform login validation with delays
async function validateLogin() {
    // Initialize the WebDriver (assuming you have Chrome WebDriver installed)
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        // Open the login page
        await driver.get('http://localhost:3000');

        // Enter username and password with delays
        const usernameInput = await driver.findElement(By.id('username'));
        await usernameInput.sendKeys('admin');
        await driver.sleep(1000); // Add delay of 1 second
        const passwordInput = await driver.findElement(By.id('password'));
        await passwordInput.sendKeys('password');
        await driver.sleep(1000); // Add delay of 1 second

        // Click on the login button with delay
        //const loginButton = await driver.findElement(By.tagName('button'));
        const loginButton = await driver.findElement(By.css('button[type="submit"]'));
        await loginButton.click();
        await driver.sleep(2000); // Add delay of 2 seconds

        // Wait for the dashboard page to load (assuming it redirects to /dashboard) with delay
        await driver.wait(until.urlContains('/dashboard'), 5000);
        await driver.sleep(2000); // Add delay of 2 seconds

        console.log('Login successful!');
    } catch (error) {
        console.error('Login failed:', error);
    } finally {
        // Close the browser window
        await driver.quit();
    }
}

// Call the function to perform login validation
validateLogin();
