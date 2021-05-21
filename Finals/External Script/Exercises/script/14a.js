function createElement(str)
{
  var div = document.getElementById("target");
  div.innerHTML = str;
  return div.childNodes;
}
