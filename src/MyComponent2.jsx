import { useState } from "react";

function MyComponent2() {
    const [name, setName] = useState("Guest");
    const [quantity, setquantity] = useState(1);
    const [comment, setComment] = useState("Directions");
    const [payment, setpayment] = useState();
    const [shipping, setshipping] = useState("Delivery");

    const changeName = (event) => {
        setName(event.target.value);
    };

    const changeQuantity = (e) => {
        setquantity(e.target.value);
    };

    const inputComment = (e) => {
        setComment(e.target.value);
    };

    const handlepayment = (e) => {
        setpayment(e.target.value);
    };
    const handleshipping = (e) => {
        setshipping(e.target.value);
    };
    return (
        <div>
            <input value={name} onChange={changeName}></input> <br></br> <br></br>
            <input
                value={quantity}
                onChange={changeQuantity}
                type="number"
            ></input>{" "}
            <br></br> <br></br>
            <textarea value={comment} onChange={inputComment}></textarea>
            <br></br> <br></br>
            <select value={payment} onChange={handlepayment}>
                <option value="">Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="GiftCard">GiftCard</option>
            </select>{" "}
            <br/><br/>
            <label>
                <input
                    type="radio"
                    value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleshipping}
                ></input>
                Delivery
            </label>
            <label>
                <input
                    type="radio"
                    value="PickUp"
                    checked={shipping === "PickUp"}
                    onChange={handleshipping}
                ></input>
                PickUp
            </label><br /><br />




            <p>Name: {name}</p>
            <p>Quantity: {quantity}</p>
            <p>Comment: {comment}</p>
            <p>Payment: {payment}</p>
            <p>Shipping: {shipping}</p>

        </div>
    );
}
export default MyComponent2;
