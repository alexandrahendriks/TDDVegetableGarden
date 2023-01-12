const getYieldForPlant = plant => {
     return plant.yield;
    }

const getYieldForCrop =  amount => {
    return  amount.numCrops*3;
}

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
}