import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { cnpj } from 'cpf-cnpj-validator';

export function IsCNPJ(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isCNPJ',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return typeof value === 'string' && cnpj.isValid(value);
        },
        defaultMessage(args: ValidationArguments) {
          return 'CNPJ inválido';
        },
      },
    });
  };
}
