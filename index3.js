//define the model (function)
function simpleAdd(input1, input2) {
  // tidy is used to free up gpu (graphic processing unit)
  //memory once the functions returns
  return tf.tidy(() => {
    const x1 = input1;
    const x2 = input2;
    const y = x1.add(x2);
    return y;
  });
}

const data1 = tf.tensor1d([3, 5, 4, 6]);
const data2 = tf.tensor1d([3, 6, 2, 3]);

const result = simpleAdd(data1, data2);
result.print();
