export const formComplete = (value) => {
  const validate = {};
  const types = value.types?.length === 0;
  const comName = /^[a-z]+$/;

  if (!comName.test(value.name)) {
    validate.name =
      "el nombre no puede estar vacio, y solo debe contener letras minusculas";
  }

  if (!value.sprites) {
    validate.sprites = "You must add a valid image";
  }
  if (!Number(value.health)) {
    validate.health = "life cannot be letters or 0";
  }
  if (!Number(value.attack)) {
    validate.attack = "health cannot be letters or 0";
  }
  if (!Number(value.defense))
    validate.defense = "attack cannot be letters or 0";
  if (!Number(value.speed)) validate.speed = "speed cannot be letters or 0";
  if (!Number(value.weight)) validate.weight = "weight cannot be letters or 0";
  if (!Number(value.height)) validate.height = "height cannot be letters or 0";
  if (types) {
    validate.types = "the pokemon must have at least one type";
  }

  if (!Object.values(validate).length) validate.complete = true;
  return validate;
};

export const validate = (value, camp) => {
  const data = formComplete(value);

  return { [camp]: data[camp] };
};
