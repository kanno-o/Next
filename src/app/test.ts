// 試し書き用ページ

import { time } from "console";
import { reverse } from "dns";

export const test = () => {
    console.log(test);
    
    const name:string = "hello";
    console.log(name);

    // 型試し書き  
    const age:number = 25;
    const isStudent:boolean = false;
    const hobbies:string[] = ["reading","coding","gaming"];
    const adress:object = {
        streets: "住所",
        city: "市",
        state: "県"
    };
    const today:Date = new Date();
    const none:null = null;
    const notDefined:undefined = undefined;
    const random:any = "hello world";
    const gender: "male" | "female" = "male";
    const value:string | number | null = "指定した型を入れられる";

    // 練習：引数に文字列の配列を受け取り、その中身の順番を逆にして返す関数を作成する
    // 例：reverseArray(["a","b","c"]) => ["c","b","a"]
    // 変数、引数、返り値

    const reverseArray = (arr:string[]) => {
        const reverseArray:string[]= [];
        let index:number = arr.length -1;

        while(index >= 0) {
            reverseArray.push(arr[index]);
            index --;
        }

        return reverseArray;
    }
    console.log(reverseArray(["a","b","c"]));

    // const user = {
    //     name:"",
    //     age:"",
    //     email:"",
    //     isActive:true,
    // }

    // interface UserProps {
    //     name:string,
    //     age:number,
    //     email:string,
    //     isActive:boolean,
    // }

    // interface AdminUser extends UserProps {
    //     role:string;
    // }

    type UserProps = {
        name:string,
        age:number,
        email:string,
        isActive:boolean,
    }

    type AdminUser = UserProps & {
        role:string;
    }

    const createAccount = (accountInfo: AdminUser) => {
        //
        createAccount({
            name:"",
            age:20,
            email:"",
            isActive:true,
            role:"",
        })
    }

    class User {
        userId:number;
        name:string;
        age:number;
        email:string;
        isActive: boolean;

        constructor(userId:number, name:string, age:number, email:string, isActive: boolean){
            this.userId = userId;
            this.name = name;
            this.age = age;
            this.email = email;
            this.isActive = isActive;
        }

        public getProfile(): string {
            return `Name: ${this.name}, Age: ${this.age}`;
        }

        static sayHelloWorld(): void {
            console.log("Hello world");
        }
    }

    const user = new User(1,"mike",25,"aa@gmail.com",true);
    user.getProfile();

    // ジェネリクス例
    const foo = <T>(arg: T): T => {
        return arg;
    }

    foo<string>("Hello world")

}