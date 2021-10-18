function isOutOfBounds(mineField, rowIndex) {
    return rowIndex < 0 || rowIndex >= mineField.length;
}

function isMine(mineField, rowIndex, columnIndex) {
    if(isOutOfBounds(mineField, rowIndex)) {
        return false;
    } 
    return mineField[rowIndex][columnIndex] === '*';
}

//counts neighbouring mines
function countNeighbours(mineField, rowIndex, columnIndex) {
    let mineCounter = isMine(mineField, rowIndex, columnIndex + 1)
        + isMine(mineField, rowIndex, columnIndex - 1) 
        + isMine(mineField, rowIndex - 1, columnIndex)
        + isMine(mineField, rowIndex + 1, columnIndex)
        + isMine(mineField, rowIndex + 1, columnIndex + 1)
        + isMine(mineField, rowIndex + 1, columnIndex - 1)
        + isMine(mineField, rowIndex - 1, columnIndex - 1)
        + isMine(mineField, rowIndex - 1, columnIndex + 1);
    return mineCounter;
}

export const annotate = (mineField) => {
    if(mineField.length < 1) {
        return mineField;
    }

    //creates a new array that will be the result
    let resultArr = [];
    for(let rowIndex = 0; rowIndex < mineField.length; rowIndex++) {
        let tempRow = '';
        for(let columnIndex=0; columnIndex < mineField[rowIndex].length; columnIndex++) {
            //test if we have a mine in this square
            if(mineField[rowIndex][columnIndex] === '*') {
                //adds to the result the mines
                tempRow += '*';
            } else {
                //adds to the result the neighbouring mines count 
                let mineCounter = countNeighbours (mineField, rowIndex, columnIndex);
                mineCounter > 0 ? tempRow += mineCounter : tempRow += ' ';
            } 
        }
        resultArr.push(tempRow);
    }
    return resultArr;
};
