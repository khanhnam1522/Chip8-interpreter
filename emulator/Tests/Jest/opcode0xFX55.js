function opcode0xFX55(memory,register_I,register_V,x){
    
    for (let i = 0; i <= x ; i++){
        memory[register_I+i] = register_V[i];
    }
    // TODO: MAY BE HERE IMPORTANT
    // this.register_I += x + 1;
    return memory;
}
module.exports = opcode0xFX55;