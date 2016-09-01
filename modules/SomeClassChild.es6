/**
 * Created by jens.heidl on 31.08.2016.
 */
'use strict';
import {SomeClass} from './import.es6'

export class SomeClassChild extends SomeClass {
    constructor(options) {
        console.log('I amm a Child', options);
        super(options);
    }
}
