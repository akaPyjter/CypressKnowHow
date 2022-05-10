const objectos1 = {
    key1: 'Value1',
    key2: 'Value2',
    key3: 'Value3',
    key4: 'Value4',

    getValue: function(key: any){
        return this[key]
    }
}


for (let element of Object.entries(objectos1)){
    console.log(element)
}

