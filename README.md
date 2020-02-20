# Documentation i guess
## Functions (variables below)
setCanvas(canvasIn, canvasOut)
drawMethod(canvasOut, type, cntxName)
fill(color, cntxName) - color to be used by most shapes
rect(x, y, width, height, cntxName) - makes a rectangle
line(x, y, x1, y1, cntxName)
circle(x, y, r, cntxName)
gradient() - coming later
text(type2, x, y, font, text, cntxName)
## Variables
canvasIn - A string containing the ID of the canvas HTML element
canvasOut - name of the variable containing the canvas element
type - String containing the type of drawing used for the canvas, only supported type is 2D
cntxName - name of the variable for the context
color - String containing a CSS color, gradient, or pattern.
x - self explanatory, integer
y - self explanatory, integer
x1 - secondary x
x1 - secondary y
width - self explanatory, integer
height - self explanatory, integer
r - radius, integer
font - a string containing a font (example, 30px Arial)
type2 - the type of text to use. can be either "stroke" (no fill) or "fill" (filled)
text - a string of anything
image - string containing the link to an image?
