//TODO change the path directory to whatever OS they are on

if (document.URL.split("#").length > 1) {
  let url = replaceAll(document.URL, "&spl", "#").split("#");

  url[0] = "";

  document.getElementById(
    "finddebugLog"
  ).innerHTML = `Debug Log (This has been autofilled in, no need to touch it)
    <textarea name="The Crash Log" id="bugReportArea"></textarea>
    `;
  for (let i = 0; i < url.length; i++) {
    console.log(getValue(url[i]));
    if (url[i] != "") {
      document.getElementById(getValue(url[i])[0]).value = parseURL(
        getValue(url[i])[1]
      );
    }
  }

  document.getElementById("bugReportArea").style.backgroundColor = "grey";
}

function parseURL(input) {
  let parsed = input;
  parsed = replaceAll(parsed, "%20", " ");
  parsed = replaceAll(parsed, "\\+", " ");
  parsed = replaceAll(parsed, "%2F", "/");
  parsed = replaceAll(parsed, "%5C", "\\");
  parsed = replaceAll(parsed, "&NL", "\n");
  parsed = replaceAll(parsed, "&DT", ".");
  parsed = replaceAll(parsed, "%23", "#");
  parsed = replaceAll(parsed, "%3A", ":");
  parsed = replaceAll(parsed, "%22", `"`);
  parsed = replaceAll(parsed, "%40", `@`);
  parsed = replaceAll(parsed, "%24", `$`);

  parsed = replaceAll(parsed, "%2B", `+`);
  parsed = replaceAll(parsed, "%3D", `=`);

  parsed = replaceAll(parsed, "%3F", `?`);
  parsed = replaceAll(parsed, "%2C", `,`);
  parsed = replaceAll(parsed, "%3B", `;`);

  parsed = decodeURI(parsed);

  return parsed;
}

function getValue(str) {
  let s = str.split("=");
  s[0] = "";
  return [str.split("=")[0], s.join("=").substr(1, 10000000)];
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, "g"), replace);
}
