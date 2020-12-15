function findMatching(drivers, name) {
    let result = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
    return result
}

function fuzzyMatch(drivers, name) {
    let result = drivers.filter(driver => driver.startsWith(name))
    return result
}

function matchName(drivers, name) {
    let result = drivers.filter(driver => driver.name === name)
    return result
}