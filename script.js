document
    .getElementById("fizzBuzzForm")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        //  parseInt() digunakan untuk mengkonversi
        //  nilai dari tipe data string menjadi tipe
        //  data integer (bilangan bulat).
        var inputNumber = parseInt(
            document.getElementById("inputNumber").value
        );
        var result = document.getElementById("result");

        if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
            result.innerHTML = "FizzBuzz";
        } else if (inputNumber % 3 === 0) {
            result.innerHTML = "Fizz";
        } else if (inputNumber % 5 === 0) {
            result.innerHTML = "Buzz";
        } else {
            result.innerHTML = inputNumber;
        }
    });
