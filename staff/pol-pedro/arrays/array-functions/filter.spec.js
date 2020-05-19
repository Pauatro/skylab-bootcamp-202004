describe('filter', function () {
    it('should iterate on each element and keep each value that pass the condition in the new array results', function () {
        var array = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
        var result = [];

        result = filter(array, function(element) {
            if (element.length > 6){
                return true;
            }
            return false;
        });

        expect(result[0]).toBe("exuberant");
        expect(result[1]).toBe("destruction");
        expect(result[2]).toBe("present");
    });

    it('should iterate on each element and keep each value that pass the condition in the new array results', function () {
        var array = [1, 3, 5, 90, 2, 10, 13, 47];
        var result = [];

        result = filter(array, function(element) {
            if (element > 10){
                return true;
            }
            return false;
        });

        expect(result[0]).toBe(90);
        expect(result[1]).toBe(13);
        expect(result[2]).toBe(47);
    });

    it('should iterate on each element and keep each value that pass the condition in the new array results', function () {
        var array = ['apple', 'banana', 'grapes', 'mango', 'orange'];
        var result = [];
        result = filter(array, function(element) {
            var condition = ['a', 'p']
            var cont = 1;
            for (var i = 0; i < element.length; i++) {
                if(element[i] === condition[0]) {
                    for (var g = 1; g < condition.length; g++) {
                        if( element[i+g] === condition[g]) {
                            cont++
                            if (cont === condition.length) {
                                return true;
                            }
                        }
                        
                    }
                }
            }
            return false
        });

        expect(result[0]).toBe('apple');
        expect(result[1]).toBe('grapes');
    });

    
});