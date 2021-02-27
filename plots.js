var box = d3.select('#mybox');

box
  .style('width', '200px')
  .style('height', '200px')
  .style('background-color', 'red');

d3.select('body').append('button').text('blue');
d3.select('body').append('button').text('pink');
d3.select('body').append('button').text('green');
d3.select('body').append('button').text('orange');

function handleClick() {
  console.log('What is this? It is: ', this);
  var newcolor = d3.select(this).text();
  box.style('background-color', newcolor);
}

d3.selectAll('button').on('click', handleClick);
