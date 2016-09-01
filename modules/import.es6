/**
 * Created by jens.heidl on 31.08.2016.
 */
'use strict';
//Private Vatiables
//const _name = Symbol('name');

const _name = Symbol('name');

export class SomeClass {
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



