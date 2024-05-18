// Type Guard or Type Narrowing (typeof & in)


//typeof guard
const add = (param1: string | number, param2: string | number):
  string | number => {

  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString()
  }

}

// console.log(add(1,2)) // 3
// console.log(add(1,"2")) // "12"

// in guard
type NormalUser = {
  name: string
}

type AdminUser = {
  name: string,
  role: "admin"
}

const getUser = (user: NormalUser | AdminUser) => {
  if("role" in user){
    console.log(`My name is ${user.name} and my role is ${user.role}`)
  }else{
    console.log(`My name is ${user.name}`)
  }
}
getUser({name: "Mehedi", role: "admin"})
getUser({name: "Mehedi Hasan"})
