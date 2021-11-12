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

var patternS = pattern;

function index2row(index) 
{
    return{row: Math.floor(index / 9), col: index % 9};
}

function row2index(row, col) 
{
    return row * 9 + col;    
}

function sCell(index, value) {
    let {row, col} = index2row(index);
    for(let x = 0; x < 9; x++)
    {
        if(patternS[row2index(x, col) == value]);
    }
    for(let x = 0; x < 9; x++)
    {
        if(patternS[row2index(row, x) == value]);
    }
    let threeR = Math.floor(row/3) * 3;
    let threeC = Math.floor(col/3) * 3;
    for(let a = 0; a < 3; a++)
    {
        for(let b = 0; b < 3; b++)
        {
            if(patternS[row2index(a ,b)] == value);
        }
    }
    
}

console.log(sCell(70,6));