function setCanvas(canvasIn, canvasOut) {var canvasOut = document.getElementById(canvasIn)};
function drawMethod(varcan, type, cntxName) {var cntxName = varcan.getContext(type)}
function fill(color, cntxName) {cntxName.fillStyle = color}
function rect(x, y, width, height, cntxName) {cntxName.fillRect(x, y, width, height)}
function line(x, y, x1, y1, cntxName) {cntxName.moveTo(x, y); cntxName.lineTo(x1, y1); cntxName.stroke()}
function circle(x, y, r, cntxName) {cntxName.beginPath(); cntxName.arc(x, y, r, 0, 2*Math.PI)}
function text(type2, x, y, font, text, cntxName, color) {if(type2 === 'fill'){cntxName.font = font; cntxName.fillText('text', x, y)}; if (type2 === 'stroke') {cntxName.font = font; cntxName.strokeText(text, )}}