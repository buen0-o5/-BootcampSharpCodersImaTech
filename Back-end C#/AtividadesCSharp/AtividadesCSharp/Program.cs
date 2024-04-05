using ArrayDinamico.Metodo;
namespace ArrayDinamico {

    public class Program
    {
        public static void Main() {


            int[] array = new int[3];

            array[0] = 5;
            array[1] = 7;
            array[2] = 9;

            Console.WriteLine("antes: ");
            InteracaoComArray.ExibeArray(array);

            array = InteracaoComArray.PushAndReturn(array, 12);
            array = InteracaoComArray.PushAndReturn(array, 13);
            array = InteracaoComArray.PushAndReturn(array, 14);
            array = InteracaoComArray.PushAndReturn(array, 15);

            Console.WriteLine("depois: ");
            InteracaoComArray.ExibeArray(array);

        }
    }
}

  