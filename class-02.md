# TEXT
* Headings and paragraphs
* Bold, italic, emphasis
* Structural and semantic markup

## How to add markup to the text that appears on your pages:
* Structural markup: the elements that you can use to describe both headings and paragraphs
* Semantic markup: which provides extra information; such as where emphasis is placed in a sentence, that something you have written is a quotation (and who said it), the meaning of acronyms, and so on

### HEADINGS
`<h1>`
`<h2>`
`<h3>`
`<h4>`
`<h5>`
`<h6>`

### PARAGRAPHS
To create a paragraph, surround the words that make up the paragraph with an opening `<p>` tag and closing `</p>` tag.

### BOLD & ITALIC
By enclosing words in the tags `<b>` and `</b>` we can make characters appear bold.

By enclosing words in the tags `<i>` and `</i>` we can make characters appear italic.

### SUPERSCRIPT & SUBSCRIPT
The `<sup>` element is used to contain characters that should be superscript such as the suffixes of dates or mathematical concepts like raising a number to a power such as 22.

The `<sub>` element is used to contain characters that should be subscript. It is commonly used with foot notes or chemical formulas such as H2o.

### WHITE SPACE
In order to make code easier to read, web page authors often add extra spaces or start some elements on new lines.
When the browser comes across two or more spaces next to each other, it only displays one space. Similarly if it comes across a line break, it treats that as a single space too. This is known as white space collapsing.

### LINE BREAKS & HORIZONTAL RULES
`<BR />`
As you have already seen, the browser will automatically show each new paragraph or heading on a new line. But if you wanted to add a line break inside the middle of a paragraph you can use the line break tag `<br />`.

`<HR />`
To create a break between themes — such as a change of topic in a book or a new scene in a play — you can add a horizontal rule between sections using the `<hr />` tag.

### VISUAL EDITORS & THEIR CODE VIEWS
Content management systems and HTML editors such as Dreamweaver usually have two views of the page you are creating: a visual editor and a code view.

Visual editors often resemble word processors. Although each editor will differ slightly, there are some features that are common to most editors that allow you to control the presentation of text.

* Headings are created by highlighting text then using a drop-down box to select a heading.
* Bold and italic text are created by highlighting some text and pressing a b or i button.
* New paragraphs are created using the return or the enter key.
* Line breaks are created by pressing the shift key and the return key at the same time.
* Horizontal rules are created using button with a straight line on it.

### SEMANTIC MARKUP
There are some text elements that are not intended to affect the structure of your web pages, but they do add extra information to the pages — they are known as semantic markup.

### STRONG & EMPHASIS
`<STRONG>`
The use of the `<strong>` element indicates that its content has strong importance. For example, the words contained in this element might be said with strong emphasis.
`<EM>`
The `<em>` element indicates emphasis that subtly changes the meaning of a sentence.

### QUOAATIONS
There are two elements commonly used for marking up quotations:
`<BLOCKQUOTE>`
The `<blockquote>` element is used for longer quotes that take up an entire paragraph. Note how the `<p>` element is still used inside the `<blockquote>` element.

Browsers tend to indent the contents of the `<blockquote>` element, however you should not use this element just to indent a piece of text — rather you should achieve this effect using CSS.

`<Q>`
The `<q>` element is used for shorter quotes that sit within a paragraph. Browsers are supposed to put quotes around the `<q>` element, however Internet Explorer does not — therefore many people avoid using the `<q>` element.

Both elements may use the cite attribute to indicate where the quote is from. Its value should be a URL that will have more information about the source of the quotation.

### ABBREVIATIONS & ACRONYMS
`<ABBR>`
If you use an abbreviation or an acronym, then the `<abbr>` element can be used. A title attribute on the opening tag is used to specify the full term.
In HTML 4 there was a separate `<acronym>` element for acronyms. To spell out the full form of the acronym, the title attribute was used (as with the `<abbr>` element above). HTML5 just uses the `<abbr>` element for both abbreviations and acronyms.

### CHANGES TO CONTENT
`<INS>`
`<DEL>`
The `<ins>` element can be used to show content that has been inserted into a document, while the `<del>` element can show text that has been deleted from it.
The content of a `<ins>` element is usually underlined, while the content of a `<del>` element usually has a line through it.

# INTRODUCING CSS
What CSS does
How CSS works
Rules, properties, and values

## CSS mostly involves learning the different properties you can use:
* Introduce you to how CSS works
* Teach you how to write CSS rules
* Show you how CSS rules apply to HTML pages

### UNDERSTANDING CSS: THINKING INSIDE THE BOX
* BLOCK & INLINE ELEMENTS
* EXAMPLE STYLES
### BOXES
Width and height
Borders (color, width, and style)
Background color and images
Position in the browser window.

### TEXT
Typeface
Size
Color
Italics, bold, uppercase, lowercase, small-caps

### SPECIFIC
There are also specific ways in which you can style certain elements such as lists, tables, and forms.

### USING EXTERNAL CSS
* `<LINK>`
* href
* type
* rel

### USING INTERNAL CSS
* `<STYLE>`

### Summary of Introduction to CSS
* CSS treats each HTML element as if it appears inside its own box and uses rules to indicate how that element should look.
* Rules are made up of selectors (that specify the elements the rule applies to) and declarations (that indicate what these elements should look like).
* Different types of selectors allow you to target your rules at different elements.
* Declarations are made up of two parts: the properties of the element that you want to change, and the value of those properties. For example, the font-family property sets the choice of font, and the value arial specifies Arial as the preferred typeface.
* CSS rules usually appear in a separate document, although they may appear within an HTML page.

# Basic JavaScript Instructions
### WHAT IS A VARIABLE?
A script will have to temporarily store the bits of information it needs to do its job. It can store this data in variables.

### DATA TYPES
* NUMERIC DATA TYPE
* STRING DATA TYPE
* BOOLEAN DATA TYPE

### ARRAYS
An array is a special type of variable. It doesn't just store one value; it stores a list of values.

### VALUES IN ARRAYS
* NUMBERING ITEMS IN AN ARRAY
* ACCESSING ITEMS IN AN ARRAY
* NUMBER OF ITEMS IN AN ARRAY

### EXPRESSIONS
An expression evaluates into (results in) a single value. Broadly speaking there are two types of expressions.
1. EXPRESSIONS THAT JUST ASSIGN A VALUE TO A VARIABLE
2. EXPRESSIONS THAT USE TWO OR MORE VALUES TO RETURN A SINGLE VALUE

### OPERATORS
Expressions rely on things called operators; they allow programmers to create a single value from one or more values.

# Decisions and Loops
DECISIONS: Using the results of evaluations, you can decide which path your script should go down.
LOOPS: There are also many occasions where you will want to perform the same set of steps repeatedly.

### EVALUATING CONDITIONS & CONDITIONAL STATEMENTS
There are two components to a decision:
1: An expression is evaluated, which returns a value
2: A conditional statement says what to do in a given situation

### COMPARISON OPERATORS: EVALUATING CONDITIONS
== is equal to
!= is not equal to
`===` is strict equal to
`!==` is strict not equal to
`>` is greater than
`<` is less than
`>=` is greater than or equal to
`<=` is less than or equal to

### LOGICAL OPERATORS
Comparison operators usually return single values of true or false. Logical operators allow you to compare the results of more than one comparison operator.

&& logical and
|| is logical or
! logical not

### IF STATEMENTS
The if statement evaluates (or checks) a condition. If the condition evaluates to true, any statements in the subsequent code block are executed.

### IF…ELSE STATEMENTS
The if…else statement checks a condition. If it resolves to true the first code block is executed. If the condition resolves to false the second code block is run instead.

### SWITCH STATEMENTS
A switch statement starts with a variable called the switch value. Each case indicates a possible value for this variable and the code that should run if the variable matches that value.

### LOOPS
Loops check a condition. If it returns true, a code block will run. Then the condition will be checked again and if it still returns true, the code block will run again. It repeats until the condition returns false. There are three common types of loops:
1. For
2. While
3. Do While

### KEY LOOP CONCEPTS
Here are three points to consider when you are working with loops. Each is illustrated in examples on the following three pages.

KEYWORDS
You will commonly see these two keywords used with loops:
* break
* continue






