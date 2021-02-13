class ComplexCalculator extends RealCalculator {
    add(a,b){
        return new Complex(super.add(a.re,b.re),super.add(a.im,b.im));
    }
    sub(a,b){
        return new Complex(super.sub(a.re,b.re),super.sub(a.im,b.im));
    }

    mult(a,b){
        const re = super.sub(super.mult(a.re,b.re),super.mult(a.im,b.im));
        const im = super.add(super.mult(a.im,b.re),super.mult(a.re,b.im));
        return new Complex(re,im);
    }

    div(a,b){
        const down = super.add(super.pow(b.re,2),super.pow(b.im,2));
        const re = super.div(super.sdd(super.mult(a.re,b.re),super.mult(a.im,b.im)),down);
        const im = super.div(super.sub(super.mult(a.im,b.re),super.mult(a.re,b.im)),down);
        return new Complex(re,im)
    }

    one() {

        return new Complex(super.one());
    }

    prod(a,b){
        const re = super.mult(a.re,b);
        const im = super.mult(a.im,b);
        return new Complex(re,im);
    }

    pow(a,b){
        if(n == 0){
            return this.one();
        }else{
        let c=this.one();
        for(let i=0;i<b;i++)
        c=this.mult(a,c);
        }
        return c;
    }

    zero() {
        return new Complex();
    }
}