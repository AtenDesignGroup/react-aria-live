function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MessageBlock from './MessageBlock';
var Announcer = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Announcer, _Component);
  function Announcer() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _defineProperty(_assertThisInitialized(_this), "state", {
      assertiveMessage1: '',
      assertiveMessage2: '',
      politeMessage1: '',
      politeMessage2: '',
      oldPolitemessage: '',
      oldPoliteMessageId: '',
      oldAssertiveMessage: '',
      oldAssertiveMessageId: '',
      setAlternatePolite: false,
      setAlternateAssertive: false
    });
    return _this;
  }
  Announcer.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, state) {
    var oldPolitemessage = state.oldPolitemessage,
      oldPoliteMessageId = state.oldPoliteMessageId,
      oldAssertiveMessage = state.oldAssertiveMessage,
      oldAssertiveMessageId = state.oldAssertiveMessageId;
    var politeMessage = nextProps.politeMessage,
      politeMessageId = nextProps.politeMessageId,
      assertiveMessage = nextProps.assertiveMessage,
      assertiveMessageId = nextProps.assertiveMessageId;
    if (oldPolitemessage !== politeMessage || oldPoliteMessageId !== politeMessageId) {
      return {
        politeMessage1: state.setAlternatePolite ? '' : politeMessage,
        politeMessage2: state.setAlternatePolite ? politeMessage : '',
        oldPolitemessage: politeMessage,
        oldPoliteMessageId: politeMessageId,
        setAlternatePolite: !state.setAlternatePolite
      };
    }
    if (oldAssertiveMessage !== assertiveMessage || oldAssertiveMessageId !== assertiveMessageId) {
      return {
        assertiveMessage1: state.setAlternateAssertive ? '' : assertiveMessage,
        assertiveMessage2: state.setAlternateAssertive ? assertiveMessage : '',
        oldAssertiveMessage: assertiveMessage,
        oldAssertiveMessageId: assertiveMessageId,
        setAlternateAssertive: !state.setAlternateAssertive
      };
    }
    return null;
  };
  var _proto = Announcer.prototype;
  _proto.render = function render() {
    var _this$state = this.state,
      assertiveMessage1 = _this$state.assertiveMessage1,
      assertiveMessage2 = _this$state.assertiveMessage2,
      politeMessage1 = _this$state.politeMessage1,
      politeMessage2 = _this$state.politeMessage2;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MessageBlock, {
      "aria-live": "assertive",
      message: assertiveMessage1
    }), /*#__PURE__*/React.createElement(MessageBlock, {
      "aria-live": "assertive",
      message: assertiveMessage2
    }), /*#__PURE__*/React.createElement(MessageBlock, {
      "aria-live": "polite",
      message: politeMessage1
    }), /*#__PURE__*/React.createElement(MessageBlock, {
      "aria-live": "polite",
      message: politeMessage2
    }));
  };
  return Announcer;
}(Component);
Announcer.propTypes = process.env.NODE_ENV !== "production" ? {
  politeMessage: PropTypes.string,
  assertiveMessage: PropTypes.string
} : {};
export default Announcer;