# Google Doc Character Grid Renderer

This project is a JavaScript-based solution for retrieving, parsing, and visually displaying character data from a Google Document. By specifying `x` and `y` coordinates for each character in a table format, the code reconstructs a graphic representation by placing each character at its designated location within a 2D grid.

## Features

- **Fetches Data from Google Docs**: Retrieves HTML content from a public Google Doc URL.
- **HTML Parsing with Cheerio**: Utilizes Cheerio to parse and extract character data from an HTML table.
- **Character Grid Rendering**: Creates a grid based on parsed coordinates, filling unspecified spaces with blanks, and displaying characters as specified.
- **Graphical Output**: Prints a fixed-width grid, where characters are positioned according to the parsed coordinates, forming a visual display of uppercase letters or symbols.

## Requirements

- **Node.js**: Requires Node.js and npm to be installed.
- **Cheerio**: Uses the Cheerio library to parse HTML content.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/google-doc-character-grid-renderer.git
   ```
2. Navigate to the project directory:
   ```bash
   cd secret-code
   ```
3. Install the dependencies:
   ```bash
   npm install cheerio
   ```

## Usage

1. Replace the `url` variable in `fetchGoogleDoc(url)` with a public Google Doc URL containing the input data.
2. Run the script:
   ```bash
   node script.js
   ```

## Example Data Format

The Google Doc should contain a table with three columns:
- Column 1: `x` coordinate (horizontal position)
- Column 2: `Character` (character to display)
- Column 3: `y` coordinate (vertical position)

For example:
| x  | Character | y  |
|----|-----------|----|
| 0  | A         | 1  |
| 1  | B         | 2  |

This would display:
```
 A  
  B 
```

## How It Works

1. **Fetch HTML Content**: The `fetchGoogleDoc` function retrieves HTML content from the Google Doc URL.
2. **Parse Data**: Cheerio loads and parses each table row to extract `x` and `y` coordinates and the character.
3. **Build the Grid**: A 2D grid is initialized with spaces, and each character is placed at its specified `(x, y)` position.
4. **Display the Grid**: The grid is printed line by line, displaying characters based on the input layout.

## Project Structure

- **script.js**: Main script containing the `fetchGoogleDoc` function.
- **README.md**: Project documentation.

## Example Output

Given input data specifying coordinates, the output might resemble:
```
████████░     ████████░   ██████████░    ███████░     ██░     ██░     ███░    ███░ ██░     ██░
██░     ██░ ███░     ███░ ██░          ███░    ██░   ████░   ████░      ██░  ██░   ██░     ██░
██░     ██░ ██░       ██░ ██░         ███░           ██░██░ ██░██░       ██░██░    ██░     ██░
████████░   ██░       ██░ ████████░   ██░           ███░ ██░██░ ██░       ███░     ██████████░
██░     ██░ ██░       ██░ ██░         ███░          ██░  █████░ ███░     ██░██░    ██░     ██░   
██░     ██░ ███░     ███░ ██░          ███░    ██░ ███░   ███░   ██░    ██░  ██░   ██░     ██░   
████████░     ████████░   ██████████░    ███████░  ██░           ███░ ███░    ███░ ██░     ██░ 
```

## License

None
