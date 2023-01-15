const next = (num) => {
  if (typeof num == 'bigint') {
    return num + 1n
  }
  if (typeof num == 'number') {
    return num + 1
  }

  throw new Error('Argument is not a number and not a bigint')
}

const asBoolean = (value) => {
  if(value) {
    return true
  }
  return false
}

const printTypesAsBoolean = () => {
  const printAsBoolean = (value) => {
    console.log(value, asBoolean(value))
  }
  printAsBoolean(0)
  printAsBoolean(1)
  printAsBoolean(0n)
  printAsBoolean(1n)
  printAsBoolean(false)
  printAsBoolean(true)
  printAsBoolean(next)
  printAsBoolean([])
  printAsBoolean([1])
  printAsBoolean([1, 2])
  printAsBoolean({})
  printAsBoolean({ name: 'Dmitry' })
  printAsBoolean("")
  printAsBoolean("false")
  printAsBoolean("true")
  printAsBoolean("0")
  printAsBoolean(undefined)
  printAsBoolean()
  printAsBoolean(null)
}

const showTypes = () => {
  const typeOf = (value) => {
    console.log(value, typeof value)
  }

  typeOf('Dmitry')
  typeOf(8)
  typeOf()
  typeOf(next())
  typeOf(next)
  typeOf(1 == 0)
  typeOf(2 == 2)
  typeOf({})
  typeOf(null)
  typeOf(BigInt("91328740298341238947612893461239841872"))
  typeOf(Symbol('Dmitry'))
}
