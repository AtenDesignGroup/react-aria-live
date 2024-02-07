function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import PropTypes from 'prop-types';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
var AnnouncerMessage = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AnnouncerMessage, _Component);
  function AnnouncerMessage() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _defineProperty(_assertThisInitialized(_this), "announce", function () {
      var _this$props = _this.props,
        message = _this$props.message,
        ariaLive = _this$props['aria-live'],
        announceAssertive = _this$props.announceAssertive,
        announcePolite = _this$props.announcePolite;
      if (ariaLive === 'assertive') {
        announceAssertive(message || '', uuidv4());
      }
      if (ariaLive === 'polite') {
        announcePolite(message || '', uuidv4());
      }
    });
    return _this;
  }
  var _proto = AnnouncerMessage.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.announce();
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var message = this.props.message;
    if (message !== prevProps.message) {
      this.announce();
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this$props2 = this.props,
      clearOnUnmount = _this$props2.clearOnUnmount,
      announceAssertive = _this$props2.announceAssertive,
      announcePolite = _this$props2.announcePolite;
    if (clearOnUnmount === true || clearOnUnmount === 'true') {
      announceAssertive('');
      announcePolite('');
    }
  };
  _proto.render = function render() {
    return null;
  };
  return AnnouncerMessage;
}(Component);
AnnouncerMessage.propTypes = process.env.NODE_ENV !== "production" ? {
  message: PropTypes.string.isRequired,
  'aria-live': PropTypes.string.isRequired,
  clearOnUnmount: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['true', 'false'])]),
  announceAssertive: PropTypes.func,
  announcePolite: PropTypes.func
} : {};
export default AnnouncerMessage;