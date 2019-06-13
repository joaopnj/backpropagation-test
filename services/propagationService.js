module.exports = (app) => {
    var neataptic = require('neataptic');

    /* GET home page. */

    PropagationService = {
        init : () => {
            var network = new neataptic.Network(2,1);

            var trainingSet = [
                { input: [0,0], output: [0] },
                { input: [0,1], output: [1] },
                { input: [1,0], output: [1] },
                { input: [1,1], output: [0] }
                ];
                
            const start = async () => {
                const result = await network.evolve(trainingSet, {
                    equal: true,
                    error: 0.03
                });
                console.log(result);
            }

            start();
        }
    }

    return PropagationService;
}