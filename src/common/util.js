//js方法格式化数字，加入千分符
  export function fmoney(s) {
    if (s == '*') {
      return s;
    }

    var n = 2;
    n = n >= 0 && n <= 20 ? n : 2;
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    var l = s
        .split(".")[0]
        .split("")
        .reverse(),
      r = s.split(".")[1];
    r = r == null ? "" : "." + r;
    var t = "";
    ////console.log(l)
    if (l[l.length - 1] === '-') {//负数不需要分隔号,

      for (var i = 0; i < l.length; i++) {
        if (l[i] === '-') {
          t += l[i] + ""
          continue
        }
        //不是数组的倒数第二个元素才加"," ["0", "4", "5", "-"]
        t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length - 1 ? "," : "");

        //i + 1 != l.length会变成-,540.00,因为在5时元素位置2+1为3非数组长度
        //t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? "," : "");
      }
    }
    else {
      for (var i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? "," : "");
      }
    }
    return (
      t
        .split("")
        .reverse()
        .join("") + r
    );


  }
  //排序规则
  export function sortby (name, minor, sort) {
    return function (o, p) {
      var a, b;
      if (o && p && typeof o === 'object' && typeof p === 'object') {
        a = o[name];
        b = p[name];
        if (a === b) {
          return typeof minor === 'function' ? minor(o, p) : 0;
        }
        if (typeof a === typeof b) {
          a = parseFloat(a.toString().replace(/,/g, ''));
          b = parseFloat(b.toString().replace(/,/g, ''));
          if (sort == 'ascending') {
            return a < b ? -1 : 1;
          } else if (sort == 'descending') {
            return a < b ? 1 : -1;
          }

        }
        if (sort == 'ascending') {
          return typeof a < typeof b ? -1 : 1;
        } else if (sort == 'descending') {
          return typeof a < typeof b ? 1 : -1;
        }

      } else {
        throw("error");
      }
    }
  }
