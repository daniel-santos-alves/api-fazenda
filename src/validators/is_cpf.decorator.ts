
import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { cpf } from 'cpf-cnpj-validator';

export function IsCPF(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isCPF',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return typeof value === 'string' && cpf.isValid(value);
        },
        defaultMessage(args: ValidationArguments) {
          return 'CPF inválido';
        },
      },
    });
  };
}
