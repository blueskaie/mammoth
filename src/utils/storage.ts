function createCookie(key: number, value: string | number, exp = 365) {
  const date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  //@ts-ignore
  const expires = `; expires=${date.toGMTString()}`;
  document.cookie = `${key}=${value}${expires}; path=/`;
}

function readCookie(key: number) {
  const nameEQ = `${key}=`;
  const ca = document.cookie.split(";");
  for (let i = 0, max = ca.length; i < max; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

const store = {
  localStoreSupport() {
    try {
      return "localStorage" in window && window.localStorage !== null;
    } catch (e) {
      return false;
    }
  },
  set(key: any, value: any) {
    if (this.localStoreSupport()) {
      localStorage.setItem(key, value);
    } else {
      createCookie(key, value);
    }

    return this;
  },
  get(key: any) {
    if (this.localStoreSupport()) {
      const ret: any = localStorage.getItem(key);
      try {
        return JSON.parse(ret);
      } catch {
        return ret;
      }
    }
    return readCookie(key);
  },
  has(key: any) {
    const res = this.get(key);
    return typeof res !== "undefined" && res !== null;
  },
  remove(key: any) {
    if (this.localStoreSupport()) {
      localStorage.removeItem(key);
    } else {
      //@ts-ignore
      this.set(key, "", -1);
    }
  },
};

export default store;
