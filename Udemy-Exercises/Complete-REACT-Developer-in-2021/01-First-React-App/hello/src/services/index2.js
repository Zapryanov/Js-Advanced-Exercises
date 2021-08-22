const getMonstersData = async () => {
    const dataJson = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataMonsters = await dataJson.json();

    return dataMonsters;
}

export default getMonstersData;