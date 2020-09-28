function novoElemento(tagName, className) {
    const elem = document.createElement(tagName);
    elem.className = className;

    return elem;
}

function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira');
    
    const borda = novoElemento('div','borda');
    const corpo = novoElemento('div','corpo');

    this.elemento.appendChild(reversa ? corpo : borda);
    this.elemento.appendChild(reversa ? borda : corpo);

    //definir altura da barreira.
    this.setAltura = altura => corpo.style.height = `${altura}px`;
}

// const b = new Barreira(true);
// b.setAltura(600);
// document.querySelector('[wm-flappy]').appendChild(b.elemento);

function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras');
    
    this.superior = new Barreira(true);
    this.inferior = new Barreira(false);

    this.elemento.appendChild(this.superior.elemento);
    this.elemento.appendChild(this.inferior.elemento);

    this.sortearAbertura = () => {
         const alturaSuperior = Math.random() * (altura - abertura);
         const alturaInferior = altura - abertura - alturaSuperior;

         this.superior.setAltura(alturaSuperior);
         this.inferior.setAltura(alturaInferior);
    }

    this.setX = x => this.elemento.style.left = `${x}px`;
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0]);

    this.getLargura = () => this.elemento.clientWidth;

    this.sortearAbertura();
    this.setX(x);
}

// const b = new ParDeBarreiras(700, 200, 400);
// document.querySelector('[wm-flappy]').appendChild(b.elemento);

function CriarBarreiras(altura, largura, abertura, espaco, notificarPonto) {
    const deslocamento = 3;

    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ];

    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento);

            // Quando o elemento sair da área do jogo
            // retornar para o final
            if(par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length);

                // -> Mudar o posicionamento da abertura
                par.sortearAbertura();
            }

            const meio = largura / 2;
            const cruzouMeio = par.getX() + deslocamento >= meio && par.getX() < meio

            // if(cruzouMeio) notificarPonto();
            cruzouMeio && notificarPonto();
        });
    }
}

function Passaro(alturaJogo) {
    let voando = false;

    this.elemento = novoElemento('img', 'passaro');
    this.elemento.src = 'imgs/passaro.png';
    this.elemento.style.borderRadius = '50%';

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0]);
    this.setY = y => this.elemento.style.bottom = `${y}px`;

    window.onkeyup = e => voando = false;
    window.onkeydown = e => voando = true;

    this.animar = () => {
        const novoY = this.getY() + (voando ? 9 : -6);
        const alturaMax = alturaJogo - this.elemento.clientHeight;

        if(novoY <= 0) {
            this.setY(0);

        }
        else if(novoY >= alturaMax) {
            this.setY(alturaMax);
        }
        else {
            this.setY(novoY);
        }
    }

    this.setY(alturaJogo / 2);
}


// const b = new CriarBarreiras(700, 1200, 300, 400);
// const passaro = new Passaro(700);

// const areaDoJogo = document.querySelector('[wm-flappy]');
// areaDoJogo.appendChild(passaro.elemento);
// b.pares.forEach(par => areaDoJogo.appendChild(par.elemento));

// setInterval(() => {
//     b.animar();
//     passaro.animar();
// }, 20);

function Progresso() {
    this.elemento = novoElemento('span', 'progresso');

    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos;
    }

    this.atualizarPontos(0);
}

function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect();
    const b = elementoB.getBoundingClientRect();

    const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top;
    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left;

    return vertical && horizontal;
}

function colidiu(passaro, barreiras) {
    let colidiu = false;

    barreiras.pares.forEach(parDeBarreiras => {
        if(!colidiu) {
            const superior = parDeBarreiras.superior.elemento;
            const inferior = parDeBarreiras.inferior.elemento;
            const piso = passaro.getY();

            colidiu = estaoSobrepostos(passaro.elemento, superior) || estaoSobrepostos(passaro.elemento, inferior) || (piso === 0);
        }
    });

    return colidiu;
}

function FlappyBird() {
    this.pontos = 0;

    const areaDoJogo = document.querySelector('[wm-flappy]');

    const altura = areaDoJogo.clientHeight;
    const largura = areaDoJogo.clientWidth;

    const progresso = new Progresso();
    const barreiras = new CriarBarreiras(altura, largura, 250, 400, 
        () => progresso.atualizarPontos(++this.pontos));

    const passaro = new Passaro(altura);

    areaDoJogo.appendChild(progresso.elemento);
    areaDoJogo.appendChild(passaro.elemento);
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento));

    this.start = () => {
        // -> loop do jogo

        const temporizador = setInterval(() => {
            barreiras.animar();
            passaro.animar();

            if(colidiu(passaro, barreiras)) {
                clearInterval(temporizador);
                showPainelResultado(this.pontos);
            }
        }, 20);
    }
}

function showPainelResultado(pontos) {
    const pontuacaoFinal = document.querySelector('[wm-pontuacao]');
    const btnReiniciar = document.querySelector('[wm-reiniciar]');
    const painelResultado = document.querySelector('.painel-resultado');

    btnReiniciar.onclick = () => {
        const areaDoJogo = document.querySelector('[wm-flappy]');
        areaDoJogo.innerHTML = '';

        painelResultado.style.visibility = 'hidden';
        new FlappyBird().start();
    }

    pontuacaoFinal.innerHTML = `Pontuação: ${pontos}pts`;
    painelResultado.style.visibility =  'visible';
}

const painelResultado = document.querySelector('.painel-resultado');
painelResultado.style.visibility = 'hidden';

new FlappyBird().start();
