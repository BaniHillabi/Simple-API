import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"


export class createUserDto {
    @IsEmail()
    @IsNotEmpty()
    email:string

    @IsString()
    @IsNotEmpty()
    password:string

    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    age: number
}