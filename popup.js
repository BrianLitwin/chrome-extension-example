// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function click(e) {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          message: document.querySelectorAll('textarea')[0].value
        });
      });
}

document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelectorAll('button');
  btn[0].addEventListener('click', click);

});
