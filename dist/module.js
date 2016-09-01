(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by jens.heidl on 31.08.2016.
 */
'use strict';
//Private Vatiables
//const _name = Symbol('name');

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _name = Symbol('name');

/**
 * Class representing SomeClass.
 */

var SomeClass = exports.SomeClass = function () {
    /**
     * Create a Class.
     * @param {options.name} options  - Some options like name
     */
    function SomeClass(options) {
        _classCallCheck(this, SomeClass);

        console.log('some new class', options);

        //this.myName = options.name;
        this[_name] = options.name;
    }

    _createClass(SomeClass, [{
        key: 'name',
        set: function set(name) {
            //this.myName = name;
            this[_name] = name;
        },
        get: function get() {
            //return this.myName;
            return this[_name];
        }
    }]);

    return SomeClass;
}();

},{}],2:[function(require,module,exports){
/**
 * Created by jens.heidl on 31.08.2016.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SomeClassChild = undefined;

var _SomeClass2 = require('./SomeClass.es6');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing SomeClassChild.
 * @author Jens Heidl
 * @name asdasdas
 * @extends SomeClass
 */
var SomeClassChild = exports.SomeClassChild = function (_SomeClass) {
  _inherits(SomeClassChild, _SomeClass);

  /**
   * Create a SomeClassChild.
   * @param {options.name} options  - Some options like name
   */
  function SomeClassChild(options) {
    _classCallCheck(this, SomeClassChild);

    console.log('I amm a Child', options);
    return _possibleConstructorReturn(this, (SomeClassChild.__proto__ || Object.getPrototypeOf(SomeClassChild)).call(this, options));
  }

  return SomeClassChild;
}(_SomeClass2.SomeClass);

},{"./SomeClass.es6":1}],3:[function(require,module,exports){
/**
 * Created by jens.heidl on 01.09.2016.
 */
'use strict';

/** Class representing a -----. */

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Documented =
/**
 * Create a point.
 * @name sdfsdf
 * @param {options} options - some Options Object.
 */

exports.Documented = function Documented(options) {
    _classCallCheck(this, Documented);

    console.log('Documented');
};

},{}],4:[function(require,module,exports){
/**
 * Created by jens.heidl on 31.08.2016.
 */
'use strict';
//import "babel-polyfill";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _SomeClass = require('./SomeClass.es6');

var _SomeClassChild = require('./SomeClassChild.js');

var _SomeDocTest = require('./SomeDocTest.js');

/*** blaaa ***/

//From Lib
//var $ = require('./../libs/jquery.min');

//From bower
//import $ from './../bower_components/jquery/dist/jquery';


var testSymbol = Symbol('test');
var test = new _SomeClass.SomeClass({ name: 'hans' });
console.log(test.name);

console.log('------asd------------', testSymbol);

var child = new _SomeClassChild.SomeClassChild({ name: 'little Jow' });
console.log('child', child.name);

//check Symbol plugin
console.log('typeof Symbol', typeof testSymbol === 'undefined' ? 'undefined' : _typeof(testSymbol));

//$(function () {
//    console.log('onDocument Ready');
//
//    debugger;


//var test = new SomeClass({name: 'hans'});

//console.log(test.name);
//
//console.log('------------------');
//
//var child = new SomeClassChild({name: 'little Jow'});
//console.log(child.name)


//});

},{"./SomeClass.es6":1,"./SomeClassChild.js":2,"./SomeDocTest.js":3}]},{},[4]);
