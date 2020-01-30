function opcode0x8XYE(register_V,x,program_counter){
    if ( (register_V[x] >> 7 & 0x0001) == 1){  //MSB = 1
        register_V[15] = 1;                    //this register contains VF
    }
    else{
        register_V[15] = 0;
    }
    register_V[x] = register_V[x] << 1;
    register_V[x] *= 2;
    return register_V[15];
}
module.exports = opcode0x8XYE;