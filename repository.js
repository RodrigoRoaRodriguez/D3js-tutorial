// Lets create a group that is centered in our SVG canvas
let svg.g = svg.d3selection // Selects the svg in our DOM.
  .append('g')  // Appends a g tag: <svg ... ><g><g></svg>
  // N.B!!! our selection is now the g tag NOT the svg tag.
  .attr('transform', `translate(0, ${svg.height / 2})`)
  //Tranforms applies a transform matrix on the group
  //Tranforms is SVG stuff not D3 see: https://developer.mozilla.org/en/docs/Web/SVG/Attribute/transform
