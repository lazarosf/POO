class Pessoa{
    nome:string;
    idade:number;
    
    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }
    toString():string {
      return 'Pessoa ${this.nome} ${this.idade}';
    }
}

let aqui:boolean = false;
class moto{
    pessoa:Pessoa;
    potencia:number; //buzina
    tempo:number; //tempo gasto
    compra:number; //tempo comprado

    constructor(pessoa:Pessoa,potencia:number,tempo:number,compra:number){
        this.pessoa = pessoa;
        this.potencia = potencia;
        this.tempo = tempo;
        this.compra = compra;

    }
    bibi(){
        let pe:string=" ";
        for(var i = 0; i<this.potencia;i++){
            pe +="e";
        }
        return this.potencia;
        console.log(this.potencia);
        
    }
    In(){
        if (aqui==false){
            let crianca=new Pessoa("Pedim",1)
            aqui = true;
        }
        else{
            console.log("A motoca está ocupada no momento");
        }
        
    }
    out(){
        if (aqui==false){
            console.log( "Não há criança na motoca");
        }
        else{
            aqui = false;
        }

    }
    show(){

    }
}

let crianca=new Pessoa("Maria",1);
let anda= new moto(crianca,2,2,3);