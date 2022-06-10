const domUtils = {
  css(elem, attr, extra) {
    let num;
    let val;
    if (window.getComputedStyle) {
      val = window.getComputedStyle(elem, null)[attr];
    } else if (elem.currentStyle) {
      val = elem.currentStyle[attr];
    }
    if (val && extra) {
      num = parseFloat(val);
      return extra === true || isFinite(num) ? num || 0 : val;
    }
    return val;
  },
  offset(elem) {
    const win = window;
    const doc = elem && elem.ownerDocument;
    let box = { top: 0, left: 0 };
    let docElem;

    if (!doc) {
      return box;
    }
    docElem = doc.documentElement;

    if (typeof elem.getBoundingClientRect !== 'undefined') {
      box = elem.getBoundingClientRect();
    }
    return {
      top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
      left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0),
    };
  },
  position(elem) {
    let offsetParent;
    let offset;
    let parentOffset = { top: 0, left: 0 };

    if (this.css(elem, 'position') === 'fixed') {
      offset = elem.getBoundingClientRect();
    } else {
      offsetParent = this.offsetParent(elem);
      offset = this.offset(elem);

      if (!this.nodeName(offsetParent, 'html')) {
        parentOffset = this.offset(offsetParent);
      }

      parentOffset.top += this.css(offsetParent, 'borderTopWidth', true);
      parentOffset.left += this.css(offsetParent, 'borderLeftWidth', true);
    }

    return {
      top: offset.top - parentOffset.top - this.css(elem, 'marginTop', true),
      left: offset.left - parentOffset.left - this.css(elem, 'marginLeft', true),
    };
  },
  offsetParent(elem) {
    let offsetParent = elem.offsetParent;
    while (
      offsetParent &&
      (!this.nodeName(offsetParent, 'html') && this.css(offsetParent, 'position') === 'static')
    ) {
      offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || document.documentElement;
  },
  nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name;
  },
  width(elem) {
    if (!elem) {
      return 0;
    }
    let ret = elem.offsetWidth;
    ret -=
      this.css(elem, 'borderLeftWidth', true) +
      this.css(elem, 'paddingLeft', true) +
      this.css(elem, 'paddingRight', true) +
      this.css(elem, 'borderRightWidth', true);
    return ret;
  },
  innerWidth(elem) {
    if (!elem) {
      return 0;
    }
    return elem.offsetWidth;
  },
  outerWidth(elem, extra?: boolean) {
    if (!elem) {
      return 0;
    }
    let ret = elem.offsetWidth;
    if (extra) {
      ret += this.css(elem, 'marginLeft', true) + this.css(elem, 'marginRight', true);
    }
    return ret;
  },
  height(elem) {
    if (!elem) {
      return 0;
    }
    let ret = elem.offsetHeight;
    ret -=
      this.css(elem, 'borderTopWidth', true) +
      this.css(elem, 'paddingTop', true) +
      this.css(elem, 'paddingBottom', true) +
      this.css(elem, 'borderBottomWidth', true);
    return ret;
  },
  innerHeight(elem) {
    if (!elem) {
      return 0;
    }
    return elem.offsetHeight;
  },
  outerHeight(elem, extra?: boolean) {
    if (!elem) {
      return 0;
    }
    let ret = elem.offsetHeight;
    if (extra) {
      ret += this.css(elem, 'marginTop', true) + this.css(elem, 'marginBottom', true);
    }
    return ret;
  },
  parents(el, selector) {
    const result: any = [];
    const matchesSelector =
      el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

    el = el.parentElement;
    while (el) {
      if (matchesSelector.call(el, selector)) {
        result.push(el);
      }
      el = el.parentElement;
    }
    return result;
  },
};

export default domUtils;
