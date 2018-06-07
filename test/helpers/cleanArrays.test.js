import React from 'react';

import {cleanArrayOfEmptyObjects, cleanArrayOfUndefinedValues} from '../../src/js/helpers/cleanArray';

describe('Clean Arrays Helper', () => {
    describe('#cleanArrayOfEmptyObjects', () => {
        it('should return an array with no empty objects', () => {
            const fakeArrayWithEmptyObjects = [{}, {test: true}, {}, {
                "name": "person",
                "email": "person@email"
            }];
            const expectedArray = [{test: true}, {
                "name": "person",
                "email": "person@email"
            }];

            expect(cleanArrayOfEmptyObjects(fakeArrayWithEmptyObjects)).toEqual(expectedArray);
        });

        it('should return an empty array if the argument passed is undefined or there is no argument', () => {
            expect(cleanArrayOfEmptyObjects(undefined)).toEqual([]);
            expect(cleanArrayOfEmptyObjects()).toEqual([]);
        });
    });

    describe('#cleanArrayOfUndefinedValues', () => {
        it('should return an array with no undefined values', () => {
            const fakeArrayWithUndefinedValues = [1, "string", undefined, , true];
            const expectedArray = [1, "string", true];

            expect(cleanArrayOfUndefinedValues(fakeArrayWithUndefinedValues)).toEqual(expectedArray);
        });

        it('should return an empty array if the argument passed is undefined or there is no argument', () => {
            expect(cleanArrayOfUndefinedValues(undefined)).toEqual([]);
            expect(cleanArrayOfUndefinedValues()).toEqual([]);
        });
    });
});