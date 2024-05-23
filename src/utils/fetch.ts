interface IDictionary<T> {
  [index: string]: () => void | T;
}

// wrapPromise.js
/**
 * Wraps a promise so it can be used with React Suspense
 * @param {Promise} promise The promise to process
 * @returns {Object} A response object compatible with Suspense
 */
function wrapPromise<T>(promise: Promise<T>) {
  let status = "pending";
  let state: T | Error;

  const suspender = promise.then(
    (res) => {
      status = "success";
      state = res;
    },
    (err) => {
      status = "error";
      state = err;
    }
  );

  const handler: IDictionary<T> = {
    pending: () => {
      throw suspender;
    },
    error: () => {
      throw state as Error;
    },
    success: () => state as T,
  };

  function read(): T {
    const result = handler[status]();
    //safe to cast as T because we know the status is success else it would have thrown an error or promise
    return result as T;
  }

  return { read };
}

export function fetchData(url: URL | string, options: RequestInit = {}) {
  const promise = fetch(url, options).then((res) => res.json());

  return wrapPromise(promise);
}
