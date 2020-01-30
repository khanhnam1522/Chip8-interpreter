function opcode0xFX33(memory,register_I,register_V,x){

    memory[register_I] = register_V[x] / 100;
    memory[register_I + 1] = (register_V[x] / 10) % 10;
    memory[register_I + 2] = (register_V[x]  % 100) % 10;

    return memory;
}
module.exports = opcode0xFX33;