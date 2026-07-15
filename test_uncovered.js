/**
 * This is a newly added file with NO tests
 * Test coverage will drop when Codacy analyzes this
 */
function newUntestedFunction(x, y) {
    return x * y + x - y;
}

function anotherUntestedFunction(data) {
    return data.map(d => d * 2).filter(d => d > 10);
}

module.exports = { newUntestedFunction, anotherUntestedFunction };
