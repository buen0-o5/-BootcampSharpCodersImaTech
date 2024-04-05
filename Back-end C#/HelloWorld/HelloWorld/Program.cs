// file-scoped namespace
namespace HelloWorld;

public class Program
{

    // funcao principal - ponto de entrada - entrypoint
    public static void Main()
    {
        // Declaraçao de variaveis
        // casting - elenquei
        int a = 2;
        long l = 43;
        long x = 43l;

        float f = 2.3f;
        double d = 2;

        long inteiroLongo = 3L;
        int longo = (int)inteiroLongo;

        string name = "Hugo Rafael";

        //Entrada e saida
        Console.WriteLine(double.MaxValue);
        Console.WriteLine(double.MinValue);

        
        Console.Write("Digite seu nome: ");
        var leitura = Console.ReadLine();
        Console.WriteLine(leitura);

        //Somando inteiros
        Console.Write("Digite o primeiro numero a ser lido: ");
        var primeiroNumero = int.Parse(Console.ReadLine());
        Console.Write("Digite o segundo numero a ser lido: ");
        var segundoNumero = int.Parse(Console.ReadLine());
        var soma = primeiroNumero + segundoNumero;
        Console.WriteLine(soma);


        //Concatenado inteiro com  variavel 
        Console.Write("Digite alguma coisa para ser lida: ");
        var Concatenando = Console.ReadLine();
        Console.WriteLine(Concatenando + soma);

    }

}