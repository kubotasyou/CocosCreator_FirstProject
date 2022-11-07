import { _decorator, Component, Node, log } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('First_Script')
export class First_Script extends Component {
    start() {


        let firstFiled:string = 'Hello World!'
        log(firstFiled);
    }

    update(deltaTime: number) {
        
    }
}


