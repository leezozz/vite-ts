<template>
  <div>

  </div>
</template>

<script lang="ts" setup>
import {
 defineComponent,
 getCurrentInstance
} from 'vue'
import { useStore } from 'vuex'
import { A, B} from '../../type/types'


// 类型断言一： as 类型
let val: unknown = '12345'
let valLength: unknown = (val as string).length
console.log('valLength', valLength)  // valLength 5
// 类型断言二： <类型>变量
let str: unknown = 'sdf'
let strLength: unknown = (<string>str).length
console.log('strLength', strLength) // strLength 3




// 联合类型
let a: string | number
a = 'zs'
a = 33



// 交叉类型
let andy: A & B = {
    name: 'zs',
    age: 13,
    gender: 'female'
}
// andy 既是`A`类型，同时也是`B`类型
console.log(andy)



// 类型声明，名称唯一，不可重复
type typeA = {
    name: string,
    age: number
}
const aa: typeA = {
    // 这里的属性要和类型声明中一致，不能少，不能多
    name: 'zs',
    age: 18
}



// 接口
// 用来定义类结构，定义一个类中应该包含哪些属性和方法
interface something  {
    name: string,
    age: number
}
interface something  {
    level: number
}
const objs: something = {
    name: 'zs',
    age: 18,
    level: 3
}

// id: 可缺省，name: 只读
interface ProgramLanguage {
  id?: string;
  readonly name: string;
  age: () => number;
}




// 泛型
// 在定义函数、接口、类的时候，不预先制定类型，到使用的时候再指定
function fn<T>(arg: T):T {
    return arg
}
fn('zs')  // 不指定泛型，TS会自动判断类型
fn<string>('lisay')  // 指定泛型

function fun<T, P>(a: T, b: P): T {
    console.log(a, b)
    return a
}
fun<string, number>('ok', 33)



</script>

<style scoped lang="scss">

</style>
