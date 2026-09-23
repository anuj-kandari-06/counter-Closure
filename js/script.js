 // Closure Counter
        function createCounter() {
            let count = 0;
            return {
                increase() {
                    count++;
                    return count;
                },
                decrease() {
                    count--;
                    return count;
                },
                reset() {
                    count = 0;
                    return count;
                },
                getCount() {
                    return count;
                }
            };
        }

        const counter = createCounter();

        const countDisplay = document.getElementById("count");
        const increaseButton = document.getElementById("increase");
        const decreaseButton = document.getElementById("decrease");
        const resetButton = document.getElementById("reset");

        increaseButton.onclick = function () {
            countDisplay.textContent = counter.increase();

        };

        decreaseButton.onclick = function () {

            countDisplay.textContent = counter.decrease();

        };

        resetButton.onclick = function () {

            countDisplay.textContent = counter.reset();

        };
