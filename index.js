const findMatching = (drivers, str) => drivers.filter(driver => driver.toLowerCase() === str.toLowerCase() )

const fuzzyMatch = (drivers, str) => drivers.filter(driver => driver.slice(0,2) === str)

const matchName = (drivers, name) => drivers.filter(driver => driver.name === name)


