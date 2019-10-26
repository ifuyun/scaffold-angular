import * as db from 'mime-db';
import { CommonObject } from '../interfaces/common';

function extname(path: string) {
  if (path.indexOf('.') <= 0) {
    return '';
  }
  return '.' + path.split('.').pop();
}

const extensions: CommonObject = {};
const types: CommonObject = {};

populateMaps(extensions, types);

function populateMaps(extsObj: CommonObject, typesObj: CommonObject) {
  const preference = ['nginx', 'apache', undefined, 'iana'];

  Object.keys(db).forEach((type) => {
    const mime = (db as any)[type];
    const exts = mime.extensions;

    if (!exts || !exts.length) {
      return;
    }

    // mime -> extensions
    extsObj[type] = exts;

    // extension -> mime
    for (const extension of exts) {
      if (typesObj[extension]) {
        const from = preference.indexOf((db as any)[typesObj[extension]].source);
        const to = preference.indexOf(mime.source);

        if (typesObj[extension] !== 'application/octet-stream' &&
          (from > to || (from === to && types[extension].substr(0, 12) === 'application/'))) {
          // skip the remapping
          continue;
        }
      }

      // set the extension -> mime
      typesObj[extension] = type;
    }
  });
}

export function getType(path: string) {
  if (!path || typeof path !== 'string') {
    return false;
  }

  // get the extension ("ext" or ".ext" or full path)
  const extension = extname('x.' + path).toLowerCase().substr(1);

  if (!extension) {
    return false;
  }

  return types[extension] || false;
}
