import memoize from 'lodash.memoize';

const MEASUREMENT_ELEMENT_ID = '__react_svg_text_measurement_id';

function getStringWidth(str, style) {
  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  let textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  textElement.setAttribute('id', MEASUREMENT_ELEMENT_ID);
  svg.appendChild(textElement);
  document
      .body
      .appendChild(svg);

  Object.assign(textElement.style, style);
  textElement.textContent = str;
  let ret = textElement.getComputedTextLength()
  document.body.removeChild(svg);
  return ret;
}

const getStringWidthMemoized = memoize(getStringWidth);

export { getStringWidthMemoized as getStringWidth }