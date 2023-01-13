const getYieldForPlant = plant => {
     return plant.yield;
    }

const getYieldForCrop =  plant => {
    return (plant.crop.yield * plant.numCrops)
}

const getTotalYield = (...plant) => {
    const yieldArray = [];
    const numArray= [];
    const multiply = [];
    plant.map((plant) => {
        plant.crops.map((plant) => {
            yieldArray.push(plant.crop.yield);
        })
        plant.crops.map((plant)=> {
            numArray.push(plant.numCrops);
        });
    });
    for (i=0; i < yieldArray.length; i++) {
        multiply.push(yieldArray[i]*numArray[i]);
    }
    const sum = multiply.reduce((current, a) => {
        return a + current
    });
    return sum;
};

const getCostsForCrop = plant => {
    return (plant.crop * plant.maize * plant.cost)
}

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    //getRevenueForCrop,
    //getProfitForCrop,
    //getTotalProfit,

}