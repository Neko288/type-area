

document.getElementById('text_area').focus();
function reload(){
  window.location.reload();
}

function switchAlignment() {
  const textarea = document.getElementById('text_area');
  const alignmentSwitch = document.getElementById('alignmentSwitch');

  if (alignmentSwitch.checked) {
    textarea.style.textAlign = 'left';
  } else {
    textarea.style.textAlign = 'center';
  }
}

function toggleStyles() {
  const changeStyleButton = document.getElementById('changeStyleButton');
  const textcountercolor = document.getElementById('textcountercolor');
  if (changeStyleButton.checked) {
    document.body.style.background = '#fffdfe';
    document.body.style.color = '#9a0510';
    text_area.style.background = '#fffdfe';
    text_area.style.color = '#9a0510';
    textcountercolor.style.background = '#fffdfe';
  } else {
    document.body.style.background = '#010101';
    document.body.style.color = '#e7be51';
    text_area.style.background = '#010101';
    text_area.style.color = '#e7be51';
    textcountercolor.style.background = '#010101';
  }
}

function autoResize() {
  const textArea = document.getElementById('text_area');
  textArea.style.height = 'auto'; // リセットして高さを再計算するために一旦 'auto' に設定

  // 高さを更新する
  textArea.style.height = textArea.scrollHeight + 'px';
}

function countCharacters() {
  autoResize()
  const text = document.getElementById('text_area').value;
  const count = text.length;
  document.getElementById('characterCount').textContent = count;
}



function saveTextAsFile() {
  const textToSave = document.getElementById("text_area").value;
  const textToSaveAsBlob = new Blob([textToSave], { type: "text/plain" });

  const downloadLink = document.createElement("a");
  downloadLink.download = "Text_written_at_TypeArea.txt";
  downloadLink.href = window.URL.createObjectURL(textToSaveAsBlob);
  downloadLink.textContent = "ダウンロード";

  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);

  downloadLink.click();

  document.body.removeChild(downloadLink);
}