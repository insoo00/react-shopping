import React, { useState } from "react";
import "../styles/Cart.css";

// CartItem 타입 정의
interface CartItem {
    id: number;
    name: string;
    price: number;
    discountRate: number;
    quantity: number;
    imageUrl: string;
}

const SampleCartItem: CartItem[] = [
    {
        id: 1,
        name: "NBNAE31313 / UNI ESS 헤리티지 웜업 자켓 (BLACK)",
        price: 116100,
        discountRate: 20,
        quantity: 1,
        imageUrl:
            "https://img.29cm.co.kr/item/202409/11ef6b1e3c1192908f479f37ab3b7502.jpg?width=700",
    },
    {
        id: 2,
        name: "인시전 레이싱 자켓_Suede Brown",
        price: 123000,
        discountRate: 39,
        quantity: 2,
        imageUrl:
            "https://img.29cm.co.kr/item/202408/11ef667771266e14a980ab87cf01eaef.jpg?width=700",
    },
];

const Cart: React.FC = () => {
    // 샘플 카트 아이템, 초기 상태로 설정
    const [cartItems, setCartItems] = useState<CartItem[]>(SampleCartItem);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);

    // 선택된 물품의 총합 계산
    const calculateTotal = () => {
        return cartItems
            .filter((item) => selectedItems.includes(item.id))
            .reduce(
                (sum, item) =>
                    sum +
                    item.price *
                        ((100 - item.discountRate) / 100) *
                        item.quantity,
                0
            );
    };

    // 아이템 삭제 함수
    const removeFromCart = (id: number) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    // 수량 증가 함수
    const increaseQuantity = (id: number) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // 수량 감소 함수
    const decreaseQuantity = (id: number) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    // 선택 체크박스 업데이트
    const toggleSelect = (id: number) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    // 결제 처리 함수
    const handleCheckout = () => {
        if (selectedItems.length === 0) {
            alert("결제할 물품을 선택해 주세요.");
        } else {
            // 결제 로직 추가 가능
            alert(
                `총 ${calculateTotal().toLocaleString()}원 결제가 완료되었습니다.`
            );
            // 결제 완료 후 장바구니에서 해당 항목 삭제
            setCartItems(
                cartItems.filter((item) => !selectedItems.includes(item.id))
            );
            setSelectedItems([]);
        }
    };
    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                <>
                    <ul className="cart-list">
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <div className="item-selections">
                                    <input
                                        type="checkbox"
                                        checked={selectedItems.includes(
                                            item.id
                                        )}
                                        onChange={() => toggleSelect(item.id)}
                                    />
                                </div>
                                <div>
                                    <img src={item.imageUrl} alt={item.name} />
                                </div>
                                <div className="item-details">
                                    <div className="item-info">
                                        <h3>{item.name}</h3>
                                        <p>
                                            <button
                                                className="item-quantity-add-btn"
                                                onClick={() =>
                                                    decreaseQuantity(item.id)
                                                }
                                            >
                                                -
                                            </button>
                                            <div className="discount-rate">
                                                {item.discountRate}% &nbsp;
                                            </div>
                                            {(
                                                item.price *
                                                ((100 - item.discountRate) /
                                                    100)
                                            ).toLocaleString()}{" "}
                                            ₩ x {item.quantity}
                                            <button
                                                className="item-quantity-minus-btn"
                                                onClick={() =>
                                                    increaseQuantity(item.id)
                                                }
                                            >
                                                +
                                            </button>
                                        </p>
                                        <div className="originalPrice">
                                            {item.price.toLocaleString()}
                                        </div>
                                    </div>
                                </div>
                                <div className="item-actions">
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        x
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-total">
                        <p>Total: {calculateTotal().toLocaleString()} ₩ </p>
                    </div>
                    <button className="checkout-btn" onClick={handleCheckout}>
                        결제하기
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;