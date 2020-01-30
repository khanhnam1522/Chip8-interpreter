function opcode0xFX65(memory,register_I,register_V,x){
    //NEEDS TESTING
    for (let i = 0; i <= x ; i++){
        register_V[register_I+i] = memory[i];
    }
    // TODO: MAY BE HERE IMPORTANT
    // this.register_I += x + 1;
    return register_V;
}
module.exports = opcode0xFX65;