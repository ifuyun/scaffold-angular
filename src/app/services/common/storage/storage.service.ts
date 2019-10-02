export class StorageService implements Storage {
  constructor(private storage: Storage) {
  }

  get length() {
    return this.storage.length;
  }

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  key(index: number): string | null {
    return this.storage.key(index);
  }

  getItemJSON(key: string): any {
    let value = this.getItem(key);
    try {
      value = typeof value === 'string' ? JSON.parse(value) : value || '';
    } catch (e) {
      value = value || '';
    }
    return value;
  }

  setItemJSON(key: string, value: any): void {
    try {
      if (typeof value !== 'string') {
        value = JSON.stringify(value);
      }
    } catch (e) {
      value = value || '';
    }
    this.setItem(key, value);
  }
}
