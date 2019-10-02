import { Injectable } from '@angular/core';
import { ScriptDOM } from '../../interfaces/common';
import { SCRIPT_STORE } from '../config/constants';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {
  private scripts: { [key: string]: ScriptItem } = {};

  constructor() {
    SCRIPT_STORE.forEach((script) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  load(...scripts: string[]) {
    const promises: any[] = [];

    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      if (this.scripts[name].loaded) {
        // resolve if already loaded
        resolve({
          script: name,
          loaded: true,
          status: 'Already Loaded'
        });
      } else {
        // load script
        const script = document.createElement('script') as ScriptDOM;
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;

        if (script.readyState) {// IE
          script.onreadystatechange = () => {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
              script.onreadystatechange = null;
              this.scripts[name].loaded = true;
              resolve({
                script: name,
                loaded: true,
                status: 'Loaded'
              });
            }
          };
        } else {// Others
          script.onload = () => {
            this.scripts[name].loaded = true;
            resolve({
              script: name,
              loaded: true,
              status: 'Loaded'
            });
          };
        }
        script.onerror = (error: any) => resolve({
          script: name,
          loaded: false,
          status: 'Fail'
        });
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }
}

interface ScriptItem {
  loaded: boolean;
  src: string;
}
