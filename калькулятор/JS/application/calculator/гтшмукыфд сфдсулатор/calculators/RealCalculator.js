class RealCalculator {
    add(a, b) {
        return a + b;
    }

    sub(a, b) {
        return a - b;
    }

    mult(a, b) {
        return a * b;
    }

    div(a, b) {
        if (b != 0) {
            return a / b;
        }
    }

    pow(a, b) {
        return Math.pow(a, b);
    }

    zero() {
        return 0;
    }

    one() {
        return 1;
    }

    prod(a, b) {
        return a * b;
    }
}