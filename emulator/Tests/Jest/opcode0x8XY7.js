function opcode0x8XY7 (x, y, register_V) { 
    if (register_V[y] > register_V[x])
    {
        register_V[x] = register_V[y] - register_V[x];
        register_V[0xF] = 1; // carry flag is the 16th register so I used the 15th index
        return register_V[x];
    }
    else if (register_V[y] <= register_V[x])
    {
        register_V[x] =  register_V[y] - register_V[x];
        register_V[0xF] = 0; // carry flag is the 16th register so I used the 15th index
        return register_V[x];
    }
}
module.exports = opcode0x8XY7;