using System.ComponentModel.DataAnnotations;

namespace ApolloBank.DTOs
{
    public class CreateUserDTO : BaseUserDTO
    {
        [Required(ErrorMessage = "Senha n�o informada.")]
        [MaxLength(6, ErrorMessage = "Senha precisa ter 6 dig�tos.")]
        [RegularExpression(@"^[0-9]*$", ErrorMessage = "Senha deve possuir apenas n�meros.")]
        public string Password { get; set; } = null!;
    }
}
