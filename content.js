// content.js

const sendData = (question) => {
  const selection = window.getSelection()
  const text = selection.toString()
  const url = window.location.href
  const page_offset = window.pageYOffset
  fetch("http://localhost:8007/make_flashcard/", {
    method: 'POST',
    headers: {
          'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text, url, page_offset, question })
  }).then((resp) => { console.log(resp)})
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(request.message)
  sendData(request.message)
});
