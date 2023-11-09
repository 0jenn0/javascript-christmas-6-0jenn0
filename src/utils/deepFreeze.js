export default function deepFreeze(object) {
  Object.keys(object).forEach((name) => {
    const property = object[name];

    if (
      property &&
      typeof property === "object" &&
      !Object.isFrozen(property)
    ) {
      deepFreeze(property);
    }
  });

  return Object.freeze(object);
}
