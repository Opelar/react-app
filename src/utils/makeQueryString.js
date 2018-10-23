function encode(value, opts) {
  if (opts.encode) {
    return encodeURIComponent(value);
  }
  return value;
}

function makeQueryString(obj, opts) {
  let defaults = {
    encode: true,
    strict: true
  };

  opts = Object.assign(defaults, opts);

  return obj
    ? Object.keys(obj)
        .sort()
        .map(function(key) {
          let val = obj[key];

          if (val === undefined) {
            return '';
          }

          if (val === null) {
            return encode(key, opts);
          }

          if (Array.isArray(val)) {
            let result = [];

            val.slice().forEach(function(val2) {
              if (val2 === undefined) {
                return;
              }

              if (val2 === null) {
                result.push(encode(key, opts));
              } else {
                result.push(encode(key, opts) + '=' + encode(val2, opts));
              }
            });

            return result.join('&');
          }

          return encode(key, opts) + '=' + encode(val, opts);
        })
        .filter(function(x) {
          return x.length > 0;
        })
        .join('&')
    : '';
}

export default makeQueryString;
