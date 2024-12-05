# Falling Snow Effect

Add a simple, elegant, falling snow effect to any section on your website. Happy Holidays!

## Features

- Easy to use: Just add a class to any section of your website.
- Customizable: Control the number of snowflakes, their size, and speed.
- Lightweight and responsive.


## Installation

1. Include the plugin in your HTML by linking to the JavaScript file.  
   Add this script tag in the `<head>` or before the closing `<body>` tag:

   ```html
   <script src="https://raw.githubusercontent.com/Peak-Media-Development/falling-snow/refs/heads/main/script.js"></script>

2. Add the `falling-snow` class to the section or div where you want the effect to appear:

    ```html
    <div class="falling-snow">
        <!-- Your content here -->
    </div>


## Available Options

| Attribute            | Default value | Description                              |
|----------------------|---------------|------------------------------------------|
| `data-snowflakes`    | 100           | Number of snowflakes                    |
| `data-snowflake-size`| 4             | Maximum size of snowflakes (in pixels)  |
| `data-speed`         | 1.5             | Falling speed of the snowflakes         |


#### Example

```html
<div class="falling-snow" 
     data-snowflakes="120" 
     data-snowflake-size="3" 
     data-speed="2">
    <!-- Your content here -->
</div>
