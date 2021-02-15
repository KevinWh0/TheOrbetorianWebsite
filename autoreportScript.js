//TODO change the path directory to whatever OS they are on

if (document.URL.split("#").length > 1) {
  let url = document.URL.split("#");

  url[0] = "";
  document.getElementById("version").value = parseURL(url[1].split("/")[0]);

  url = url[1].split("/");
  url[0] = "";
  url.join("/");
  let errMsg = url.join("#").substr(1, 10000000);

  console.log(errMsg);
  document.getElementById(
    "finddebugLog"
  ).innerHTML = `Debug Log (This has been autofilled in, no need to touch it)
    <textarea name="The Crash Log" id="bugReportArea"></textarea>
    `;
  document.getElementById("bugReportArea").value = parseURL(errMsg);

  document.getElementById("bugReportArea").style.backgroundColor = "grey";
}

function parseURL(input) {
  let parsed = input;
  parsed = replaceAll(parsed, "%20", " ");
  parsed = replaceAll(parsed, "%2F", "/");
  parsed = replaceAll(parsed, "%5C", "\\");
  parsed = replaceAll(parsed, "&NL", "\n");
  parsed = replaceAll(parsed, "&DT", ".");

  return parsed;
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, "g"), replace);
}
