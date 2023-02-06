"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const wordusage_1 = require("./wordusage");
(0, globals_1.describe)('word usage tests', () => {
    (0, globals_1.test)('Counts usage in sample text 1', () => {
        var words = (0, wordusage_1.countWordUsageInText)('Hello hello world');
        (0, globals_1.expect)(words[0][0]).toBe('hello');
        (0, globals_1.expect)(words[0][1]).toBe(2);
        (0, globals_1.expect)(words[1][0]).toBe('world');
        (0, globals_1.expect)(words[1][1]).toBe(1);
    });
    (0, globals_1.test)('Counts usage in longer sample text', () => {
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
        var words = (0, wordusage_1.countWordUsageInText)(text);
        (0, globals_1.expect)(words[0][0]).toBe('et');
        (0, globals_1.expect)(words[0][1]).toBe(6);
        (0, globals_1.expect)(words[1][0]).toBe('eget');
        (0, globals_1.expect)(words[1][1]).toBe(5);
        (0, globals_1.expect)(words[2][0]).toBe('in');
        (0, globals_1.expect)(words[2][1]).toBe(5);
    });
});
//# sourceMappingURL=wordusage.test.js.map