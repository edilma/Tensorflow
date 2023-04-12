// sequencial model
const model = tf.sequential();

model.add(
  // define the input shape (dimension)
  tf.layers.simpleRNN({
    // only need first layer
    inputShape: [20, 4],
    //the number of units or neurons
    units: 20,
    //weight - what we are going to output to the next layer
    recurrentInitializer: "GlorotNormal",
  })
);
model.add();
