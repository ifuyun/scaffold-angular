/**
 * 解析URL参数，返回指定key的值，或所有参数值对象
 * @param key param key
 * @param url URL
 */
export function getLocationSearch(key?: string, url = window.top.location.search) {
  let searchArr = url.split('?');
  searchArr.shift();
  searchArr = searchArr.join('?').split('&');
  const searchObj = {};
  searchArr.forEach((param) => {
    const params = param.split('=');
    searchObj[params[0]] = params[1];
  });
  if (key) {
    return searchObj[key];
  }
  return searchObj;
}
