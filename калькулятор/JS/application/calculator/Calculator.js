class Calculator extends Component {
    constructor(options){
        super(options);
        this.sign = null;
        this.a = null;
        var nums = document.getElementsByClassName('nums');
        for(let i = 0; i < nums.length; i++){
            nums[i].addEventListener('click', this.printNumber);
        }
        var opers = document.getElementsByClassName('oper');
        for(let i = 0; i < opers.length; i++){
            opers[i].addEventListener('click', () => this.doMath(opers[i])); 
        }
    }

    printNumber(){
        var inp = document.getElementById('input');
        inp.value += this.innerHTML;
    }

    doMath(elem){
        var inp = document.getElementById('input');
        if(this.sign){
            if(this.sign == '+'){
                inp.value = (this.a-0) + (inp.value-0);
                this.sign = null;
            } else if(this.sign == '-'){
                inp.value = (this.a-0) - (inp.value-0);
                this.sign = null;
            } else if(this.sign == '*'){
                inp.value = (this.a-0) * (inp.value-0);
                this.sign = null;
            } else if(this.sign == '/'){
                inp.value = (this.a-0) / (inp.value-0);
                this.sign = null;
            } else if(this.sign == 'C'){
                inp.value = '';
                this.a = null;
            } else {
                
            }
        } else {
            console.log(elem);
            this.sign = elem.innerHTML;
            this.a = inp.value;
            inp.value = '';
        }
        
    }
}