import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty() // Valida que el campo sea un email válido
  description: string;

  @IsString() // Valida que el campo sea una cadena de texto
  @IsNotEmpty() // Valida que el campo no esté vacío
  usermail: string;

  @IsBoolean()
  completed: boolean;
}