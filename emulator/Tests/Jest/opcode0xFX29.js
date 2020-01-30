function opcode0xFX29(register_I,register_V,x){
    register_I = register_V[x];
    return register_I;
} 
module.exports = opcode0xFX29;