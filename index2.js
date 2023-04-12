// shape tells how many rows and columns the tensor will have
const shape = [4, 2];
// create the tensor with all the items in the array and the shape of it
const data2 = tf.tensor([4, 6, 5, 9, 13, 25, 1, 57], shape);
//create the tensor with the array already established
const data = tf.tensor([
  [4, 6],
  [5, 9],
  [13, 25],
  [1, 57],
]);
const data3 = tf.variable(tf.zeros([8]));

data.print();
data2.print();
data3.print();

// when we assign values it has to be in the same shape (1 dimension in this case)
data3.assign(tf.tensor1d([2, 4, 6, 45, 5, 1, 8, 9]));
data3.print();

//create some 1 dimensional tensors
const data4 = tf.tensor1d([4, 5, 6, 89]);
const data5 = tf.tensor1d([5, 4, 7, 90]);

data4.print();
data5.print();
// multiply and divide 2 tensors.  They must have the same shape (dimensions)
data4.add(data5).print();
data4.mul(data5).print();

//We can divide a tensor in a scalar (broadcast) or with a tensor of the same shape

data6 = tf.scalar(3);

data4.div(data6).print();
