  export class Pet {
    public id: number;
    constructor(
                public name: string,
                public age: number,
                public ageMeasurementUnit: string,
                public image: string,
                public adopted: boolean,
                public lost: boolean) {}
  }
