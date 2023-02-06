import { describe, expect, test } from '@jest/globals';
import { countWordUsageInText } from './wordusage';

describe('word usage tests', () => {
    test('Counts usage in sample text 1', () => {
        var words = countWordUsageInText('Hello hello world');
        expect(words.length).toBe(2);
        expect(words[0][0]).toBe('hello');
        expect(words[0][1]).toBe(2);
        expect(words[1][0]).toBe('world');
        expect(words[1][1]).toBe(1);
    });

    test('Counts usage in longer sample text', () => {
        var text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.Non sodales neque
sodales ut.Gravida arcu ac tortor dignissim convallis aenean et tortor.
Ultricies mi eget mauris pharetra et ultrices neque.Vel eros donec ac odio
tempor orci.

        Tellus in metus vulputate eu scelerisque felis.Volutpat diam ut venenatis
        tellus in metus vulputate eu.Tempor id eu nisl nunc mi ipsum faucibus
        vitae.Sit amet luctus venenatis lectus magna fringilla urna.Habitant
morbi tristique senectus et netus et.Eget felis eget nunc lobortis.Neque
vitae tempus quam pellentesque nec.

Pellentesque nec nam aliquam sem et tortor consequat id porta.Eget dolor
morbi non arcu risus quis.Lacinia quis vel eros donec.Velit laoreet id
donec ultrices tincidunt arcu non sodales.Feugiat in fermentum posuere
urna nec tincidunt.Tortor at risus viverra adipiscing at.In mollis nunc
sed id semper.Semper eget duis at tellus at urna condimentum mattis
        pellentesque.Egestas purus viverra accumsan in nisl nisi scelerisque eu.A
cras semper auctor neque vitae tempus quam pellentesque.`;

        var words = countWordUsageInText(text);
        expect(words.length).toBe(97);
        expect(words[0][0]).toBe('et');
        expect(words[0][1]).toBe(6);
        expect(words[1][0]).toBe('eget');
        expect(words[1][1]).toBe(5);
        expect(words[2][0]).toBe('in');
        expect(words[2][1]).toBe(5);
    });
});