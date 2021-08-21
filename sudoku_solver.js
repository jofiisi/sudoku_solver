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
    
    getVal() {
        return this.val;
    }

    setPVal(pVal) {
        this.pVal.push(pVal);
    }
    
    getPVal(x) {
        return this.pVal[x];
    }
}
var cX = new Array(81);
for(let i = 0; i < 81; i++)
{
    cX[i] = new cell(i);
    cX[i].setVal(pattern[i]);
}
for(let i = 0; i < 81; i=i+3)
{
   /* if(cX[i].getVal() == 0)
    {
        if(cX[i+1].getVal() != 0) cX[i].setPVal(cX[i+1].getVal());
        if(cX[i+2].getVal() != 0) cX[i].setPVal(cX[i+2].getVal());
        if(cX[i+9].getVal() != 0) cX[i].setPVal(cX[i+9].getVal());
        if(cX[i+10].getVal() != 0) cX[i].setPVal(cX[i+10].getVal());
        if(cX[i+11].getVal() != 0) cX[i].setPVal(cX[i+11].getVal());
        if(cX[i+18].getVal() != 0) cX[i].setPVal(cX[i+18].getVal());
        if(cX[i+19].getVal() != 0) cX[i].setPVal(cX[i+19].getVal());
        if(cX[i+20].getVal() != 0) cX[i].setPVal(cX[i+20].getVal());
    }*/
}
//console.log(cX[0]);
console.log(cX[20].getVal);
