import { render, screen } from '@testing-library/react';
import MainApp from './app';

describe("testing for power", function(){
    let app = new MainApp();

    beforeAll(function(){
        console.log("Before All");
    })
    beforeEach(function(){
        console.log("Before Each");
    })
    
    it('power less than 10', function(){
        expect(app.state.power).toBeLessThan( 10 );
    })

    it('power greater than 1', function(){
        expect(app.state.power).toBeGreaterThan( 1 );
    })

    it('Title is Batman', function(){
        expect(app.state.title).toBe( 'Batman' );
    })

    afterEach(function(){
        console.log("afterEach");
    })

})