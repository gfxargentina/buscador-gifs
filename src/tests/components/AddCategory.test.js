import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas <AddCategory />>', () => {
    const setCategories = () => {};

    test('debe de mostrarse correctamente', () => {
        const wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
        expect( wrapper ).toMatchSnapshot();
    })
    
    
})



