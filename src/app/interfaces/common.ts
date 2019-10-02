export interface CommonObject {
  [key: string]: any;
}

export interface ResponseResult {
  code: number;
  message?: string;
  data?: any;
}

export interface Scripts {
  name: string;
  src: string;
}

export interface ScriptDOM extends Node {
  type?: string;
  src?: string;
  readyState?: string;
  onreadystatechange?: any;
  onload?: any;
  onerror?: any;
}

export interface Breadcrumb {
  label: string;
  url: string;
  target?: string;
}
