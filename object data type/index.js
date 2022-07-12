let obj = {
    'id_number': 1,
    'name_string': 'developer',
    'age_number': 24,
    'role_string': 'dev',
    'post': 'software developer'
}

Object.keys(obj).forEach((key)=>{
    // console.log(key, obj[key]);
    const text = key;

    let dataTypeArr = text.split("_");
    let keyDataType = dataTypeArr[dataTypeArr.length - 1];

    if (keyDataType === typeof obj[key]) {
        console.log(true);
    } else {
        console.log(false);
    }
});

// Another way to iterate object using forEach
/*
Object.entries(obj).forEach(([key, value]) => {
    console.log(key, value);
});
*/

function dataType(key) {
    // console.log(key, obj[key]);
    const text = key;

    let dataTypeArr = text.split("_");
    let keyDataType = dataTypeArr[dataTypeArr.length - 1];

    if (keyDataType === typeof obj[key]) {
        console.log(true);
    } else {
        console.log(false);
    }
}