var urlHash = location.hash;
var body = document.getElementById('#body');
var text_area = document.getElementById('#text-area');
if(urlHash){
  if (urlHash == '#dark') {
    body.style.background = '#171411';
    body.style.color = '#e90718';
    text_area.style.background = '#171411';
    text_area.style.color = '#e90718';
  }
}
document.getElementById('text-area').focus();