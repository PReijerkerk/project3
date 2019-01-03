// the tutorials being followed also suggested using jest with Enzyme

import React from 'react';
import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';
import sinon from 'sinon'; //this is not installed yet

//set the default serializer for Jest to be the from enzyme-to-json
//this produces an easier to read (for humans) serialized format. 
expect.addSnapshotSerializer(createSerializer({mode:'deep'}));

//react 16 enzyme adapter
Enzyme.configure({adapter:new Adapter()});

//make Enzyme functions available in all the test files without importing
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;