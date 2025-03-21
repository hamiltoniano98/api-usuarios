import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterUserDto {
@IsString()
@IsNotEmpty()
name:string;

  @IsEmail() // Valida que el campo sea un email válido
  email: string;

  @IsString() // Valida que el campo sea una cadena de texto
  @IsNotEmpty() // Valida que el campo no esté vacío
  password: string;
}