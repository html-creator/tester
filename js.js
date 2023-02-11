function test(min) {

    if (age > (min - 1)) {

        console.clear()

        alert("siema")

    } else {

        console.clear()

        alert("nie chce cie widziec")

    }

}
function getAge() {
	age = document.getElementById("age").value;
	mikro = Math.floor((Math.random() * 20) + 5);
	test(mikro)
}
function red() {
    document.body.style.backgroundColor = "red";
    setTimeout(blue, 1000)
}
function blue() {
    document.body.style.backgroundColor = "#009";
    setTimeout(red, 1000)
}
blue()