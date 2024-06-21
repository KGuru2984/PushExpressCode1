const { Builder, By, until } = require('selenium-webdriver');

(async function() {
  // Create a WebDriver instance
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to your Angular application
    await driver.get('http://localhost:4200'); // Update the URL if needed

    // Wait for the product list to be rendered
    await driver.wait(until.elementLocated(By.css('app-product-list')), 5000);

    // Wait for 3 seconds to ensure all product names are loaded
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Get the list of product names
    const productElements = await driver.findElements(By.css('app-product-list li'));
    const productNames = await Promise.all(productElements.map(async element => {
      return await element.getText();
    }));

    // Output the product names
    console.log('Product Names:');
    productNames.forEach(name => console.log(name));
  } finally {
    // Close the browser
    await driver.quit();
  }
})();
