function test(min) {

    if (age > (min - 1)) {

        console.clear()

        alert("siema")

    } else {

        console.clear()

        alert("nie lubi� maluch�w")

    }

}
function getAge() {
	age = document.getElementById("age").value;
	mikro = Math.floor((Math.random() * 20) + 5);
	test(mikro)
}