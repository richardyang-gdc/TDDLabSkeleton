import { equal } from "assert";
import StringCalculator from "../src/stringCalculator";

describe('stringCalcutlator usage suite', () => {
    it('should return 0 when paramter string is empty', () => {
        equal(StringCalculator.add(''), 0);
    });   

});
