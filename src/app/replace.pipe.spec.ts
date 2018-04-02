import { ReplacePipe } from './replace.pipe';

describe('Pipe: Replace', () => {

    let pipe: ReplacePipe;

    beforeEach(() => {
        pipe = new ReplacePipe();
    });

    it('should replace the _ with space', () => {
        let initialString = 'test_string';
        let finalString = 'test string';
        expect(pipe.transform(initialString)).toEqual(finalString);
    })

})