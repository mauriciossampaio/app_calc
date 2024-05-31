exports.calcular = (num1, num2, operacao) => {
    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                throw new Error('Divisão por zero não é permitida.');
            }
            return num1 / num2;
        default:
            throw new Error('Operação inválida.');
    }
};

exports.getOperacaoNome = (operacao) => {
    switch (operacao) {
        case '+':
            return 'soma';
        case '-':
            return 'subtração';
        case '*':
            return 'multiplicação';
        case '/':
            return 'divisão';
        default:
            throw new Error('Operação inválida.');
    }
};
