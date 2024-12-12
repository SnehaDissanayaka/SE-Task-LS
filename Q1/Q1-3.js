const src1 = {
        prot1 : 1,
        prot2 : 2,
        prot3 : {
                prot4 : 4,
                prot5 : 5
        },
        prot6 : 6
}

const proto1 = {
        prot1 : 5,
        prot3 : null
}

const src2 = {
        prot1 : 1,
        prot2 : 2,
        prot3 : {
                prot4 : 4,
                prot5 : 5,
                prot6 : {
                        prot7 : 7
                }
        },
        prot8 : 8
}

const proto2 = {
        prot3 : {
                prot4 : null,
                prot6 : {
                        prot7 : {
                                prot9: 10
                        }
                }
        },
        prot8 : 9
}
const src3 = {
        prot1 : 1,
        prot2 : {
                prot4 : 4,
                prot5 : 5
        },
        prot3 : 3,
        prot6 : 6
}

const proto3 = {
        prot2 : null,
        prot6 : null
}

projectObject(src1, proto1);
// projectObject(src2, proto2);
// projectObject(src3, proto3);

function projectObject(sourceObj, prototypeObj){
        const outputObj = {};
        for (const key in sourceObj) {
                if(prototypeObj.hasOwnProperty(key)){
                        outputObj[key] = sourceObj[key];
                }
        }
        document.getElementById('source_object').innerHTML = JSON.stringify(sourceObj,null,4);
        document.getElementById('prototype_object').innerHTML = JSON.stringify(prototypeObj,null,4);
        document.getElementById('projected_object').innerHTML = JSON.stringify(outputObj,null,4);
        return outputObj;
}
