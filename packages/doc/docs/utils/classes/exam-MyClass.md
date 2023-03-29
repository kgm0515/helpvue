[@helpvue/utils](../README.md) / [Exports](../modules.md) / [exam](../modules/exam.md) / MyClass

# Class: MyClass

[exam](../modules/exam.md).MyClass

类

## Table of contents

### Constructors

- [constructor](exam.MyClass.md#constructor)

### Properties

- [prop1](exam.MyClass.md#prop1)

### Methods

- [privateMethod1](exam.MyClass.md#privatemethod1)
- [publicMethod](exam.MyClass.md#publicmethod)
- [staticMethod1](exam.MyClass.md#staticmethod1)

## Constructors

### constructor

• **new MyClass**()

构造函数

#### Defined in

libs/example.ts:30

## Properties

### prop1

• **prop1**: `number`

类的属性

#### Defined in

libs/example.ts:27

## Methods

### privateMethod1

▸ `Private` **privateMethod1**(`param1`, `param2`): `number`

私有方法

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `param1` | `number` | 第一个参数 |
| `param2` | `number` | 第二个参数 |

#### Returns

`number`

两数之和

#### Defined in

libs/example.ts:49

___

### publicMethod

▸ **publicMethod**(`param1`, `param2`): `number`

公共方法

#### Parameters

| Name | Type |
| :------ | :------ |
| `param1` | `number` |
| `param2` | `number` |

#### Returns

`number`

#### Defined in

libs/example.ts:54

___

### staticMethod1

▸ `Static` **staticMethod1**(`param`): `Promise`<`string`[]\>

静态方法

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `param` | `string`[] | 参数，字符串列表 |

#### Returns

`Promise`<`string`[]\>

返回 Promise 对象

#### Defined in

libs/example.ts:39
