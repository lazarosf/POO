const readline = require('readline-sync');
let input = (): any => readline.question();
let write = (x : any) => process.stdout.write("" + x);

class aa {
    private nome: string;
	public energia: number;
    public saciedade: number;
    public limpeza: number;
    private diamante: number;
    private idade: number;
    private isAlive: boolean = true;
   

	constructor(nome: string, energia: number, saciedade: number, limpeza: number){
        this.nome = nome;
		this.energia = energia;
        this.saciedade = saciedade;
        this.limpeza = limpeza;
        this.diamante = 0;
        this.idade= 0;
        this.isAlive = true;
    }
}
class Pet {
    private nome: string;
	private energia: number;
    private saciedade: number;
    private limpeza: number;
    private diamante: number;
    private idade: number;
    private isAlive: boolean = true;
    private max: aa

	constructor(nome: string, energia: number, saciedade: number, limpeza: number){
        this.nome = nome;
		this.energia = energia;
        this.saciedade = saciedade;
        this.limpeza = limpeza;
        this.diamante = 0;
        this.idade= 0;
        this.isAlive = true;
        this.max = new aa(this.nome, this.energia, this.saciedade, this.limpeza);
	}

    public setNome(nome: string) {
        if (nome.length == 0) {
            this.nome = "bichinho";
        } else {
            this.nome = nome;
        }
    }

    public getNome(): string {
        return this.nome;
    }

    public getSaciedade(): number {
        return this.saciedade;
    }

    public setSaciedade(saciedade: number) {
        if (saciedade < 0) {
            this.saciedade = 0;
            this.isAlive = false;
            write("passou fome até morrer\n");
        } else if (saciedade > this.max.saciedade) {
            this.saciedade = this.max.saciedade;
        } else {
            this.saciedade = saciedade;
        }
    }

    public setEnergia(energia: number) {
        if (energia < 0) {
            this.energia = 0;
            this.isAlive = false;
            write("cansou até morrer\n");
        } else if (energia > this.max.energia) {
            this.energia = this.max.energia;
        } else {
            this.energia = this.max.energia;
        }
    }

    public setBanho(x: number) {
        if (x < 0) {
            this.limpeza = 0;
            this.isAlive = false;
            write("Pegou doença e morreu\n");
        } else if (x > this.max.limpeza) {
            this.limpeza = this.max.limpeza;
        } else {
            this.limpeza = x;
        }
    }
    
    public brincar(): void {
        if(!this.isAlive) {
            write("Pet morto não brinca\n");
            return;
        }
        this.setSaciedade(this.saciedade - 1);
        this.setBanho(this.limpeza -3);
        this.setEnergia(this.energia -2);
        this.diamante += 1;
        this.idade += 1;
    }

    public comer(): void {
        if(!this.isAlive) {
            write("Pet morto não come\n");
            return;
        }
        this.setSaciedade(this.saciedade +4);
        this.setBanho(this.limpeza -2);
        this.setEnergia(this.energia -1);
        this.idade += 1;
    }

    public dormir(): void {
        if(!this.isAlive) {
            write("Pet morto não dorme, pois já está morto\n");
            return;
        }
        this.setEnergia(this.energia);
        this.idade += 1;
    }

    public banho(): void {
        if(!this.isAlive) {
            write("Pet morto não toma banho\n");
            return;
        }
        this.setSaciedade(this.saciedade - 1);
        this.setBanho(this.limpeza);
        this.setEnergia(this.energia -3);
        this.idade += 2;
    }

	public toString() {
		if (this.isAlive){
            return this.nome + ":" + this.saciedade + "/" + this.max.saciedade + " " + this.limpeza + " " + this.energia;
        }
        return "RIP";
	}
}

class IO {
    create_pet(): Pet {
        write("Digite o nome do seu pet: ");
        let nome = input();
        write("Digite a energia: ");
        let energia = input();
        write("Digite a saciedade: ");
        let saciedade = input();
        write("Digite a limpeza: ");
        let limpeza = input();

        let pet = new Pet(nome, energia, saciedade, limpeza );
        return pet
    }

    mostrar_help() {
        write("Comandos:\n");
        write("  init <nome> <maxsaciedade>: cria uvm novo pet\n");
        write("  show: mostra o pet\n");
        write("  play: faz o pet brincar\n");
        write("  eat: faz o pet comer\n");
        write("  sleep: faz o pet dormir\n");
        write("  shower: faz o pet tomar banho\n");
        write("  end: sai do programa\n");
    }

    shell() {
        let pet = new Pet("", 0, 0, 0);//this.create_pet();
        this.mostrar_help();
        while (true) {
            write("$ ");
            let line = input();
            let words = line.split(" ");
            if (words[0] == "end") {
                break;
            } else if (words[0] == "help") {
                this.mostrar_help();
            } else if (words[0] == "show") {
                write("" + pet + "\n");
            } else if (words[0] == "eat") {
                pet.comer();
            } else if (words[0] == "play") {
                pet.brincar();
            } else if (words[0] == "init") {
                let nome = words[1];
                let energia = +words[2];
                let sacMax = +words[3];
                let limpeza = +words[4];
                pet = new Pet(nome, energia, sacMax, limpeza);
            } else if (words[0] == "sleep") {
                pet.dormir();
            } else if (words[0] == "shower") {
                pet.banho();
            } else {
                console.log("Comando inválido");
            }
        }
    }
}

let io = new IO();
io.shell();