class cliente {
    nome: string;
    id: number;
    telefone: number;
    numero: number;

    constructor(nome:string, id:number, telefone: number, numero: number) {
        this.nome = nome;
        this.id = id;
        this.telefone = telefone;
        this.numero = numero;
    }

    public toString() {
        return  this.nome + " : " + this.id;
    }
}

class cinema {
    assento: Array < cliente | null >

    constructor() {
        this.assento = [];
    }

    sala(x: number) {
        for(var i = 0; i < x; i++) {
            this.assento.push(null);
        }
    }

    reservar(x: cliente) {
        if(this.assento[x.numero] == null) {
            this.assento[x.numero] = x;
        }
        else if(this.assento[x.numero] != null) {
            console.log("Já há alguém na cadeira!");
        }
    }

    cancelar(x: number) {
        for(let id of this.assento) {
            if(id == null) {
                break;
            }
            else if(x == id.id) {
                console.log(id.nome + " foi cancelado(a)");
                this.assento[id.numero] = null;
            }
        }
    }

    public toString() {
        let str = "cadeiras: | ";
        for(let i = 0; i < this.assento.length; i++) {
            let pessoa = this.assento[i];
            str += i + ": "
            if(pessoa == null) {
                str += "----";
            }
            else {
                str += pessoa.toString();
            }
            str += " |";
        }
        return str;
    }
}

let cine = new cinema();
cine.sala(3);
console.log("" + cine);
cine.reservar(new cliente("Anitta", 123, 88988390668, 1));
console.log("" + cine);
cine.cancelar(123);
console.log("" + cine);