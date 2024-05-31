const calculadora = require('../calculadora/calculadora');

exports.calcular = (req, res) => {
    const { num1, num2, operacao } = req.body;

    if (isNaN(num1) || isNaN(num2)) {
        return res.render('index', { error: 'Por favor, insira valores numéricos válidos.' });
    }

    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);
    let resultado;
    let operacaoNome;

    try {
        resultado = calculadora.calcular(numero1, numero2, operacao);
        operacaoNome = calculadora.getOperacaoNome(operacao);
        res.render('resultado', { resultado, operacaoNome });
    } catch (error) {
        res.render('index', { error: error.message });
    }
};
