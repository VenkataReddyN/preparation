let name = "good"
let obj = {
    name:"venkat",
    fun2: () => {
        console.log(`${this.name}`)
        let fun1 = () => {
            console.log(`${this.name}`)
        }
        function abc() {
            console.log(`${this.name}`)
        }
        fun1();
        abc();
    }
}

obj.fun2();