export const deepFreeze = <T>(object: T): T => {
  const propNames = Object.getOwnPropertyNames(object) as Array<keyof T>;
  for (const name of propNames) {
    const value = object[name];

    object[name] =
      value && typeof value === "object" ? deepFreeze(value) : value;
  }

  return Object.freeze(object);
};
