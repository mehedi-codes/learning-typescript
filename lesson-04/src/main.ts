// Type Aliases
type StringOrNumber = string | number;
type StringOrNumberArray = (string | number)[];

type Guitarist = {
  name: string,
  active?: boolean,
  albums: StringOrNumberArray
}

