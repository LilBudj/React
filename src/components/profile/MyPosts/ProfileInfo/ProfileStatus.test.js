import React from 'react'
import {create} from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";

describe('status should be displayed', ()=> {
    test('', ()=>{
        const component = create(<ProfileStatus status={'Welcome'}/>);
        const root = component.root();
        expect(root.state.status).toBe('Welcome')
    });
    test(`correct <span> status`, ()=>{
        const component = create(<ProfileStatus status={'Welcome'}/>);
        const root = component.root();
        let span = root.findByType('span');
        expect(span.length).toBe(1)
    })
});