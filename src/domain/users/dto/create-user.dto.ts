import { IsEmail, IsPhoneNumber, IsString, Length } from "class-validator";

export class CreateUserDto {
  @Length(2, 15)
  readonly name: string;

  @IsPhoneNumber("MM")
  readonly phone: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;
}
