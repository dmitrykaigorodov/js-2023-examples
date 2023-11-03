import { z } from "zod";

const userShape = z.object({
  email: z.string().min(1).email(),
  theme: z.enum(["dark", "light"]).default('dark')
})

class UserDto {
  private __data
  constructor(userRaw) {
    this.__data = userShape.parse(userRaw)
  }

  toJson() {
    return JSON.stringify(userShape.parse(this.__data))
  }
}

const user = new UserDto({ email: 'dk@gmail.com', pwd: 'password3' })
user.pwd = 'password1'
user.__data.pwd = 'password2'
console.log(user)
console.log(user.toJson())