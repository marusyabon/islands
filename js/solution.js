(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
   function solution(map) {
        // todo: подсчитать кол-во островов на карте
        var map = cloneMatrix(map),
            rows = map.length, 
            cols = map[0].length;
            number = 0;

        for (var row = 0; row < rows; row++) {
            for (var col = 0; col < cols; col++) {
                if(isIsland(row, col)) {
                    number++;
                }
            }
        }
        return number;

        function isIsland(row, col) {

            //если текущая позиция остров
            if (map[row][col]) {
                map[row][col] = 0;

                //проверяем соседние позиции
                if (col != 0) {
                    isIsland(row, col-1);
                }
                if (col < map[0].length - 1) {
                    isIsland(row, col+1);
                }
                if (row != 0) {
                    isIsland(row-1, col);
                }
                if (row < map.length - 1) {
                    isIsland(row+1, col);
                }
                return true;
            }
            else

            return false;
        }

        //вспомогательные функции
        function cloneMatrix(matrix) {
            var clone = [];

            for (var x = 0; x < matrix.length; x++) {
                clone[x] = matrix[x].slice();
            }
            
            return clone;
        }
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
