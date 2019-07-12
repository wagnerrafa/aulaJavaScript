// console.log('Hello world');

// let nomeDoUsuario = 'Wagner';
// let idade=25;
// let vivo=true;
// console.log(nomeDoUsuario, idade, vivo);
// prompt('qual é seu nome?');
// let nomeDoUsuario;
// let programador;
// nomeDoUsuario = prompt('qual é seu nome?');
// alert('Ola ' + nomeDoUsuario);
// programador=confirm('voce já programa?');

// if(programador==true){
//     alert('parabens');
//     programador=confirm('já programa em c++?');}
//     if(programador==true){
//         alert('PARABENS');
    
// }
//         else{
//     alert('que pena');
// }
// let nomeDoAluno;
// let materia;
// let nota;

// nomeDoAluno=prompt('Qual é seu nome?');
// materia=prompt('Qual a materia?');
// nota=prompt("qual foi a nota?");

//  if(nota>10 || nota<0){
//     alert('Nota invalida')
// }
// else if(nota>=5){
//     alert('Parabens, o aluno '+ nomeDoAluno +' foi aprovado na materia '+ materia)}
//     else if(nota>=4.5){
//         alert('Parabens, o aluno '+ nomeDoAluno +' foi aprovado na materia '+ materia+ ' pelo sistema');
//     }
//     else{
//         alert('Parece que a nota do aluno '+nomeDoAluno +" na materia "+materia+" foi insuficiente");
//     }

//     vetor =[nome=prompt('Nome'),
//     idade=prompt('idade'),
//     materia=prompt('materia')
// ];

// alert(nome + idade + materia);

// let wagner = {
//     nome: 'wagner',
//     sobrenome: 'oliveira',
//     idade: 25,
//     cursos: {
//         ingles: 'basico',
//         espanhol:'intermediario',
//         informatica: 'avançado',}
// };
// b=1;
// a=1;
// for(i=0;i<10;i++){
//     alert(i);
//     a=b+1;
//     b++;
// }
// alert(a);
// resposta='sim';
// media=0;
// while(resposta=='sim'){
//     nota=prompt('nota');
//     media=nota+media;
//     resposta=prompt('Continuar');

// }
// alert(media/2);



// let escada=Number(prompt('Quantos lances de escada?'));
// let material=prompt('Qual o material?');
// let i=material;

// for(ij=0;ij<escada;ij++){
// console.log(material=material+i);
// }


// Aula02


// let nome = 'rafa';
// let numeros =(
//     [1,2,3,4,5],
//     [6,7,8,9]
// );

// console.log(numeros[1][2]);

// let pessoa = {
//     nome : 'rafael',
//     idade: 25,
//     cpf: '123.456.78-90'
// };

// let nome1 =prompt('Seu nome');
// let idade = prompt('Sua idade');

// let nome;
// let pessoa = [];
// let i;
// for(i=0;i<3;i++)
// {

// pessoa[i] = nome()}


// let frase = idade >= 30 ? 'seu velho' : 'novinho';


// for(i=2;i<=100;i++)
// {
//     console.log(i)
//     i++;
// }

// for(i=2;i<=100;i++)
// {
//      if(i%2==0)
//     { console.log(i)};
// }

// let nomes=[
//     'rafael', 'ana', 'leo', 'gabriel'];

// for(i=0;i<=3;i++)
// {
//     console.log(nomes[i]);
// }

// for(let nome of nomes)
// {
//     console.log(nome);
// }

// for(let indice in nomes)
// {
//     console.log(indice);    
// }


// Funções


// function dizerOi()
// {
//     alert('oi');
//     alert("seja bem vindo");
// }
// let dizerOi=function ()
// {
//     alert('oi');
//     alert("seja bem vindo");
// }
// dizerOi();

// let dizerOi = () => {
//     alert('oi');
//     alert("seja bem vindo");
// }
// dizerOi();

// function teste()
// {
//     let numero=0;
    
// }
// console.log(numero);

// let numero1=10;
// let numero2=20;

// function escolherMaior(numero1, numero2)
// {
//     return maior = numero1>numero2 ? numero1 : numero2;
// }


let nomes=[
    'rafael', 'ana', 'leo', 'gabriel'];
let palavra=prompt('nome');

function buscarPalavra()
{
    for(i=0;i<3;i++)
    {
        if(nomes[i]==palavra){
       return true;
    } 
} return false;
}
// if(return==true){
//     alert('sim');
// }
// else alert('nao');   