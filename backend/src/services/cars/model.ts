import { getModelForClass, ModelOptions, prop } from '@typegoose/typegoose';

@ModelOptions({ schemaOptions: { timestamps: true } })
export class Car {
  @prop({ required: true, index: true, unique: true, trim: true, uppercase: true })
  public licensePlate: string;
}

export const CarsModel = getModelForClass(Car);
