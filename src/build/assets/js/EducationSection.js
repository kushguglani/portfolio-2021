(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["EducationSection"],{

/***/ "./constants/education.js":
/*!********************************!*\
  !*** ./constants/education.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = [{\n  title: 'Bachelor of Technology',\n  subTitle: 'Information Technology',\n  date: '2012 - 2016',\n  desc: '\\n            Bharat Institute of Technology, Meerut\\n            <br><br>\\n            Percentage Scored: 74.6%\\n          '\n}, {\n  title: '12th',\n  subTitle: 'CBSE',\n  date: '2012',\n  desc: '\\n            BJS Public School, Meerut\\n            <br><br>\\n            Percentage Scored: 80.4%\\n          '\n}, {\n  title: '10th',\n  subTitle: 'CBSE',\n  date: '2010',\n  desc: '\\n            BJS Public School, Meerut\\n            <br><br>\\n            CGPA: 8.0\\n          '\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvZWR1Y2F0aW9uLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb25zdGFudHMvZWR1Y2F0aW9uLmpzPzUzOWMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnQmFjaGVsb3Igb2YgVGVjaG5vbG9neScsXHJcbiAgICBzdWJUaXRsZTogJ0luZm9ybWF0aW9uIFRlY2hub2xvZ3knLFxyXG4gICAgZGF0ZTogJzIwMTIgLSAyMDE2JyxcclxuICAgIGRlc2M6IGBcclxuICAgICAgICAgICAgQmhhcmF0IEluc3RpdHV0ZSBvZiBUZWNobm9sb2d5LCBNZWVydXRcclxuICAgICAgICAgICAgPGJyPjxicj5cclxuICAgICAgICAgICAgUGVyY2VudGFnZSBTY29yZWQ6IDc0LjYlXHJcbiAgICAgICAgICBgLFxyXG4gIH0sIHtcclxuICAgIHRpdGxlOiAnMTJ0aCcsXHJcbiAgICBzdWJUaXRsZTogJ0NCU0UnLFxyXG4gICAgZGF0ZTogJzIwMTInLFxyXG4gICAgZGVzYzogYFxyXG4gICAgICAgICAgICBCSlMgUHVibGljIFNjaG9vbCwgTWVlcnV0XHJcbiAgICAgICAgICAgIDxicj48YnI+XHJcbiAgICAgICAgICAgIFBlcmNlbnRhZ2UgU2NvcmVkOiA4MC40JVxyXG4gICAgICAgICAgYCxcclxuICB9LCB7XHJcbiAgICB0aXRsZTogJzEwdGgnLFxyXG4gICAgc3ViVGl0bGU6ICdDQlNFJyxcclxuICAgIGRhdGU6ICcyMDEwJyxcclxuICAgIGRlc2M6IGBcclxuICAgICAgICAgICAgQkpTIFB1YmxpYyBTY2hvb2wsIE1lZXJ1dFxyXG4gICAgICAgICAgICA8YnI+PGJyPlxyXG4gICAgICAgICAgICBDR1BBOiA4LjBcclxuICAgICAgICAgIGAsXHJcbiAgfSxcclxuXTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUpBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants/education.js\n");

/***/ }),

/***/ "./sections/EducationSection.jsx":
/*!***************************************!*\
  !*** ./sections/EducationSection.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactLoadable = __webpack_require__(/*! react-loadable */ \"../node_modules/react-loadable/lib/index.js\");\n\nvar _reactLoadable2 = _interopRequireDefault(_reactLoadable);\n\nvar _education = __webpack_require__(/*! ../constants/education */ \"./constants/education.js\");\n\nvar _education2 = _interopRequireDefault(_education);\n\nvar _Loading = __webpack_require__(/*! ../Loading */ \"./Loading.jsx\");\n\nvar _Loading2 = _interopRequireDefault(_Loading);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Timeline = (0, _reactLoadable2.default)({\n  loader: function loader() {\n    return __webpack_require__.e(/*! import() | Timeline */ \"Timeline\").then(__webpack_require__.t.bind(null, /*! ../components/Timeline */ \"./components/Timeline.jsx\", 7));\n  },\n  loading: _Loading2.default\n});\n\nvar EducationSection = function EducationSection() {\n  return _react2.default.createElement(\n    'section',\n    { id: 'education', className: 'light--content', 'aria-label': 'Education qualification section' },\n    _react2.default.createElement(\n      'h3',\n      { className: 'content--title' },\n      'Education'\n    ),\n    _react2.default.createElement(Timeline, { data: _education2.default }),\n    _react2.default.createElement('br', null),\n    _react2.default.createElement('br', null)\n  );\n};\n\nexports.default = EducationSection;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9FZHVjYXRpb25TZWN0aW9uLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2VjdGlvbnMvRWR1Y2F0aW9uU2VjdGlvbi5qc3g/ODVjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTG9hZGFibGUgZnJvbSAncmVhY3QtbG9hZGFibGUnO1xyXG5pbXBvcnQgZWR1Y2F0aW9uTGlzdCBmcm9tICcuLi9jb25zdGFudHMvZWR1Y2F0aW9uJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vTG9hZGluZyc7XHJcblxyXG5cclxuY29uc3QgVGltZWxpbmUgPSBMb2FkYWJsZSh7XHJcbiAgbG9hZGVyOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJUaW1lbGluZVwiICovICcuLi9jb21wb25lbnRzL1RpbWVsaW5lJyksXHJcbiAgbG9hZGluZzogTG9hZGluZyxcclxufSk7XHJcblxyXG5jb25zdCBFZHVjYXRpb25TZWN0aW9uID0gKCkgPT4gKFxyXG4gIDxzZWN0aW9uIGlkPVwiZWR1Y2F0aW9uXCIgY2xhc3NOYW1lPVwibGlnaHQtLWNvbnRlbnRcIiBhcmlhLWxhYmVsPVwiRWR1Y2F0aW9uIHF1YWxpZmljYXRpb24gc2VjdGlvblwiPlxyXG4gICAgPGgzIGNsYXNzTmFtZT1cImNvbnRlbnQtLXRpdGxlXCI+XHJcblxyXG4gICAgICBFZHVjYXRpb25cclxuICAgIDwvaDM+XHJcbiAgICA8VGltZWxpbmUgZGF0YT17ZWR1Y2F0aW9uTGlzdH0gLz5cclxuICAgIDxiciAvPlxyXG4gICAgPGJyIC8+XHJcbiAgPC9zZWN0aW9uPlxyXG4pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkdWNhdGlvblNlY3Rpb247XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQVBBO0FBREE7QUFDQTtBQVlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/EducationSection.jsx\n");

/***/ })

}]);