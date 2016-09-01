/**
 * Created by jens.heidl on 31.08.2016.
 */
'use strict';
import "babel-polyfill";

import {SomeClass} from './SomeClass.es6.js';
import {SomeClassChild} from './SomeClassChild.es6.js';
import {Documented} from './SomeDocTest.es6.js';


//From Lib
//var $ = require('./../libs/jquery.min');

//From bower
//import $ from './../bower_components/jquery/dist/jquery';


var testSymbol = Symbol('test');
var test = new SomeClass({name: 'hans'});
console.log(test.name);

console.log('------asd------------', testSymbol);

var child = new SomeClassChild({name: 'little Jow'});
console.log('child', child.name);

//check Symbol plugin
console.log('typeof Symbol', typeof testSymbol);



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



