import {useState} from "react";


const TenLitleMonkeys = () => {
    const [count, setCount] = useState(10);

    function HandleClick() {
        //Subtract count
        if (count != 0) {
            setCount(count - 1);
        }
    }


    return (
    <div>
        <p>{count != 0 ?`${count} little monkeys jumping` : "no more monkeys jumping on the bed."}</p>
        <button onClick={HandleClick}>Click Here</button>
    </div>
    )
}

export default TenLitleMonkeys