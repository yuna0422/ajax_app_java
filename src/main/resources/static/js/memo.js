const buildHTML = (XHR) => {
  const item = XHR.response;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.createdAt}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

function post(){2
    const submit = document.getElementById("submit");
    submit.addEventListener("click", (e) => {
    e.preventDefault();
        const form = document.getElementById("form");
        const formData = new FormData(form);
        const XHR = new XMLHttpRequest();
        XHR.open("POST","/posts",true);
        XHR.responseType = "json";
        XHR.send(formData);
        XHR.onload = () => {
            //レスポンスに何かあった時の警告
            if (XHR.status != 200) {
            alert(`Error ${XHR.status}: ${XHR.response.error}`);
            return null;
            };
            
            const list = document.getElementById("list");
            const formText = document.getElementById("content");
            list.insertAdjacentHTML("afterend",buildHTML(XHR));
            formText.value = "";
        };
    });
};

window.addEventListener('load',post)