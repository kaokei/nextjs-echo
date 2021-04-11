const ECHO_DATA = "__echo_data__";
const ECHO_HEADERS = "__echo_headers__";
const ECHO_BODY = "__echo_body__";

function getQueryData(query) {
  const str = query[ECHO_DATA];
  let data = str;
  if (str) {
    try {
      data = JSON.parse(str);
    } catch (e) {
      console.error("parse error :>> ", e);
    }
  }
  return data;
}

function setHeaders(res, headers) {
  for (let key in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, key)) {
      res.setHeader(key, headers[key]);
    }
  }
}

export default function handler(req, res) {
  const resData = getQueryData(req.query) || req.body || {};
  if (resData[ECHO_HEADERS] && resData[ECHO_BODY]) {
    setHeaders(res, resData[ECHO_HEADERS]);
    res.send(resData[ECHO_BODY]);
  } else {
    res.send(resData);
  }
}
