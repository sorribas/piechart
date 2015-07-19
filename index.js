
module.exports = function(canvas, data) {
  var context = canvas.getContext("2d");

  var drawSegment = function(i) {
    var el = data[i];
    context.save();
    var centerX = Math.floor(canvas.width / 2);
    var centerY = Math.floor(canvas.height / 2);
    radius = Math.floor(canvas.width / 2);

    var startingAngle = degreesToRadians(sumTo(data, i));
    var arcSize = degreesToRadians(el.value);
    var endingAngle = startingAngle + arcSize;

    context.beginPath();
    context.moveTo(centerX, centerY);
    context.arc(centerX, centerY, radius, startingAngle, endingAngle, false);
    context.closePath();

    context.fillStyle = el.color;
    context.fill();

    context.restore();
  }

  var degreesToRadians = function(degrees) {
    return (degrees * Math.PI)/180;
  }
  var sumTo = function(a, i) {
    var sum = 0;
    for (var j = 0; j < i; j++) {
      sum += a[j].value;
    }
    return sum;
  }

  for (var i = 0; i < data.length; i++) {
    drawSegment(i);
  }
};
