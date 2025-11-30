function calculateUserPoints(activities) {
    const BONUS = 2;

    const initialAccumulator = {
        total: 0,
        detail: []
    }

    const finalResult = activities.reduce((acc, activity) => {
        const { name, value, type} = activity;

        if(typeof value !== 'number' || isNaN(value)){
            throw new Error(`Invalid value: acticity "${name}" has non_numeric value.`)
        }

        const earned = type === 'bonus' ? value * BONUS : value;

        return {
            total: acc.total + earned,
            detail: [...acc.detail, {name, earned}]
        }
    }, initialAccumulator)
    return finalResult
}

const testUser = [
    { name: 'login', value: 10, type: 'normal'},
    { name: 'regis', value: 20, type: 'normal'},
    { name: 'cek', value: 2, type: 'bonus'},
    { name: 'hadir', value: 15, type: 'bonus'},
];

try {
    const result = calculateUserPoints(testUser)
    console.log(result)
} catch (error) {
    console.log('error calculate:', error.message)
}