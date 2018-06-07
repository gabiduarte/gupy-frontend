import React from 'react';
import convertTimeStampToDate from '../../src/js/helpers/convertTimestampToDate';

describe('Convert Timestamp to Date helper', () => {
    it('should convert timestamp to formatted date as DD/MM/YYYY', () => {
        const timestamp = '2014-12-25T06:28:08 +02:00';

        expect(convertTimeStampToDate(timestamp)).toEqual('25/12/2014');
    });

    it('should not explode when no argument is passed', () => {
        expect(convertTimeStampToDate()).toEqual('');
    });

    it('should return an empty string if the argument passed is not a timestamp', () => {
        expect(convertTimeStampToDate('')).toEqual('');
        expect(convertTimeStampToDate('test string')).toEqual('');
        expect(convertTimeStampToDate(true)).toEqual('');
        expect(convertTimeStampToDate({})).toEqual('');
    });
});