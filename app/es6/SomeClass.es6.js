/**
 * Created by jens.heidl on 31.08.2016.
 */
'use strict';
//Private Vatiables
//const _name = Symbol('name');

const _name = Symbol('name');



/**
 * Class representing SomeClass
 * @author Jens Heidl
 * @extends SomeClass
 */
export class SomeClass {
    /**
     * Create a Class.
     * @param {Object} options  - Some options like name
     * @param {String} options.name  - Some options like name
     */
    constructor(options) {
        console.log('some new class', options);


        //this.myName = options.name;
        this[_name] = options.name;
    }

    set name(name) {
        //this.myName = name;
        this[_name] = name;
    }

    get name() {
        //return this.myName;
        return this[_name];
    }

}



