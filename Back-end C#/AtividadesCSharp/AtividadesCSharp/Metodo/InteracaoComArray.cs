using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArrayDinamico.Metodo
{
    public class InteracaoComArray
    {
        public static void ExibeArray(int[] array)
        {
            for (int i = 0; i < array.Length; i++)
            {
                Console.Write($"{array[i]}, ");
            }
            Console.WriteLine();
        }

        public static int[] PushAndReturn(int[] array, int valor)
        {
            int tamanho = array.Length;
            int[] copy = array;
            array = new int[tamanho + 1];

            // index = 2
            // copy  = [5, 7, 9]
            // array = [ 5, 7, 12 , 9]

            // 0 -> 1
            // 1 -> 2
            // 2 -> 3
            // i -> i+1

            for (int i = 0; i < copy.Length; i++)
            {
                array[i + 1] = copy[i];
                // if (i < index) {
                //   array[i] = copy[i]
                // } else if (i == index) {
                //   array[i] = valor;
                // } else {
                //   array[i+1] = copy[i]
                // }
            }

            // [5, 7, 9]
            // [5, 7, 9, ]

            int ultimaPos = array.Length - 1;
            array[ultimaPos] = valor;

            // [5, 7, 9]
            // [5, 7, 9, 12]
            return array;
        }
    }
}
