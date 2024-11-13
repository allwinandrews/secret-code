const cheerio = require("cheerio");

// Main function to fetch and parse the Google Doc data
async function fetchGoogleDoc(url) {
  try {
    // Fetch the HTML content from the provided URL
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the HTML content with Cheerio
    const html = await response.text();
    const $ = cheerio.load(html);

    // Variables to track the maximum x and y coordinates for grid sizing
    let maxX = 0;
    let maxY = 0;
    const data = []; // Array to hold parsed data with x, y, and character

    // Parse each row in the table
    $("table tr").each((i, row) => {
      const cells = $(row).find("td");

      // Ensure each row has three cells (x-coordinate, character, y-coordinate)
      if (cells.length === 3) {
        const x = parseInt($(cells[0]).text().trim(), 10); // x-coordinate
        const character = $(cells[1]).text().trim(); // character
        const y = parseInt($(cells[2]).text().trim(), 10); // y-coordinate

        // Only add to data if both x and y are valid numbers
        if (!isNaN(x) && !isNaN(y)) {
          data.push({ x, y, character });

          // Update maxX and maxY to determine grid size
          if (x > maxX) maxX = x;
          if (y > maxY) maxY = y;
        }
      }
    });

    // Initialize the grid with spaces, sized based on maxX and maxY
    const grid = Array.from({ length: maxY + 1 }, () =>
      Array(maxX + 1).fill(" ")
    );

    // Populate the grid with characters from the data array
    data.forEach(({ x, y, character }) => {
      grid[y][x] = character;
    });

    // Print the grid row by row, joining each row into a single string
    grid.forEach((row) => {
      console.log(row.join(""));
    });

    return data; // Return data as an array of coordinate-character objects for potential further use
  } catch (error) {
    console.error("Error fetching the document:", error); // Log any errors encountered
  }
}

// Usage example
// const url =
//   "https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub";
const url="https://docs.google.com/document/d/1R0G-ZwKEh3dCyzjCEXCpZEz0634ugUyVlulooeKVAbM/edit?usp=sharing"
  fetchGoogleDoc(url);
