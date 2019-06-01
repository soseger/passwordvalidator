const password = require('./index');

describe('password', () => {  
    
    describe('Validates password length', () => {
        it('is at least eight characters long', () => {
            const longEnoughPassword = 'abc123AB';
            const tooShortPassword = '123Abcd';
            expect(password(longEnoughPassword)).toEqual(true);
            expect(password(tooShortPassword)).toEqual(false);
        })
    });

    describe('Validates password includes numeral', () => {
        it('includes a numeral', () => {
            const passwordWithNumeral = 'abc123AB';
            const passwordWithoutNumeral = 'abcdefgh';
            expect(password(passwordWithNumeral)).toEqual(true);
            expect(password(passwordWithoutNumeral)).toEqual(false);
            
        })
    });

    describe('Validates password includes capital letter', () => {
        it('includes a capital letter', () => {
            const passwordWithCapital = 'abc123AB';
            const passwordWithoutCapital = 'abcdefg1';
            expect(password(passwordWithCapital)).toEqual(true);
            expect(password(passwordWithoutCapital)).toEqual(false);
        })
    });

    describe('Validates password includes small letter', () => {
        it('includes a small letter', () => {
            const passwordWithSmall = 'abc123AB';
            const passwordWithoutSmall = '1BCDEFGH';
            expect(password(passwordWithSmall)).toEqual(true);
            expect(password(passwordWithoutSmall)).toEqual(false);
        })
    });

    describe('special characters', () => {
        it('accepts nordic characters', () => {
            const validPassword = 'Öåäö1234';
            expect(password(validPassword)).toEqual(true);
        });
    });

    describe('When password is not given', () => {
        it('does not crash', () => {
            expect(() => {
                password()
            }).not.toThrow();
        })
    })

})