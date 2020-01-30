function opcode0x8XY4 (x, y, register_V) {
    let sum_x_y = register_V[x] + register_V[y]; 
    if (sum_x_y <= 255){
        register_V[x] += register_V[y];
        register_V[0xF] = 0;
    }
    else if (sum_x_y > 255){
        register_V[x] = (sum_x_y & 0x00FF);
        register_V[0xF] = 1;
    }
    return register_V[x];
}
module.exports = opcode0x8XY4;