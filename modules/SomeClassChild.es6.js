/**
 * Created by jens.heidl on 31.08.2016.
 */
'use strict';
import {SomeClass} from './SomeClass.es6.js'


/**
 * Class representing SomeClassChild.
 * @author Jens Heidl
 * @extends SomeClass
 */
export class SomeClassChild extends SomeClass {
    /**
     * Create a SomeClassChild.
     * @param {options.name} options  - Some options like name
     */
    constructor(options) {
        console.log('I amm a Child', options);
        super(options);
    }
}
