

class UtilsHelpers {
    changeFormatArray = (array) => {
        let newArr = [];
        let i = 0;
        for (let index = 0; index < array.length; index++) {
            console.log(index);
            const element = array[index];
            if (this.isEven(index)) {
                newArr.push([null,null])
                newArr[index-i][0] =  element;
            } else {
                i++;
                newArr[index-i][1] =  element;
            }
        }
    
        return newArr;
    }

    isEven = (index) => {
        return index%2 === 0;
    }
}

export const utilsHelpers = new UtilsHelpers();