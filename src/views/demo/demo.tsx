// https://ke.qq.com/webcourse/index.html?r=1709389555425#cid=4903388&term_id=105074578&taid=13617606133731804&type=3072&source=PC_COURSE_DETAIL&vid=387702307617952653
// 第52分钟讲解
// 对 react 类组件添加类型的方式

import React, { PureComponent } from 'react'
/**
 * state:
 * props:
 */

interface IProps {
  name: string
  age?: number
}

interface IState {
  message: string
  counter: number
}

// 在 React 中，PureComponent 类只接受两个泛型参数：Props 和 State。

// · P 是组件的 props 类型
// · S 是组件的 state 类型
// · SS 是 snapshot 类型，用于 getSnapshotBeforeUpdate 生命周期方法。（可以无视了）
class Demo02 extends PureComponent<IProps, IState> {
  // name = 'aaaa'

  // 这两种写法都可以
  // 做法一
  // 不写constructor，它内部super(props)也会默认调用，所以不写也可以。
  // 那么就可以直接在类中定义state了，写出来的代码更简洁。

  state = {
    message: 'Hello World',
    counter: 99
  }

  // 做法二
  // constructor(props: IProps) {
  //   super(props)

  //   // this.state = {
  //   //   message: 'Hello World',
  //   //   counter: 100
  //   // }
  // }

  // 了解
  // getSnapshotBeforeUpdate() {
  //   return { address: '庐山' }
  // }

  // componentDidUpdate(
  //   prevProps: Readonly<IProps>,
  //   prevState: Readonly<IState>,
  // snapshot 可以在更新完成之后拿到更新前的状态
  //   snapshot?: ISnapshot | undefined
  // ): void {}

  render(): React.ReactNode {
    return (
      <div>
        name: {this.props.name}
        age: {this.props.age}
        message: {this.state.message}
        counter: {this.state.counter}
      </div>
    )
  }
}

export default Demo02
