class criança {
    nome : string;
    idade : number;

    constructor(nome:string, idade:number) {
        this.nome = nome;
        this.idade = idade;
    }

    public toString() {
        return  this.nome;
    }
}

class pulapula {
    fila: Array < criança | null >;
    cheio: Array < criança | null >;

    constructor() {
        this.fila = []
        this.cheio = [null]
    }

    fila1(x: criança) {
        this.fila.push(x)
    }

    entre() {
        if(this.cheio[0] == null) {
            this.cheio[0] = this.fila[0]
            console.log(this.cheio[0] + " está no pula pula!");
            this.fila.shift();
        }
        else if(this.cheio[0] != null) {
            console.log("Já tem alguém no pula pula lindo, espere sua vez!");
        }
    }

    saia() {
        if(this.cheio[0] != null) {
            console.log("Agora é a vez da outra criança, " + this.fila[0]);
            this.fila.push(this.cheio[0]);
            this.cheio[0] = null;
        }
        else if(this.cheio[0] == null) {
            console.log("Não há crianças aqui, lindo")
        }
    }
}


let pula = new pulapula();
pula.fila1(new criança("Conrnélia",12));
pula.fila1(new criança("Oswalda",10));
pula.fila1(new criança("Dino",5));
pula.fila1(new criança("Neville",9));

pula.entre();
pula.entre();
pula.saia();
pula.saia();

