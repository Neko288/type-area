function white(){
  let text_area = document.getElementById('text-area');
  document.body.style.background = '#fffdfe';
  document.body.style.color = '#9a0510';
  text_area.style.background = '#fffdfe';
  text_area.style.color = '#9a0510';
}
document.getElementById('text-area').focus();
function reload(){
  window.location.reload();
}