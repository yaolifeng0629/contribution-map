import './style.css';
import { ref as Lt, onMounted as Ls, openBlock as te, createElementBlock as se, createElementVNode as G, Fragment as Ne, renderList as We, toDisplayString as Pe, normalizeStyle as Us, unref as Is, normalizeClass as Es, pushScopeId as Hs, popScopeId as As } from "vue";
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Gt;
function l() {
  return Gt.apply(null, arguments);
}
function Vs(e) {
  Gt = e;
}
function C(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function ne(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function w(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function ct(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (w(e, t))
      return !1;
  return !0;
}
function x(e) {
  return e === void 0;
}
function q(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function pe(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function jt(e, t) {
  var s = [], r, a = e.length;
  for (r = 0; r < a; ++r)
    s.push(t(e[r], r));
  return s;
}
function X(e, t) {
  for (var s in t)
    w(t, s) && (e[s] = t[s]);
  return w(t, "toString") && (e.toString = t.toString), w(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function H(e, t, s, r) {
  return cs(e, t, s, r, !0).utc();
}
function Gs() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function m(e) {
  return e._pf == null && (e._pf = Gs()), e._pf;
}
var it;
Array.prototype.some ? it = Array.prototype.some : it = function(e) {
  var t = Object(this), s = t.length >>> 0, r;
  for (r = 0; r < s; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function mt(e) {
  var t = null, s = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = m(e), s = it.call(t.parsedDateParts, function(a) {
    return a != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function Ge(e) {
  var t = H(NaN);
  return e != null ? X(m(t), e) : m(t).userInvalidated = !0, t;
}
var Ut = l.momentProperties = [], st = !1;
function _t(e, t) {
  var s, r, a, n = Ut.length;
  if (x(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), x(t._i) || (e._i = t._i), x(t._f) || (e._f = t._f), x(t._l) || (e._l = t._l), x(t._strict) || (e._strict = t._strict), x(t._tzm) || (e._tzm = t._tzm), x(t._isUTC) || (e._isUTC = t._isUTC), x(t._offset) || (e._offset = t._offset), x(t._pf) || (e._pf = m(t)), x(t._locale) || (e._locale = t._locale), n > 0)
    for (s = 0; s < n; s++)
      r = Ut[s], a = t[r], x(a) || (e[r] = a);
  return e;
}
function Ye(e) {
  _t(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), st === !1 && (st = !0, l.updateOffset(this), st = !1);
}
function L(e) {
  return e instanceof Ye || e != null && e._isAMomentObject != null;
}
function zt(e) {
  l.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function P(e, t) {
  var s = !0;
  return X(function() {
    if (l.deprecationHandler != null && l.deprecationHandler(null, e), s) {
      var r = [], a, n, i, u = arguments.length;
      for (n = 0; n < u; n++) {
        if (a = "", typeof arguments[n] == "object") {
          a += `
[` + n + "] ";
          for (i in arguments[0])
            w(arguments[0], i) && (a += i + ": " + arguments[0][i] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[n];
        r.push(a);
      }
      zt(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var It = {};
function Zt(e, t) {
  l.deprecationHandler != null && l.deprecationHandler(e, t), It[e] || (zt(t), It[e] = !0);
}
l.suppressDeprecationWarnings = !1;
l.deprecationHandler = null;
function A(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function js(e) {
  var t, s;
  for (s in e)
    w(e, s) && (t = e[s], A(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function ot(e, t) {
  var s = X({}, e), r;
  for (r in t)
    w(t, r) && (ne(e[r]) && ne(t[r]) ? (s[r] = {}, X(s[r], e[r]), X(s[r], t[r])) : t[r] != null ? s[r] = t[r] : delete s[r]);
  for (r in e)
    w(e, r) && !w(t, r) && ne(e[r]) && (s[r] = X({}, s[r]));
  return s;
}
function yt(e) {
  e != null && this.set(e);
}
var lt;
Object.keys ? lt = Object.keys : lt = function(e) {
  var t, s = [];
  for (t in e)
    w(e, t) && s.push(t);
  return s;
};
var zs = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Zs(e, t, s) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return A(r) ? r.call(t, s) : r;
}
function E(e, t, s) {
  var r = "" + Math.abs(e), a = t - r.length, n = e >= 0;
  return (n ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
}
var wt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Re = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, rt = {}, de = {};
function f(e, t, s, r) {
  var a = r;
  typeof r == "string" && (a = function() {
    return this[r]();
  }), e && (de[e] = a), t && (de[t[0]] = function() {
    return E(a.apply(this, arguments), t[1], t[2]);
  }), s && (de[s] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function $s(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Bs(e) {
  var t = e.match(wt), s, r;
  for (s = 0, r = t.length; s < r; s++)
    de[t[s]] ? t[s] = de[t[s]] : t[s] = $s(t[s]);
  return function(a) {
    var n = "", i;
    for (i = 0; i < r; i++)
      n += A(t[i]) ? t[i].call(a, e) : t[i];
    return n;
  };
}
function Ce(e, t) {
  return e.isValid() ? (t = $t(t, e.localeData()), rt[t] = rt[t] || Bs(t), rt[t](e)) : e.localeData().invalidDate();
}
function $t(e, t) {
  var s = 5;
  function r(a) {
    return t.longDateFormat(a) || a;
  }
  for (Re.lastIndex = 0; s >= 0 && Re.test(e); )
    e = e.replace(
      Re,
      r
    ), Re.lastIndex = 0, s -= 1;
  return e;
}
var qs = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Js(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(wt).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var Qs = "Invalid date";
function Xs() {
  return this._invalidDate;
}
var Ks = "%d", er = /\d{1,2}/;
function tr(e) {
  return this._ordinal.replace("%d", e);
}
var sr = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function rr(e, t, s, r) {
  var a = this._relativeTime[s];
  return A(a) ? a(e, t, s, r) : a.replace(/%d/i, e);
}
function ar(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return A(s) ? s(t) : s.replace(/%s/i, t);
}
var Et = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function R(e) {
  return typeof e == "string" ? Et[e] || Et[e.toLowerCase()] : void 0;
}
function kt(e) {
  var t = {}, s, r;
  for (r in e)
    w(e, r) && (s = R(r), s && (t[s] = e[r]));
  return t;
}
var nr = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function ir(e) {
  var t = [], s;
  for (s in e)
    w(e, s) && t.push({ unit: s, priority: nr[s] });
  return t.sort(function(r, a) {
    return r.priority - a.priority;
  }), t;
}
var Bt = /\d/, N = /\d\d/, qt = /\d{3}/, Mt = /\d{4}/, je = /[+-]?\d{6}/, D = /\d\d?/, Jt = /\d\d\d\d?/, Qt = /\d\d\d\d\d\d?/, ze = /\d{1,3}/, gt = /\d{1,4}/, Ze = /[+-]?\d{1,6}/, ce = /\d+/, $e = /[+-]?\d+/, or = /Z|[+-]\d\d:?\d\d/gi, Be = /Z|[+-]\d\d(?::?\d\d)?/gi, lr = /[+-]?\d+(\.\d{1,3})?/, Oe = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, me = /^[1-9]\d?/, St = /^([1-9]\d|\d)/, Ie;
Ie = {};
function d(e, t, s) {
  Ie[e] = A(t) ? t : function(r, a) {
    return r && s ? s : t;
  };
}
function ur(e, t) {
  return w(Ie, e) ? Ie[e](t._strict, t._locale) : new RegExp(dr(e));
}
function dr(e) {
  return $(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, s, r, a, n) {
        return s || r || a || n;
      }
    )
  );
}
function $(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function W(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function _(e) {
  var t = +e, s = 0;
  return t !== 0 && isFinite(t) && (s = W(t)), s;
}
var ut = {};
function M(e, t) {
  var s, r = t, a;
  for (typeof e == "string" && (e = [e]), q(t) && (r = function(n, i) {
    i[t] = _(n);
  }), a = e.length, s = 0; s < a; s++)
    ut[e[s]] = r;
}
function Te(e, t) {
  M(e, function(s, r, a, n) {
    a._w = a._w || {}, t(s, a._w, a, n);
  });
}
function hr(e, t, s) {
  t != null && w(ut, e) && ut[e](t, s._a, s, e);
}
function qe(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var O = 0, z = 1, I = 2, Y = 3, F = 4, Z = 5, ae = 6, fr = 7, cr = 8;
f("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? E(e, 4) : "+" + e;
});
f(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
f(0, ["YYYY", 4], 0, "year");
f(0, ["YYYYY", 5], 0, "year");
f(0, ["YYYYYY", 6, !0], 0, "year");
d("Y", $e);
d("YY", D, N);
d("YYYY", gt, Mt);
d("YYYYY", Ze, je);
d("YYYYYY", Ze, je);
M(["YYYYY", "YYYYYY"], O);
M("YYYY", function(e, t) {
  t[O] = e.length === 2 ? l.parseTwoDigitYear(e) : _(e);
});
M("YY", function(e, t) {
  t[O] = l.parseTwoDigitYear(e);
});
M("Y", function(e, t) {
  t[O] = parseInt(e, 10);
});
function Me(e) {
  return qe(e) ? 366 : 365;
}
l.parseTwoDigitYear = function(e) {
  return _(e) + (_(e) > 68 ? 1900 : 2e3);
};
var Xt = _e("FullYear", !0);
function mr() {
  return qe(this.year());
}
function _e(e, t) {
  return function(s) {
    return s != null ? (Kt(this, e, s), l.updateOffset(this, t), this) : ge(this, e);
  };
}
function ge(e, t) {
  if (!e.isValid())
    return NaN;
  var s = e._d, r = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return r ? s.getUTCMilliseconds() : s.getMilliseconds();
    case "Seconds":
      return r ? s.getUTCSeconds() : s.getSeconds();
    case "Minutes":
      return r ? s.getUTCMinutes() : s.getMinutes();
    case "Hours":
      return r ? s.getUTCHours() : s.getHours();
    case "Date":
      return r ? s.getUTCDate() : s.getDate();
    case "Day":
      return r ? s.getUTCDay() : s.getDay();
    case "Month":
      return r ? s.getUTCMonth() : s.getMonth();
    case "FullYear":
      return r ? s.getUTCFullYear() : s.getFullYear();
    default:
      return NaN;
  }
}
function Kt(e, t, s) {
  var r, a, n, i, u;
  if (!(!e.isValid() || isNaN(s))) {
    switch (r = e._d, a = e._isUTC, t) {
      case "Milliseconds":
        return void (a ? r.setUTCMilliseconds(s) : r.setMilliseconds(s));
      case "Seconds":
        return void (a ? r.setUTCSeconds(s) : r.setSeconds(s));
      case "Minutes":
        return void (a ? r.setUTCMinutes(s) : r.setMinutes(s));
      case "Hours":
        return void (a ? r.setUTCHours(s) : r.setHours(s));
      case "Date":
        return void (a ? r.setUTCDate(s) : r.setDate(s));
      case "FullYear":
        break;
      default:
        return;
    }
    n = s, i = e.month(), u = e.date(), u = u === 29 && i === 1 && !qe(n) ? 28 : u, a ? r.setUTCFullYear(n, i, u) : r.setFullYear(n, i, u);
  }
}
function _r(e) {
  return e = R(e), A(this[e]) ? this[e]() : this;
}
function yr(e, t) {
  if (typeof e == "object") {
    e = kt(e);
    var s = ir(e), r, a = s.length;
    for (r = 0; r < a; r++)
      this[s[r].unit](e[s[r].unit]);
  } else if (e = R(e), A(this[e]))
    return this[e](t);
  return this;
}
function wr(e, t) {
  return (e % t + t) % t;
}
var p;
Array.prototype.indexOf ? p = Array.prototype.indexOf : p = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Dt(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = wr(t, 12);
  return e += (t - s) / 12, s === 1 ? qe(e) ? 29 : 28 : 31 - s % 7 % 2;
}
f("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
f("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
f("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
d("M", D, me);
d("MM", D, N);
d("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
d("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
M(["M", "MM"], function(e, t) {
  t[z] = _(e) - 1;
});
M(["MMM", "MMMM"], function(e, t, s, r) {
  var a = s._locale.monthsParse(e, r, s._strict);
  a != null ? t[z] = a : m(s).invalidMonth = e;
});
var kr = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), es = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), ts = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Mr = Oe, gr = Oe;
function Sr(e, t) {
  return e ? C(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || ts).test(t) ? "format" : "standalone"][e.month()] : C(this._months) ? this._months : this._months.standalone;
}
function Dr(e, t) {
  return e ? C(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[ts.test(t) ? "format" : "standalone"][e.month()] : C(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function vr(e, t, s) {
  var r, a, n, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      n = H([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        n,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(n, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (a = p.call(this._shortMonthsParse, i), a !== -1 ? a : null) : (a = p.call(this._longMonthsParse, i), a !== -1 ? a : null) : t === "MMM" ? (a = p.call(this._shortMonthsParse, i), a !== -1 ? a : (a = p.call(this._longMonthsParse, i), a !== -1 ? a : null)) : (a = p.call(this._longMonthsParse, i), a !== -1 ? a : (a = p.call(this._shortMonthsParse, i), a !== -1 ? a : null));
}
function pr(e, t, s) {
  var r, a, n;
  if (this._monthsParseExact)
    return vr.call(this, e, t, s);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (a = H([2e3, r]), s && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !s && !this._monthsParse[r] && (n = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(n.replace(".", ""), "i")), s && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (s && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!s && this._monthsParse[r].test(e))
      return r;
  }
}
function ss(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = _(t);
    else if (t = e.localeData().monthsParse(t), !q(t))
      return e;
  }
  var s = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, Dt(e.year(), s)), e._isUTC ? e._d.setUTCMonth(s, r) : e._d.setMonth(s, r), e;
}
function rs(e) {
  return e != null ? (ss(this, e), l.updateOffset(this, !0), this) : ge(this, "Month");
}
function Yr() {
  return Dt(this.year(), this.month());
}
function Or(e) {
  return this._monthsParseExact ? (w(this, "_monthsRegex") || as.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (w(this, "_monthsShortRegex") || (this._monthsShortRegex = Mr), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Tr(e) {
  return this._monthsParseExact ? (w(this, "_monthsRegex") || as.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (w(this, "_monthsRegex") || (this._monthsRegex = gr), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function as() {
  function e(h, c) {
    return c.length - h.length;
  }
  var t = [], s = [], r = [], a, n, i, u;
  for (a = 0; a < 12; a++)
    n = H([2e3, a]), i = $(this.monthsShort(n, "")), u = $(this.months(n, "")), t.push(i), s.push(u), r.push(u), r.push(i);
  t.sort(e), s.sort(e), r.sort(e), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function br(e, t, s, r, a, n, i) {
  var u;
  return e < 100 && e >= 0 ? (u = new Date(e + 400, t, s, r, a, n, i), isFinite(u.getFullYear()) && u.setFullYear(e)) : u = new Date(e, t, s, r, a, n, i), u;
}
function Se(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Ee(e, t, s) {
  var r = 7 + t - s, a = (7 + Se(e, 0, r).getUTCDay() - t) % 7;
  return -a + r - 1;
}
function ns(e, t, s, r, a) {
  var n = (7 + s - r) % 7, i = Ee(e, r, a), u = 1 + 7 * (t - 1) + n + i, h, c;
  return u <= 0 ? (h = e - 1, c = Me(h) + u) : u > Me(e) ? (h = e + 1, c = u - Me(e)) : (h = e, c = u), {
    year: h,
    dayOfYear: c
  };
}
function De(e, t, s) {
  var r = Ee(e.year(), t, s), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, n, i;
  return a < 1 ? (i = e.year() - 1, n = a + B(i, t, s)) : a > B(e.year(), t, s) ? (n = a - B(e.year(), t, s), i = e.year() + 1) : (i = e.year(), n = a), {
    week: n,
    year: i
  };
}
function B(e, t, s) {
  var r = Ee(e, t, s), a = Ee(e + 1, t, s);
  return (Me(e) - r + a) / 7;
}
f("w", ["ww", 2], "wo", "week");
f("W", ["WW", 2], "Wo", "isoWeek");
d("w", D, me);
d("ww", D, N);
d("W", D, me);
d("WW", D, N);
Te(
  ["w", "ww", "W", "WW"],
  function(e, t, s, r) {
    t[r.substr(0, 1)] = _(e);
  }
);
function xr(e) {
  return De(e, this._week.dow, this._week.doy).week;
}
var Nr = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Wr() {
  return this._week.dow;
}
function Pr() {
  return this._week.doy;
}
function Rr(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Fr(e) {
  var t = De(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
f("d", 0, "do", "day");
f("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
f("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
f("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
f("e", 0, 0, "weekday");
f("E", 0, 0, "isoWeekday");
d("d", D);
d("e", D);
d("E", D);
d("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
d("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
d("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Te(["dd", "ddd", "dddd"], function(e, t, s, r) {
  var a = s._locale.weekdaysParse(e, r, s._strict);
  a != null ? t.d = a : m(s).invalidWeekday = e;
});
Te(["d", "e", "E"], function(e, t, s, r) {
  t[r] = _(e);
});
function Cr(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Lr(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function vt(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Ur = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), is = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Ir = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Er = Oe, Hr = Oe, Ar = Oe;
function Vr(e, t) {
  var s = C(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? vt(s, this._week.dow) : e ? s[e.day()] : s;
}
function Gr(e) {
  return e === !0 ? vt(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function jr(e) {
  return e === !0 ? vt(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function zr(e, t, s) {
  var r, a, n, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      n = H([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        n,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        n,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(n, "").toLocaleLowerCase();
  return s ? t === "dddd" ? (a = p.call(this._weekdaysParse, i), a !== -1 ? a : null) : t === "ddd" ? (a = p.call(this._shortWeekdaysParse, i), a !== -1 ? a : null) : (a = p.call(this._minWeekdaysParse, i), a !== -1 ? a : null) : t === "dddd" ? (a = p.call(this._weekdaysParse, i), a !== -1 || (a = p.call(this._shortWeekdaysParse, i), a !== -1) ? a : (a = p.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : t === "ddd" ? (a = p.call(this._shortWeekdaysParse, i), a !== -1 || (a = p.call(this._weekdaysParse, i), a !== -1) ? a : (a = p.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : (a = p.call(this._minWeekdaysParse, i), a !== -1 || (a = p.call(this._weekdaysParse, i), a !== -1) ? a : (a = p.call(this._shortWeekdaysParse, i), a !== -1 ? a : null));
}
function Zr(e, t, s) {
  var r, a, n;
  if (this._weekdaysParseExact)
    return zr.call(this, e, t, s);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (a = H([2e3, 1]).day(r), s && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (n = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[r] = new RegExp(n.replace(".", ""), "i")), s && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (s && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (s && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!s && this._weekdaysParse[r].test(e))
      return r;
  }
}
function $r(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = ge(this, "Day");
  return e != null ? (e = Cr(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Br(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function qr(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Lr(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Jr(e) {
  return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || pt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (w(this, "_weekdaysRegex") || (this._weekdaysRegex = Er), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Qr(e) {
  return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || pt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (w(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Hr), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Xr(e) {
  return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || pt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (w(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ar), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function pt() {
  function e(g, T) {
    return T.length - g.length;
  }
  var t = [], s = [], r = [], a = [], n, i, u, h, c;
  for (n = 0; n < 7; n++)
    i = H([2e3, 1]).day(n), u = $(this.weekdaysMin(i, "")), h = $(this.weekdaysShort(i, "")), c = $(this.weekdays(i, "")), t.push(u), s.push(h), r.push(c), a.push(u), a.push(h), a.push(c);
  t.sort(e), s.sort(e), r.sort(e), a.sort(e), this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Yt() {
  return this.hours() % 12 || 12;
}
function Kr() {
  return this.hours() || 24;
}
f("H", ["HH", 2], 0, "hour");
f("h", ["hh", 2], 0, Yt);
f("k", ["kk", 2], 0, Kr);
f("hmm", 0, 0, function() {
  return "" + Yt.apply(this) + E(this.minutes(), 2);
});
f("hmmss", 0, 0, function() {
  return "" + Yt.apply(this) + E(this.minutes(), 2) + E(this.seconds(), 2);
});
f("Hmm", 0, 0, function() {
  return "" + this.hours() + E(this.minutes(), 2);
});
f("Hmmss", 0, 0, function() {
  return "" + this.hours() + E(this.minutes(), 2) + E(this.seconds(), 2);
});
function os(e, t) {
  f(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
os("a", !0);
os("A", !1);
function ls(e, t) {
  return t._meridiemParse;
}
d("a", ls);
d("A", ls);
d("H", D, St);
d("h", D, me);
d("k", D, me);
d("HH", D, N);
d("hh", D, N);
d("kk", D, N);
d("hmm", Jt);
d("hmmss", Qt);
d("Hmm", Jt);
d("Hmmss", Qt);
M(["H", "HH"], Y);
M(["k", "kk"], function(e, t, s) {
  var r = _(e);
  t[Y] = r === 24 ? 0 : r;
});
M(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
M(["h", "hh"], function(e, t, s) {
  t[Y] = _(e), m(s).bigHour = !0;
});
M("hmm", function(e, t, s) {
  var r = e.length - 2;
  t[Y] = _(e.substr(0, r)), t[F] = _(e.substr(r)), m(s).bigHour = !0;
});
M("hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[Y] = _(e.substr(0, r)), t[F] = _(e.substr(r, 2)), t[Z] = _(e.substr(a)), m(s).bigHour = !0;
});
M("Hmm", function(e, t, s) {
  var r = e.length - 2;
  t[Y] = _(e.substr(0, r)), t[F] = _(e.substr(r));
});
M("Hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[Y] = _(e.substr(0, r)), t[F] = _(e.substr(r, 2)), t[Z] = _(e.substr(a));
});
function ea(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var ta = /[ap]\.?m?\.?/i, sa = _e("Hours", !0);
function ra(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var us = {
  calendar: zs,
  longDateFormat: qs,
  invalidDate: Qs,
  ordinal: Ks,
  dayOfMonthOrdinalParse: er,
  relativeTime: sr,
  months: kr,
  monthsShort: es,
  week: Nr,
  weekdays: Ur,
  weekdaysMin: Ir,
  weekdaysShort: is,
  meridiemParse: ta
}, v = {}, we = {}, ve;
function aa(e, t) {
  var s, r = Math.min(e.length, t.length);
  for (s = 0; s < r; s += 1)
    if (e[s] !== t[s])
      return s;
  return r;
}
function Ht(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function na(e) {
  for (var t = 0, s, r, a, n; t < e.length; ) {
    for (n = Ht(e[t]).split("-"), s = n.length, r = Ht(e[t + 1]), r = r ? r.split("-") : null; s > 0; ) {
      if (a = Je(n.slice(0, s).join("-")), a)
        return a;
      if (r && r.length >= s && aa(n, r) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return ve;
}
function ia(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Je(e) {
  var t = null, s;
  if (v[e] === void 0 && typeof module < "u" && module && module.exports && ia(e))
    try {
      t = ve._abbr, s = require, s("./locale/" + e), ee(t);
    } catch {
      v[e] = null;
    }
  return v[e];
}
function ee(e, t) {
  var s;
  return e && (x(t) ? s = J(e) : s = Ot(e, t), s ? ve = s : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), ve._abbr;
}
function Ot(e, t) {
  if (t !== null) {
    var s, r = us;
    if (t.abbr = e, v[e] != null)
      Zt(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = v[e]._config;
    else if (t.parentLocale != null)
      if (v[t.parentLocale] != null)
        r = v[t.parentLocale]._config;
      else if (s = Je(t.parentLocale), s != null)
        r = s._config;
      else
        return we[t.parentLocale] || (we[t.parentLocale] = []), we[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return v[e] = new yt(ot(r, t)), we[e] && we[e].forEach(function(a) {
      Ot(a.name, a.config);
    }), ee(e), v[e];
  } else
    return delete v[e], null;
}
function oa(e, t) {
  if (t != null) {
    var s, r, a = us;
    v[e] != null && v[e].parentLocale != null ? v[e].set(ot(v[e]._config, t)) : (r = Je(e), r != null && (a = r._config), t = ot(a, t), r == null && (t.abbr = e), s = new yt(t), s.parentLocale = v[e], v[e] = s), ee(e);
  } else
    v[e] != null && (v[e].parentLocale != null ? (v[e] = v[e].parentLocale, e === ee() && ee(e)) : v[e] != null && delete v[e]);
  return v[e];
}
function J(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return ve;
  if (!C(e)) {
    if (t = Je(e), t)
      return t;
    e = [e];
  }
  return na(e);
}
function la() {
  return lt(v);
}
function Tt(e) {
  var t, s = e._a;
  return s && m(e).overflow === -2 && (t = s[z] < 0 || s[z] > 11 ? z : s[I] < 1 || s[I] > Dt(s[O], s[z]) ? I : s[Y] < 0 || s[Y] > 24 || s[Y] === 24 && (s[F] !== 0 || s[Z] !== 0 || s[ae] !== 0) ? Y : s[F] < 0 || s[F] > 59 ? F : s[Z] < 0 || s[Z] > 59 ? Z : s[ae] < 0 || s[ae] > 999 ? ae : -1, m(e)._overflowDayOfYear && (t < O || t > I) && (t = I), m(e)._overflowWeeks && t === -1 && (t = fr), m(e)._overflowWeekday && t === -1 && (t = cr), m(e).overflow = t), e;
}
var ua = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, da = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ha = /Z|[+-]\d\d(?::?\d\d)?/, Fe = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], at = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], fa = /^\/?Date\((-?\d+)/i, ca = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, ma = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function ds(e) {
  var t, s, r = e._i, a = ua.exec(r) || da.exec(r), n, i, u, h, c = Fe.length, g = at.length;
  if (a) {
    for (m(e).iso = !0, t = 0, s = c; t < s; t++)
      if (Fe[t][1].exec(a[1])) {
        i = Fe[t][0], n = Fe[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, s = g; t < s; t++)
        if (at[t][1].exec(a[3])) {
          u = (a[2] || " ") + at[t][0];
          break;
        }
      if (u == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!n && u != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (ha.exec(a[4]))
        h = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (u || "") + (h || ""), xt(e);
  } else
    e._isValid = !1;
}
function _a(e, t, s, r, a, n) {
  var i = [
    ya(e),
    es.indexOf(t),
    parseInt(s, 10),
    parseInt(r, 10),
    parseInt(a, 10)
  ];
  return n && i.push(parseInt(n, 10)), i;
}
function ya(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function wa(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function ka(e, t, s) {
  if (e) {
    var r = is.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== a)
      return m(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function Ma(e, t, s) {
  if (e)
    return ma[e];
  if (t)
    return 0;
  var r = parseInt(s, 10), a = r % 100, n = (r - a) / 100;
  return n * 60 + a;
}
function hs(e) {
  var t = ca.exec(wa(e._i)), s;
  if (t) {
    if (s = _a(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !ka(t[1], s, e))
      return;
    e._a = s, e._tzm = Ma(t[8], t[9], t[10]), e._d = Se.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), m(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function ga(e) {
  var t = fa.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (ds(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (hs(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : l.createFromInputFallback(e);
}
l.createFromInputFallback = P(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function le(e, t, s) {
  return e ?? t ?? s;
}
function Sa(e) {
  var t = new Date(l.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function bt(e) {
  var t, s, r = [], a, n, i;
  if (!e._d) {
    for (a = Sa(e), e._w && e._a[I] == null && e._a[z] == null && Da(e), e._dayOfYear != null && (i = le(e._a[O], a[O]), (e._dayOfYear > Me(i) || e._dayOfYear === 0) && (m(e)._overflowDayOfYear = !0), s = Se(i, 0, e._dayOfYear), e._a[z] = s.getUTCMonth(), e._a[I] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[Y] === 24 && e._a[F] === 0 && e._a[Z] === 0 && e._a[ae] === 0 && (e._nextDay = !0, e._a[Y] = 0), e._d = (e._useUTC ? Se : br).apply(
      null,
      r
    ), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Y] = 24), e._w && typeof e._w.d < "u" && e._w.d !== n && (m(e).weekdayMismatch = !0);
  }
}
function Da(e) {
  var t, s, r, a, n, i, u, h, c;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (n = 1, i = 4, s = le(
    t.GG,
    e._a[O],
    De(S(), 1, 4).year
  ), r = le(t.W, 1), a = le(t.E, 1), (a < 1 || a > 7) && (h = !0)) : (n = e._locale._week.dow, i = e._locale._week.doy, c = De(S(), n, i), s = le(t.gg, e._a[O], c.year), r = le(t.w, c.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (h = !0)) : t.e != null ? (a = t.e + n, (t.e < 0 || t.e > 6) && (h = !0)) : a = n), r < 1 || r > B(s, n, i) ? m(e)._overflowWeeks = !0 : h != null ? m(e)._overflowWeekday = !0 : (u = ns(s, r, a, n, i), e._a[O] = u.year, e._dayOfYear = u.dayOfYear);
}
l.ISO_8601 = function() {
};
l.RFC_2822 = function() {
};
function xt(e) {
  if (e._f === l.ISO_8601) {
    ds(e);
    return;
  }
  if (e._f === l.RFC_2822) {
    hs(e);
    return;
  }
  e._a = [], m(e).empty = !0;
  var t = "" + e._i, s, r, a, n, i, u = t.length, h = 0, c, g;
  for (a = $t(e._f, e._locale).match(wt) || [], g = a.length, s = 0; s < g; s++)
    n = a[s], r = (t.match(ur(n, e)) || [])[0], r && (i = t.substr(0, t.indexOf(r)), i.length > 0 && m(e).unusedInput.push(i), t = t.slice(
      t.indexOf(r) + r.length
    ), h += r.length), de[n] ? (r ? m(e).empty = !1 : m(e).unusedTokens.push(n), hr(n, r, e)) : e._strict && !r && m(e).unusedTokens.push(n);
  m(e).charsLeftOver = u - h, t.length > 0 && m(e).unusedInput.push(t), e._a[Y] <= 12 && m(e).bigHour === !0 && e._a[Y] > 0 && (m(e).bigHour = void 0), m(e).parsedDateParts = e._a.slice(0), m(e).meridiem = e._meridiem, e._a[Y] = va(
    e._locale,
    e._a[Y],
    e._meridiem
  ), c = m(e).era, c !== null && (e._a[O] = e._locale.erasConvertYear(c, e._a[O])), bt(e), Tt(e);
}
function va(e, t, s) {
  var r;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (r = e.isPM(s), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function pa(e) {
  var t, s, r, a, n, i, u = !1, h = e._f.length;
  if (h === 0) {
    m(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (a = 0; a < h; a++)
    n = 0, i = !1, t = _t({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], xt(t), mt(t) && (i = !0), n += m(t).charsLeftOver, n += m(t).unusedTokens.length * 10, m(t).score = n, u ? n < r && (r = n, s = t) : (r == null || n < r || i) && (r = n, s = t, i && (u = !0));
  X(e, s || t);
}
function Ya(e) {
  if (!e._d) {
    var t = kt(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = jt(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), bt(e);
  }
}
function Oa(e) {
  var t = new Ye(Tt(fs(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function fs(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || J(e._l), t === null || s === void 0 && t === "" ? Ge({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), L(t) ? new Ye(Tt(t)) : (pe(t) ? e._d = t : C(s) ? pa(e) : s ? xt(e) : Ta(e), mt(e) || (e._d = null), e));
}
function Ta(e) {
  var t = e._i;
  x(t) ? e._d = new Date(l.now()) : pe(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? ga(e) : C(t) ? (e._a = jt(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), bt(e)) : ne(t) ? Ya(e) : q(t) ? e._d = new Date(t) : l.createFromInputFallback(e);
}
function cs(e, t, s, r, a) {
  var n = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (s === !0 || s === !1) && (r = s, s = void 0), (ne(e) && ct(e) || C(e) && e.length === 0) && (e = void 0), n._isAMomentObject = !0, n._useUTC = n._isUTC = a, n._l = s, n._i = e, n._f = t, n._strict = r, Oa(n);
}
function S(e, t, s, r) {
  return cs(e, t, s, r, !1);
}
var ba = P(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = S.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Ge();
  }
), xa = P(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = S.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Ge();
  }
);
function ms(e, t) {
  var s, r;
  if (t.length === 1 && C(t[0]) && (t = t[0]), !t.length)
    return S();
  for (s = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](s)) && (s = t[r]);
  return s;
}
function Na() {
  var e = [].slice.call(arguments, 0);
  return ms("isBefore", e);
}
function Wa() {
  var e = [].slice.call(arguments, 0);
  return ms("isAfter", e);
}
var Pa = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, ke = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function Ra(e) {
  var t, s = !1, r, a = ke.length;
  for (t in e)
    if (w(e, t) && !(p.call(ke, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < a; ++r)
    if (e[ke[r]]) {
      if (s)
        return !1;
      parseFloat(e[ke[r]]) !== _(e[ke[r]]) && (s = !0);
    }
  return !0;
}
function Fa() {
  return this._isValid;
}
function Ca() {
  return U(NaN);
}
function Qe(e) {
  var t = kt(e), s = t.year || 0, r = t.quarter || 0, a = t.month || 0, n = t.week || t.isoWeek || 0, i = t.day || 0, u = t.hour || 0, h = t.minute || 0, c = t.second || 0, g = t.millisecond || 0;
  this._isValid = Ra(t), this._milliseconds = +g + c * 1e3 + // 1000
  h * 6e4 + // 1000 * 60
  u * 1e3 * 60 * 60, this._days = +i + n * 7, this._months = +a + r * 3 + s * 12, this._data = {}, this._locale = J(), this._bubble();
}
function Le(e) {
  return e instanceof Qe;
}
function dt(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function La(e, t, s) {
  var r = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), n = 0, i;
  for (i = 0; i < r; i++)
    (s && e[i] !== t[i] || !s && _(e[i]) !== _(t[i])) && n++;
  return n + a;
}
function _s(e, t) {
  f(e, 0, 0, function() {
    var s = this.utcOffset(), r = "+";
    return s < 0 && (s = -s, r = "-"), r + E(~~(s / 60), 2) + t + E(~~s % 60, 2);
  });
}
_s("Z", ":");
_s("ZZ", "");
d("Z", Be);
d("ZZ", Be);
M(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = Nt(Be, e);
});
var Ua = /([\+\-]|\d\d)/gi;
function Nt(e, t) {
  var s = (t || "").match(e), r, a, n;
  return s === null ? null : (r = s[s.length - 1] || [], a = (r + "").match(Ua) || ["-", 0, 0], n = +(a[1] * 60) + _(a[2]), n === 0 ? 0 : a[0] === "+" ? n : -n);
}
function Wt(e, t) {
  var s, r;
  return t._isUTC ? (s = t.clone(), r = (L(e) || pe(e) ? e.valueOf() : S(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + r), l.updateOffset(s, !1), s) : S(e).local();
}
function ht(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
l.updateOffset = function() {
};
function Ia(e, t, s) {
  var r = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Nt(Be, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (a = ht(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? ks(
      this,
      U(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, l.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : ht(this);
}
function Ea(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Ha(e) {
  return this.utcOffset(0, e);
}
function Aa(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(ht(this), "m")), this;
}
function Va() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Nt(or, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Ga(e) {
  return this.isValid() ? (e = e ? S(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function ja() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function za() {
  if (!x(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return _t(e, this), e = fs(e), e._a ? (t = e._isUTC ? H(e._a) : S(e._a), this._isDSTShifted = this.isValid() && La(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Za() {
  return this.isValid() ? !this._isUTC : !1;
}
function $a() {
  return this.isValid() ? this._isUTC : !1;
}
function ys() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Ba = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, qa = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function U(e, t) {
  var s = e, r = null, a, n, i;
  return Le(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : q(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (r = Ba.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: _(r[I]) * a,
    h: _(r[Y]) * a,
    m: _(r[F]) * a,
    s: _(r[Z]) * a,
    ms: _(dt(r[ae] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (r = qa.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: re(r[2], a),
    M: re(r[3], a),
    w: re(r[4], a),
    d: re(r[5], a),
    h: re(r[6], a),
    m: re(r[7], a),
    s: re(r[8], a)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (i = Ja(
    S(s.from),
    S(s.to)
  ), s = {}, s.ms = i.milliseconds, s.M = i.months), n = new Qe(s), Le(e) && w(e, "_locale") && (n._locale = e._locale), Le(e) && w(e, "_isValid") && (n._isValid = e._isValid), n;
}
U.fn = Qe.prototype;
U.invalid = Ca;
function re(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function At(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function Ja(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = Wt(t, e), e.isBefore(t) ? s = At(e, t) : (s = At(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function ws(e, t) {
  return function(s, r) {
    var a, n;
    return r !== null && !isNaN(+r) && (Zt(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), n = s, s = r, r = n), a = U(s, r), ks(this, a, e), this;
  };
}
function ks(e, t, s, r) {
  var a = t._milliseconds, n = dt(t._days), i = dt(t._months);
  e.isValid() && (r = r ?? !0, i && ss(e, ge(e, "Month") + i * s), n && Kt(e, "Date", ge(e, "Date") + n * s), a && e._d.setTime(e._d.valueOf() + a * s), r && l.updateOffset(e, n || i));
}
var Qa = ws(1, "add"), Xa = ws(-1, "subtract");
function Ms(e) {
  return typeof e == "string" || e instanceof String;
}
function Ka(e) {
  return L(e) || pe(e) || Ms(e) || q(e) || tn(e) || en(e) || e === null || e === void 0;
}
function en(e) {
  var t = ne(e) && !ct(e), s = !1, r = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], a, n, i = r.length;
  for (a = 0; a < i; a += 1)
    n = r[a], s = s || w(e, n);
  return t && s;
}
function tn(e) {
  var t = C(e), s = !1;
  return t && (s = e.filter(function(r) {
    return !q(r) && Ms(e);
  }).length === 0), t && s;
}
function sn(e) {
  var t = ne(e) && !ct(e), s = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, n;
  for (a = 0; a < r.length; a += 1)
    n = r[a], s = s || w(e, n);
  return t && s;
}
function rn(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function an(e, t) {
  arguments.length === 1 && (arguments[0] ? Ka(arguments[0]) ? (e = arguments[0], t = void 0) : sn(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || S(), r = Wt(s, this).startOf("day"), a = l.calendarFormat(this, r) || "sameElse", n = t && (A(t[a]) ? t[a].call(this, s) : t[a]);
  return this.format(
    n || this.localeData().calendar(a, this, S(s))
  );
}
function nn() {
  return new Ye(this);
}
function on(e, t) {
  var s = L(e) ? e : S(e);
  return this.isValid() && s.isValid() ? (t = R(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function ln(e, t) {
  var s = L(e) ? e : S(e);
  return this.isValid() && s.isValid() ? (t = R(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function un(e, t, s, r) {
  var a = L(e) ? e : S(e), n = L(t) ? t : S(t);
  return this.isValid() && a.isValid() && n.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(a, s) : !this.isBefore(a, s)) && (r[1] === ")" ? this.isBefore(n, s) : !this.isAfter(n, s))) : !1;
}
function dn(e, t) {
  var s = L(e) ? e : S(e), r;
  return this.isValid() && s.isValid() ? (t = R(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (r = s.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function hn(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function fn(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function cn(e, t, s) {
  var r, a, n;
  if (!this.isValid())
    return NaN;
  if (r = Wt(e, this), !r.isValid())
    return NaN;
  switch (a = (r.utcOffset() - this.utcOffset()) * 6e4, t = R(t), t) {
    case "year":
      n = Ue(this, r) / 12;
      break;
    case "month":
      n = Ue(this, r);
      break;
    case "quarter":
      n = Ue(this, r) / 3;
      break;
    case "second":
      n = (this - r) / 1e3;
      break;
    case "minute":
      n = (this - r) / 6e4;
      break;
    case "hour":
      n = (this - r) / 36e5;
      break;
    case "day":
      n = (this - r - a) / 864e5;
      break;
    case "week":
      n = (this - r - a) / 6048e5;
      break;
    default:
      n = this - r;
  }
  return s ? n : W(n);
}
function Ue(e, t) {
  if (e.date() < t.date())
    return -Ue(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(s, "months"), a, n;
  return t - r < 0 ? (a = e.clone().add(s - 1, "months"), n = (t - r) / (r - a)) : (a = e.clone().add(s + 1, "months"), n = (t - r) / (a - r)), -(s + n) || 0;
}
l.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
l.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function mn() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function _n(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? Ce(
    s,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : A(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ce(s, "Z")) : Ce(
    s,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function yn() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, r, a, n;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", n = t + '[")]', this.format(s + r + a + n);
}
function wn(e) {
  e || (e = this.isUtc() ? l.defaultFormatUtc : l.defaultFormat);
  var t = Ce(this, e);
  return this.localeData().postformat(t);
}
function kn(e, t) {
  return this.isValid() && (L(e) && e.isValid() || S(e).isValid()) ? U({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Mn(e) {
  return this.from(S(), e);
}
function gn(e, t) {
  return this.isValid() && (L(e) && e.isValid() || S(e).isValid()) ? U({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Sn(e) {
  return this.to(S(), e);
}
function gs(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = J(e), t != null && (this._locale = t), this);
}
var Ss = P(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Ds() {
  return this._locale;
}
var He = 1e3, he = 60 * He, Ae = 60 * he, vs = (365 * 400 + 97) * 24 * Ae;
function fe(e, t) {
  return (e % t + t) % t;
}
function ps(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - vs : new Date(e, t, s).valueOf();
}
function Ys(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - vs : Date.UTC(e, t, s);
}
function Dn(e) {
  var t, s;
  if (e = R(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Ys : ps, e) {
    case "year":
      t = s(this.year(), 0, 1);
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = s(this.year(), this.month(), 1);
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= fe(
        t + (this._isUTC ? 0 : this.utcOffset() * he),
        Ae
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= fe(t, he);
      break;
    case "second":
      t = this._d.valueOf(), t -= fe(t, He);
      break;
  }
  return this._d.setTime(t), l.updateOffset(this, !0), this;
}
function vn(e) {
  var t, s;
  if (e = R(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Ys : ps, e) {
    case "year":
      t = s(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = s(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Ae - fe(
        t + (this._isUTC ? 0 : this.utcOffset() * he),
        Ae
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += he - fe(t, he) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += He - fe(t, He) - 1;
      break;
  }
  return this._d.setTime(t), l.updateOffset(this, !0), this;
}
function pn() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Yn() {
  return Math.floor(this.valueOf() / 1e3);
}
function On() {
  return new Date(this.valueOf());
}
function Tn() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function bn() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function xn() {
  return this.isValid() ? this.toISOString() : null;
}
function Nn() {
  return mt(this);
}
function Wn() {
  return X({}, m(this));
}
function Pn() {
  return m(this).overflow;
}
function Rn() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
f("N", 0, 0, "eraAbbr");
f("NN", 0, 0, "eraAbbr");
f("NNN", 0, 0, "eraAbbr");
f("NNNN", 0, 0, "eraName");
f("NNNNN", 0, 0, "eraNarrow");
f("y", ["y", 1], "yo", "eraYear");
f("y", ["yy", 2], 0, "eraYear");
f("y", ["yyy", 3], 0, "eraYear");
f("y", ["yyyy", 4], 0, "eraYear");
d("N", Pt);
d("NN", Pt);
d("NNN", Pt);
d("NNNN", jn);
d("NNNNN", zn);
M(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, s, r) {
    var a = s._locale.erasParse(e, r, s._strict);
    a ? m(s).era = a : m(s).invalidEra = e;
  }
);
d("y", ce);
d("yy", ce);
d("yyy", ce);
d("yyyy", ce);
d("yo", Zn);
M(["y", "yy", "yyy", "yyyy"], O);
M(["yo"], function(e, t, s, r) {
  var a;
  s._locale._eraYearOrdinalRegex && (a = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[O] = s._locale.eraYearOrdinalParse(e, a) : t[O] = parseInt(e, 10);
});
function Fn(e, t) {
  var s, r, a, n = this._eras || J("en")._eras;
  for (s = 0, r = n.length; s < r; ++s) {
    switch (typeof n[s].since) {
      case "string":
        a = l(n[s].since).startOf("day"), n[s].since = a.valueOf();
        break;
    }
    switch (typeof n[s].until) {
      case "undefined":
        n[s].until = 1 / 0;
        break;
      case "string":
        a = l(n[s].until).startOf("day").valueOf(), n[s].until = a.valueOf();
        break;
    }
  }
  return n;
}
function Cn(e, t, s) {
  var r, a, n = this.eras(), i, u, h;
  for (e = e.toUpperCase(), r = 0, a = n.length; r < a; ++r)
    if (i = n[r].name.toUpperCase(), u = n[r].abbr.toUpperCase(), h = n[r].narrow.toUpperCase(), s)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (u === e)
            return n[r];
          break;
        case "NNNN":
          if (i === e)
            return n[r];
          break;
        case "NNNNN":
          if (h === e)
            return n[r];
          break;
      }
    else if ([i, u, h].indexOf(e) >= 0)
      return n[r];
}
function Ln(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? l(e.since).year() : l(e.since).year() + (t - e.offset) * s;
}
function Un() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].name;
  return "";
}
function In() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].narrow;
  return "";
}
function En() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].abbr;
  return "";
}
function Hn() {
  var e, t, s, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = a[e].since <= a[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return (this.year() - l(a[e].since).year()) * s + a[e].offset;
  return this.year();
}
function An(e) {
  return w(this, "_erasNameRegex") || Rt.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Vn(e) {
  return w(this, "_erasAbbrRegex") || Rt.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Gn(e) {
  return w(this, "_erasNarrowRegex") || Rt.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Pt(e, t) {
  return t.erasAbbrRegex(e);
}
function jn(e, t) {
  return t.erasNameRegex(e);
}
function zn(e, t) {
  return t.erasNarrowRegex(e);
}
function Zn(e, t) {
  return t._eraYearOrdinalRegex || ce;
}
function Rt() {
  var e = [], t = [], s = [], r = [], a, n, i, u, h, c = this.eras();
  for (a = 0, n = c.length; a < n; ++a)
    i = $(c[a].name), u = $(c[a].abbr), h = $(c[a].narrow), t.push(i), e.push(u), s.push(h), r.push(i), r.push(u), r.push(h);
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
f(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
f(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Xe(e, t) {
  f(0, [e, e.length], 0, t);
}
Xe("gggg", "weekYear");
Xe("ggggg", "weekYear");
Xe("GGGG", "isoWeekYear");
Xe("GGGGG", "isoWeekYear");
d("G", $e);
d("g", $e);
d("GG", D, N);
d("gg", D, N);
d("GGGG", gt, Mt);
d("gggg", gt, Mt);
d("GGGGG", Ze, je);
d("ggggg", Ze, je);
Te(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, r) {
    t[r.substr(0, 2)] = _(e);
  }
);
Te(["gg", "GG"], function(e, t, s, r) {
  t[r] = l.parseTwoDigitYear(e);
});
function $n(e) {
  return Os.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Bn(e) {
  return Os.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function qn() {
  return B(this.year(), 1, 4);
}
function Jn() {
  return B(this.isoWeekYear(), 1, 4);
}
function Qn() {
  var e = this.localeData()._week;
  return B(this.year(), e.dow, e.doy);
}
function Xn() {
  var e = this.localeData()._week;
  return B(this.weekYear(), e.dow, e.doy);
}
function Os(e, t, s, r, a) {
  var n;
  return e == null ? De(this, r, a).year : (n = B(e, r, a), t > n && (t = n), Kn.call(this, e, t, s, r, a));
}
function Kn(e, t, s, r, a) {
  var n = ns(e, t, s, r, a), i = Se(n.year, 0, n.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
f("Q", 0, "Qo", "quarter");
d("Q", Bt);
M("Q", function(e, t) {
  t[z] = (_(e) - 1) * 3;
});
function ei(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
f("D", ["DD", 2], "Do", "date");
d("D", D, me);
d("DD", D, N);
d("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
M(["D", "DD"], I);
M("Do", function(e, t) {
  t[I] = _(e.match(D)[0]);
});
var Ts = _e("Date", !0);
f("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
d("DDD", ze);
d("DDDD", qt);
M(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = _(e);
});
function ti(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
f("m", ["mm", 2], 0, "minute");
d("m", D, St);
d("mm", D, N);
M(["m", "mm"], F);
var si = _e("Minutes", !1);
f("s", ["ss", 2], 0, "second");
d("s", D, St);
d("ss", D, N);
M(["s", "ss"], Z);
var ri = _e("Seconds", !1);
f("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
f(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
f(0, ["SSS", 3], 0, "millisecond");
f(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
f(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
f(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
f(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
f(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
f(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
d("S", ze, Bt);
d("SS", ze, N);
d("SSS", ze, qt);
var K, bs;
for (K = "SSSS"; K.length <= 9; K += "S")
  d(K, ce);
function ai(e, t) {
  t[ae] = _(("0." + e) * 1e3);
}
for (K = "S"; K.length <= 9; K += "S")
  M(K, ai);
bs = _e("Milliseconds", !1);
f("z", 0, 0, "zoneAbbr");
f("zz", 0, 0, "zoneName");
function ni() {
  return this._isUTC ? "UTC" : "";
}
function ii() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var o = Ye.prototype;
o.add = Qa;
o.calendar = an;
o.clone = nn;
o.diff = cn;
o.endOf = vn;
o.format = wn;
o.from = kn;
o.fromNow = Mn;
o.to = gn;
o.toNow = Sn;
o.get = _r;
o.invalidAt = Pn;
o.isAfter = on;
o.isBefore = ln;
o.isBetween = un;
o.isSame = dn;
o.isSameOrAfter = hn;
o.isSameOrBefore = fn;
o.isValid = Nn;
o.lang = Ss;
o.locale = gs;
o.localeData = Ds;
o.max = xa;
o.min = ba;
o.parsingFlags = Wn;
o.set = yr;
o.startOf = Dn;
o.subtract = Xa;
o.toArray = Tn;
o.toObject = bn;
o.toDate = On;
o.toISOString = _n;
o.inspect = yn;
typeof Symbol < "u" && Symbol.for != null && (o[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
o.toJSON = xn;
o.toString = mn;
o.unix = Yn;
o.valueOf = pn;
o.creationData = Rn;
o.eraName = Un;
o.eraNarrow = In;
o.eraAbbr = En;
o.eraYear = Hn;
o.year = Xt;
o.isLeapYear = mr;
o.weekYear = $n;
o.isoWeekYear = Bn;
o.quarter = o.quarters = ei;
o.month = rs;
o.daysInMonth = Yr;
o.week = o.weeks = Rr;
o.isoWeek = o.isoWeeks = Fr;
o.weeksInYear = Qn;
o.weeksInWeekYear = Xn;
o.isoWeeksInYear = qn;
o.isoWeeksInISOWeekYear = Jn;
o.date = Ts;
o.day = o.days = $r;
o.weekday = Br;
o.isoWeekday = qr;
o.dayOfYear = ti;
o.hour = o.hours = sa;
o.minute = o.minutes = si;
o.second = o.seconds = ri;
o.millisecond = o.milliseconds = bs;
o.utcOffset = Ia;
o.utc = Ha;
o.local = Aa;
o.parseZone = Va;
o.hasAlignedHourOffset = Ga;
o.isDST = ja;
o.isLocal = Za;
o.isUtcOffset = $a;
o.isUtc = ys;
o.isUTC = ys;
o.zoneAbbr = ni;
o.zoneName = ii;
o.dates = P(
  "dates accessor is deprecated. Use date instead.",
  Ts
);
o.months = P(
  "months accessor is deprecated. Use month instead",
  rs
);
o.years = P(
  "years accessor is deprecated. Use year instead",
  Xt
);
o.zone = P(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Ea
);
o.isDSTShifted = P(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  za
);
function oi(e) {
  return S(e * 1e3);
}
function li() {
  return S.apply(null, arguments).parseZone();
}
function xs(e) {
  return e;
}
var k = yt.prototype;
k.calendar = Zs;
k.longDateFormat = Js;
k.invalidDate = Xs;
k.ordinal = tr;
k.preparse = xs;
k.postformat = xs;
k.relativeTime = rr;
k.pastFuture = ar;
k.set = js;
k.eras = Fn;
k.erasParse = Cn;
k.erasConvertYear = Ln;
k.erasAbbrRegex = Vn;
k.erasNameRegex = An;
k.erasNarrowRegex = Gn;
k.months = Sr;
k.monthsShort = Dr;
k.monthsParse = pr;
k.monthsRegex = Tr;
k.monthsShortRegex = Or;
k.week = xr;
k.firstDayOfYear = Pr;
k.firstDayOfWeek = Wr;
k.weekdays = Vr;
k.weekdaysMin = jr;
k.weekdaysShort = Gr;
k.weekdaysParse = Zr;
k.weekdaysRegex = Jr;
k.weekdaysShortRegex = Qr;
k.weekdaysMinRegex = Xr;
k.isPM = ea;
k.meridiem = ra;
function Ve(e, t, s, r) {
  var a = J(), n = H().set(r, t);
  return a[s](n, e);
}
function Ns(e, t, s) {
  if (q(e) && (t = e, e = void 0), e = e || "", t != null)
    return Ve(e, t, s, "month");
  var r, a = [];
  for (r = 0; r < 12; r++)
    a[r] = Ve(e, r, s, "month");
  return a;
}
function Ft(e, t, s, r) {
  typeof e == "boolean" ? (q(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, q(t) && (s = t, t = void 0), t = t || "");
  var a = J(), n = e ? a._week.dow : 0, i, u = [];
  if (s != null)
    return Ve(t, (s + n) % 7, r, "day");
  for (i = 0; i < 7; i++)
    u[i] = Ve(t, (i + n) % 7, r, "day");
  return u;
}
function ui(e, t) {
  return Ns(e, t, "months");
}
function di(e, t) {
  return Ns(e, t, "monthsShort");
}
function hi(e, t, s) {
  return Ft(e, t, s, "weekdays");
}
function fi(e, t, s) {
  return Ft(e, t, s, "weekdaysShort");
}
function ci(e, t, s) {
  return Ft(e, t, s, "weekdaysMin");
}
ee("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, s = _(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + s;
  }
});
l.lang = P(
  "moment.lang is deprecated. Use moment.locale instead.",
  ee
);
l.langData = P(
  "moment.langData is deprecated. Use moment.localeData instead.",
  J
);
var V = Math.abs;
function mi() {
  var e = this._data;
  return this._milliseconds = V(this._milliseconds), this._days = V(this._days), this._months = V(this._months), e.milliseconds = V(e.milliseconds), e.seconds = V(e.seconds), e.minutes = V(e.minutes), e.hours = V(e.hours), e.months = V(e.months), e.years = V(e.years), this;
}
function Ws(e, t, s, r) {
  var a = U(t, s);
  return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble();
}
function _i(e, t) {
  return Ws(this, e, t, 1);
}
function yi(e, t) {
  return Ws(this, e, t, -1);
}
function Vt(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function wi() {
  var e = this._milliseconds, t = this._days, s = this._months, r = this._data, a, n, i, u, h;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += Vt(ft(s) + t) * 864e5, t = 0, s = 0), r.milliseconds = e % 1e3, a = W(e / 1e3), r.seconds = a % 60, n = W(a / 60), r.minutes = n % 60, i = W(n / 60), r.hours = i % 24, t += W(i / 24), h = W(Ps(t)), s += h, t -= Vt(ft(h)), u = W(s / 12), s %= 12, r.days = t, r.months = s, r.years = u, this;
}
function Ps(e) {
  return e * 4800 / 146097;
}
function ft(e) {
  return e * 146097 / 4800;
}
function ki(e) {
  if (!this.isValid())
    return NaN;
  var t, s, r = this._milliseconds;
  if (e = R(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, s = this._months + Ps(t), e) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (t = this._days + Math.round(ft(this._months)), e) {
      case "week":
        return t / 7 + r / 6048e5;
      case "day":
        return t + r / 864e5;
      case "hour":
        return t * 24 + r / 36e5;
      case "minute":
        return t * 1440 + r / 6e4;
      case "second":
        return t * 86400 + r / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + r;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function Q(e) {
  return function() {
    return this.as(e);
  };
}
var Rs = Q("ms"), Mi = Q("s"), gi = Q("m"), Si = Q("h"), Di = Q("d"), vi = Q("w"), pi = Q("M"), Yi = Q("Q"), Oi = Q("y"), Ti = Rs;
function bi() {
  return U(this);
}
function xi(e) {
  return e = R(e), this.isValid() ? this[e + "s"]() : NaN;
}
function ie(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Ni = ie("milliseconds"), Wi = ie("seconds"), Pi = ie("minutes"), Ri = ie("hours"), Fi = ie("days"), Ci = ie("months"), Li = ie("years");
function Ui() {
  return W(this.days() / 7);
}
var j = Math.round, ue = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function Ii(e, t, s, r, a) {
  return a.relativeTime(t || 1, !!s, e, r);
}
function Ei(e, t, s, r) {
  var a = U(e).abs(), n = j(a.as("s")), i = j(a.as("m")), u = j(a.as("h")), h = j(a.as("d")), c = j(a.as("M")), g = j(a.as("w")), T = j(a.as("y")), b = n <= s.ss && ["s", n] || n < s.s && ["ss", n] || i <= 1 && ["m"] || i < s.m && ["mm", i] || u <= 1 && ["h"] || u < s.h && ["hh", u] || h <= 1 && ["d"] || h < s.d && ["dd", h];
  return s.w != null && (b = b || g <= 1 && ["w"] || g < s.w && ["ww", g]), b = b || c <= 1 && ["M"] || c < s.M && ["MM", c] || T <= 1 && ["y"] || ["yy", T], b[2] = t, b[3] = +e > 0, b[4] = r, Ii.apply(null, b);
}
function Hi(e) {
  return e === void 0 ? j : typeof e == "function" ? (j = e, !0) : !1;
}
function Ai(e, t) {
  return ue[e] === void 0 ? !1 : t === void 0 ? ue[e] : (ue[e] = t, e === "s" && (ue.ss = t - 1), !0);
}
function Vi(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, r = ue, a, n;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (r = Object.assign({}, ue, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), a = this.localeData(), n = Ei(this, !s, r, a), s && (n = a.pastFuture(+this, n)), a.postformat(n);
}
var nt = Math.abs;
function oe(e) {
  return (e > 0) - (e < 0) || +e;
}
function Ke() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = nt(this._milliseconds) / 1e3, t = nt(this._days), s = nt(this._months), r, a, n, i, u = this.asSeconds(), h, c, g, T;
  return u ? (r = W(e / 60), a = W(r / 60), e %= 60, r %= 60, n = W(s / 12), s %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", h = u < 0 ? "-" : "", c = oe(this._months) !== oe(u) ? "-" : "", g = oe(this._days) !== oe(u) ? "-" : "", T = oe(this._milliseconds) !== oe(u) ? "-" : "", h + "P" + (n ? c + n + "Y" : "") + (s ? c + s + "M" : "") + (t ? g + t + "D" : "") + (a || r || e ? "T" : "") + (a ? T + a + "H" : "") + (r ? T + r + "M" : "") + (e ? T + i + "S" : "")) : "P0D";
}
var y = Qe.prototype;
y.isValid = Fa;
y.abs = mi;
y.add = _i;
y.subtract = yi;
y.as = ki;
y.asMilliseconds = Rs;
y.asSeconds = Mi;
y.asMinutes = gi;
y.asHours = Si;
y.asDays = Di;
y.asWeeks = vi;
y.asMonths = pi;
y.asQuarters = Yi;
y.asYears = Oi;
y.valueOf = Ti;
y._bubble = wi;
y.clone = bi;
y.get = xi;
y.milliseconds = Ni;
y.seconds = Wi;
y.minutes = Pi;
y.hours = Ri;
y.days = Fi;
y.weeks = Ui;
y.months = Ci;
y.years = Li;
y.humanize = Vi;
y.toISOString = Ke;
y.toString = Ke;
y.toJSON = Ke;
y.locale = gs;
y.localeData = Ds;
y.toIsoString = P(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Ke
);
y.lang = Ss;
f("X", 0, 0, "unix");
f("x", 0, 0, "valueOf");
d("x", $e);
d("X", lr);
M("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
M("x", function(e, t, s) {
  s._d = new Date(_(e));
});
//! moment.js
l.version = "2.30.1";
Vs(S);
l.fn = o;
l.min = Na;
l.max = Wa;
l.now = Pa;
l.utc = H;
l.unix = oi;
l.months = ui;
l.isDate = pe;
l.locale = ee;
l.invalid = Ge;
l.duration = U;
l.isMoment = L;
l.weekdays = hi;
l.parseZone = li;
l.localeData = J;
l.isDuration = Le;
l.monthsShort = di;
l.weekdaysMin = ci;
l.defineLocale = Ot;
l.updateLocale = oa;
l.locales = la;
l.weekdaysShort = fi;
l.normalizeUnits = R;
l.relativeTimeRounding = Hi;
l.relativeTimeThreshold = Ai;
l.calendarFormat = rn;
l.prototype = o;
l.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
const Gi = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [r, a] of t)
    s[r] = a;
  return s;
}, Fs = (e) => (Hs("data-v-e5e4fb35"), e = e(), As(), e), ji = { class: "map-container" }, zi = { class: "times" }, Zi = { class: "weeks" }, $i = { class: "month" }, Bi = { class: "tooltip" }, qi = { class: "legend" }, Ji = /* @__PURE__ */ Fs(() => /* @__PURE__ */ G("div", { class: "level-desc" }, "less", -1)), Qi = /* @__PURE__ */ Fs(() => /* @__PURE__ */ G("div", { class: "level-desc" }, "more", -1)), Xi = {
  __name: "index",
  props: {
    contributionData: {
      default: () => [],
      type: Array
    }
  },
  setup(e) {
    const t = e, s = Lt([]), r = Lt({}), a = ["Tue", "Thu", "Sat"], n = () => {
      let c = l().subtract(1, "years").startOf("week").add(1, "days"), g = l().diff(c, "days") + 1, T = Math.ceil(g / 7), b = [], be = null;
      for (let et = 0; et < T; et++) {
        let ye = {
          columns: 7,
          data: []
        };
        for (let xe = 0; xe < 7; xe++) {
          let tt = c.clone().add(et * 7 + xe, "days"), Ct = tt.format("YYYY-MM-DD"), Cs = r.value[Ct];
          ye.data.push({
            number: Cs,
            date: Ct
          }), xe > 0 && tt.month() !== be && (ye.title = tt.format("MMM"));
        }
        be = l(ye.data[ye.data.length - 1].date).month(), b.push(ye);
      }
      s.value = b;
    }, i = async () => {
      let h = {};
      t.contributionData.forEach((c) => {
        let g = l(c.create_time).format("YYYY-MM-DD");
        h[g.toString()] = c.count;
      }), r.value = h;
    }, u = (h) => h >= 12 ? "#196127" : h >= 8 ? "#239A3B" : h >= 4 ? "#7BC96F" : h >= 1 ? "#C6E48B" : "#EBEDF0";
    return Ls(async () => {
      await i(), n();
    }), (h, c) => (te(), se("div", ji, [
      G("div", zi, [
        G("div", Zi, [
          (te(), se(Ne, null, We(a, (g, T) => G("div", {
            class: "week",
            key: T
          }, Pe(g), 1)), 64))
        ]),
        (te(!0), se(Ne, null, We(s.value, (g, T) => (te(), se("div", {
          class: "column",
          key: T
        }, [
          G("div", $i, Pe(g.title), 1),
          (te(!0), se(Ne, null, We(g.data, (b, be) => (te(), se("div", {
            class: "date-wrapper",
            key: be,
            style: Us(`background:${u(b.number)};`)
          }, [
            G("div", Bi, Pe(b.number || "No") + " contributions on " + Pe(Is(l)(b.date, "YYYY-MM-DD").format("MMM D, YYYY")), 1)
          ], 4))), 128))
        ]))), 128))
      ]),
      G("div", qi, [
        Ji,
        (te(), se(Ne, null, We(5, (g) => G("div", {
          class: Es(["level", "level-" + g]),
          key: g
        }, null, 2)), 64)),
        Qi
      ])
    ]));
  }
}, Ki = /* @__PURE__ */ Gi(Xi, [["__scopeId", "data-v-e5e4fb35"]]), eo = [
  {
    name: "ContributionMap",
    component: Ki
  }
], so = {
  install(e) {
    eo.forEach((t) => {
      e.component(t.name, t.component);
    });
  }
};
export {
  Ki as ContributionMap,
  so as default
};
