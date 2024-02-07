function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React, { Component } from 'react';
import Announcer from './Announcer';
import AnnouncerContext from './AnnouncerContext';
var LiveAnnouncer = /*#__PURE__*/function (_Component) {
  _inheritsLoose(LiveAnnouncer, _Component);
  function LiveAnnouncer(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _defineProperty(_assertThisInitialized(_this), "announcePolite", function (message, id) {
      _this.setState({
        announcePoliteMessage: message,
        politeMessageId: id ? id : ''
      });
    });
    _defineProperty(_assertThisInitialized(_this), "announceAssertive", function (message, id) {
      _this.setState({
        announceAssertiveMessage: message,
        assertiveMessageId: id ? id : ''
      });
    });
    _this.state = {
      announcePoliteMessage: '',
      politeMessageId: '',
      announceAssertiveMessage: '',
      assertiveMessageId: '',
      updateFunctions: {
        announcePolite: _this.announcePolite,
        announceAssertive: _this.announceAssertive
      }
    };
    return _this;
  }
  var _proto = LiveAnnouncer.prototype;
  _proto.render = function render() {
    var _this$state = this.state,
      announcePoliteMessage = _this$state.announcePoliteMessage,
      politeMessageId = _this$state.politeMessageId,
      announceAssertiveMessage = _this$state.announceAssertiveMessage,
      assertiveMessageId = _this$state.assertiveMessageId,
      updateFunctions = _this$state.updateFunctions;
    return /*#__PURE__*/React.createElement(AnnouncerContext.Provider, {
      value: updateFunctions
    }, this.props.children, /*#__PURE__*/React.createElement(Announcer, {
      assertiveMessage: announceAssertiveMessage,
      assertiveMessageId: assertiveMessageId,
      politeMessage: announcePoliteMessage,
      politeMessageId: politeMessageId
    }));
  };
  return LiveAnnouncer;
}(Component);
export default LiveAnnouncer;