# Regex Cheetsheet
Regular expressions (regex or regexp) are extremely useful in extracting information from any text by searching for one or more matches of a specific search pattern (i.e. a specific sequence of ASCII or unicode characters).

Fields of application range from validation to parsing/replacing strings, passing through translating data to other formats and web scraping.

## Anchors — ^ and $

^The        matches any string that starts with The 
end$        matches a string that ends with end
^The end$   exact string match (starts and ends with The end)
roar        matches any string that has the text roar in it

## Quantifiers — * + ? and {}

abc*        matches a string that has ab followed by zero or more c 
abc+        matches a string that has ab followed by one or more c
abc?        matches a string that has ab followed by zero or one c
abc{2}      matches a string that has ab followed by 2 c
abc{2,}     matches a string that has ab followed by 2 or more c
abc{2,5}    matches a string that has ab followed by 2 up to 5 c
a(bc)*      matches a string that has a followed by zero or more copies of the sequence bc
a(bc){2,5}  matches a string that has a followed by 2 up to 5 copies of the sequence bc

## OR operator — | or []

a(b|c)     matches a string that has a followed by b or c (and captures b or c) 
a[bc]      same as previous, but without capturing b or c

## Character classes — \d \w \s and .

\d         matches a single character that is a digit 
\w         matches a word character (alphanumeric character plus underscore) 
\s         matches a whitespace character (includes tabs and line breaks)
.          matches any character 

Use the . operator carefully since often class or negated character class (which we’ll cover next) are faster and more precise.
\d, \w and \s also present their negations with \D, \W and \S respectively.

## Flags

A regex usually comes within this form /abc/, where the search pattern is delimited by two slash characters /. At the end we can specify a flag with these values (we can also combine them each other):

* g (global) does not return after the first match, restarting the subsequent searches from the end of the previous match
* m (multi-line) when enabled ^ and $ will match the start and end of a line, instead of the whole string
* i (insensitive) makes the whole expression case-insensitive (for instance /aBc/i would match AbC)

## Grouping and capturing — ()

a(bc)           parentheses create a capturing group with value bc 
a(?:bc)*        using ?: we disable the capturing group 
a(?`<foo>`bc)     using ?`<foo>` we put a name to the group

## Bracket expressions — []

[abc]            matches a string that has either an a or a b or a c -> is the same as a|b|c
[a-fA-F0-9]      a string that represents a single hexadecimal digit, case insensitively 
[0-9]%           a string that has a character from 0 to 9 before a % sign
[^a-zA-Z]        a string that has not a letter from a to z or from A to Z. In this case the ^ is used as negation of the expression 

## Boundaries — \b and \B

\babc\b          performs a "whole words only" search

## Back-references — \1

([abc])\1              using \1 it matches the same text that was matched by the first capturing group 
([abc])([de])\2\1      we can use \2 (\3, \4, etc.) to identify the same text that was matched by the second (third, fourth, etc.) capturing group 
(?`<foo>`[abc])\k`<foo>`   we put the name foo to the group and we reference it later (\k<foo>). The result is the same of the first regex

## Look-ahead and Look-behind — (?=) and (?<=)

d(?=r)       matches a d only if is followed by r, but r will not be part of the overall regex match 
(?<=r)d      matches a d only if is preceded by an r, but r will not be part of the overall regex match

# CSS Grid

## Properties for the Parent
(Grid Container)

* display
`.container {
  display: grid | inline-grid;
}`

* grid-template-columns
grid-template-rows
Example:
`.container {
  grid-template-columns: 40px 50px auto 50px 40px;
  grid-template-rows: 25% 100px auto;
}`

* grid-template
Example:
`.container {
  grid-template:
    [row1-start] "header header header" 25px [row1-end]
    [row2-start] "footer footer footer" 25px [row2-end]
    / auto 50px auto;
}`

* justify-items
`.container {
  justify-items: start | end | center | stretch;
}`

## Properties for the Children
(Grid Items)

* grid-column-start
grid-column-end
grid-row-start
grid-row-end
`.item {
  grid-column-start: <number> | <name> | span <number> | span <name> | auto;
  grid-column-end: <number> | <name> | span <number> | span <name> | auto;
  grid-row-start: <number> | <name> | span <number> | span <name> | auto;
  grid-row-end: <number> | <name> | span <number> | span <name> | auto;
}`

* grid-column
grid-row
`.item {
  grid-column: <start-line> / <end-line> | <start-line> / span <value>;
  grid-row: <start-line> / <end-line> | <start-line> / span <value>;
}`

* grid-area
`.item {
  grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;
}`

* justify-self
`.item {
  justify-self: start | end | center | stretch;
}`

* align-self
`.item {
  align-self: start | end | center | stretch;
}`

# Responsive Layouts with CSS Grid

### Large Image followed by articles
Example: `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`

### The Full Page Image Gallery
Example: `grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;`
`grid-template-columns: repeat(6, 1fr);`

### Card Layout
Example: 
`column-count: 2;
column-gap: 20px;`

### The Holy Grail Layout (with no set heights!)
Example: 
`body {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
}`










