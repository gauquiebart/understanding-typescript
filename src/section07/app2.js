let j = 5;

let test = {
  key1: "abc",
  key2: "ded",
  definer: function (text) {
    text.split('abc');
    return this.key1 + this.key2;
  },
};

let resulter = function (anOjbect) {
  return anOjbect;
};

let resulter2 = resulter(test);

const result = test.definer('abc');
