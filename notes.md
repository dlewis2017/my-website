## Notes

### Responsive Design
- Fluid layout
- media queries
- responsive images
- correct units
- desktop-first vs mobile-first

### Maintainable and Scalable Code
- clean
- easy to understand
- growth
- reusable
- how to organize files, name classes, and structure HTML

### Web Performance
- less HTTP requests
- Less code
- compress code
- use a css preprocessor
- less images
- compress images

### OnLoad
- Load HTML --> Parse HTML --> DOM
- (from Parse HTML) Load CSS --> Parse CSS --> CSSOM
- (from DOM and CSSOM) Render tree --> website render

### Cascade 
- Resolving combined CSS that is conflicted
- Sources: Author (coder), User, Browser
- Importance: User `!important`, Author `!important`, Author declaration, User declaration, Default browser
- Specificity (per css blocks that effect the same element in DOM): inline, ID, class, elements (0,0,0,0) Highest number wins left to right
- When using 3rd party stylesheets, include your import last to ensure your changes take effect

### Standard font-size
- Use for scalability with mobile and standard (no need for media queries)
- Divide default html font-size (if px) by 10 to get rem
- So if we set `font-size: 10px;` in html tag then 10px = 1rem
- `font-size: 62.5%` in html tag then 62.5% = 10px (.625/16 = 10px)

### <strong>B</strong>lock <strong>E</strong>lement <strong>M</strong>odified
- Block: Standalone component
- Element: part of block
- Modifier: different version of block or element (e.g. --round)

### Sass
- Compiles css
- Variables, nesting, operators, partials and imports, mixins, functions, extends, control directives
- Sass different than SCSS (preserves original css syntax)
- Examples:
    - `$color-primary: #444`
    - When nesting, use & to get parent full path. E.g. A nested `&:first-child` inside an `li` === `li:first-child`. Using `:first-child` alone inside of an `li` === `li :first-child`
    - `darken($color,15%)`
    - mixin: specific content you would include in multiple locations, can pass in variables (`@mixin style-text($color)` ... `@include style-text($dark-color))
    - `@function divide($a,$b) { return $a / $b; }` ... `margin: divide(60,2) * 1px;`
    - @extend %placeholder
    - Extend takes selectors and combines them (same inner code), mixin adds code to selectors

### Layouts
- Float, flexbox, css grid

### Emmet extension VSCode
- creates html easily
- .className (then tab)
- htmlElementName.className (then tab)
- .className> ('>' continues as child of div)

### Media Queries
- design for one first
- Can pass blocks of code into mixins
- Use em's for measurement; 1em = 16px
- ORDER: Base + typograph > general layout + grid > page layout > components
- set different layouts, names, and size first
- sizzy.co to test different devices

### Responsive Images
- adjust image resolution so phones download a 200KB image instead of the 1MB picture for web
- when to use responsive images:
    - resolution switching
    - density switching (pixel switching)
    - art directino (different picture)

### Graceful Degredation
- Use @supports 
- Test in all browsers, come features in chrome aren't supported in Safari or firefox

### Build process
- Compile Sass
- Concate all css files (imports and self made)
- Prefixing for older versions
- Compress to one file

### Other
- inherit on property to force inherit
- :not sudo-class (`:not(:last-child)` = select everything except last child)
- Selectors:
    - grab everything that starts with (^), contains (*), or ends with ($)
    - '>' direct children
    - '*' all children
    - '+' adjacent sybling
    - '~' general sybling
- Perspective: Really cool, makes it pop off the page more or less
- coverr.co - free background videos for websites
- easings.net for bezier curves
- Use pixels when base is rem if you never want that to be adjusted if the base is as well
- Use table and table cell for creating boxes side by side with same height and for vertically centering
- Use column in css for separting text into columns
- original scripts in package.json file:
    - "compile:sass": "node-sass sass/main.scss css/style.css -w",
    - "watch:sass": "nodemon -e scss -x \"npm run compile:sass\""

### Things Todo
- Adjust popup when decreased device size
- Test Density and Resolution Switching on all other images
