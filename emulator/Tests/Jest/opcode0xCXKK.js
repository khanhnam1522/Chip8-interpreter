function opcode0xCXKK(x, opcode, register_V){
    let randNumber = (Math.random() * (255+1));
    let kk = opcode & 0x00FF;
    register_V[x] = kk;
    return register_V[x];
}
module.exports = opcode0xCXKK;