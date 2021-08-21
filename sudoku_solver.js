var pattern = [
    0,3,0, 0,0,0, 0,0,0,
    0,0,0, 1,9,5, 0,0,0,
    0,0,8, 0,0,0, 0,6,0,

    8,0,0, 0,6,0, 0,0,0,
    4,0,0, 8,0,0, 0,0,1,
    0,0,0, 0,2,0, 0,0,0,

    0,6,0, 0,0,0, 2,8,0,
    0,0,0, 4,1,9, 0,0,5,
    0,0,0, 0,0,0, 0,7,0
];

class cell {
    constructor(pos)
    {
        this.pos = pos;
        this.pVal = [];
    }

    setVal(val) {
        this.val = val;
    }

    setPVal(pVal) {
        this.pVal.push(pVal);
    }
    
    getPVal(x) {
        return this.pVal[x];
    }
}
var cX = new Array(81);
for(let i = 1; i < 82; i++)
{
    cX[i] = new cell(i);
    cX[i].setVal(pattern[i-1]);
}
cX[3].setPVal(1);
cX[3].setPVal(2);
console.log(cX[3].getPVal(1));
console.log(cX[3].getPVal(0));
