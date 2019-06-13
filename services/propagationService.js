module.exports = (app) => {
    var neataptic = require('neataptic');

    PropagationService = {
        init : () => {

            var dataSets = {
                'XOR' : [
                  { input: [0,0], output: [0] },
                  { input: [0,1], output: [1] },
                  { input: [1,0], output: [1] },
                  { input: [1,1], output: [0] }
                ],
                'AND' : [
                  { input: [0,0], output: [0] },
                  { input: [0,1], output: [0] },
                  { input: [1,0], output: [0] },
                  { input: [1,1], output: [1] }
                ],
                'OR' : [
                  { input: [0,0], output: [0] },
                  { input: [0,1], output: [1] },
                  { input: [1,0], output: [1] },
                  { input: [1,1], output: [1] }
                ]
            };

            var iterations = 0;
            var time = 0;
            var error = 0;

            console.log('');

            console.log('INICIANDO........');

            console.log('');

            console.log('Treinando com os DataSets...');


            for(var dataSet in dataSets) {
                dataSet = dataSets[dataSet];

                var network = new neataptic.architect.Perceptron(2, 4, 1);
                var results = network.train(dataSet, {
                    momentum: 0.9,
                    iterations: 1000,
                    error: 0.03,
                    rate: 0.3
                });

                error += results.error;
                iterations += results.iterations;
                time += results.time;
            }

            console.log("Iterations: " + iterations);
            console.log("Time: " + time + 'ms');
            console.log('---------------------');
            console.log('');

        }
    }

    return PropagationService;
}