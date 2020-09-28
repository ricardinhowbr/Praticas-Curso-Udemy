const classificaTriangulo = (a, b, c) => {
    if(a == b && b == c) {
        return "Equilátero";
    }
    else if ((a != b && b != c && c != a)) {
        return "Escaleno";
    }
    else {
        return "Isóceles";
    }
}

const triangulo1 = classificaTriangulo(1,2,4);
const triangulo2 = classificaTriangulo(1,1,1);
const triangulo3 = classificaTriangulo(1,2,1);

console.log(triangulo1, triangulo2, triangulo3);