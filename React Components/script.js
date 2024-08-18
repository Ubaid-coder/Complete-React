import { createRoot } from 'react-dom/client'
import './style.css'
import React from 'react';

// const h1 = <h1>Hello World</h1>

function CARD(props) {
    const {title, img, brand, price, stock } = props;
    // console.log(props);
    // console.log(key);

    return (
        <div className='card' >

            <img src={img}></img>

            <div className='cardContent'>

                <h2>{title}</h2>
                <p>{brand}</p>
                <p><b>${price}</b></p>
                <p>{stock} stocks are availabel</p>

            </div>

        </div>

    )
}


const root = createRoot(document.getElementById('root'))



console.log('Hello world!!!')

fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then((data) => {
        console.log(data);

        root.render(

            <div className='container'>
            {data.products.map((product) => {
            return <CARD 
            key= {product.id}
            title= {product.title}
            brand= {product.brand}
            price= {product.price}
            img = {product.thumbnail}
            stock= {product.stock}
             />
            })}
            </div>
        )

    });

// function makeElement() {
//     return <h1>React ELEMENT</h1>
// }

// root.render(makeElement())

// const h1 = <h1>React element</h1>
// root.render(h1);


// root.render({
//     $$typeof: Symbol.for('react.element'),
//     type: 'h1',
//     ref: null,
//     props: {
//         children: 'React elements'
//     }
// })

// root.render({
//     $$typeof: Symbol.for('react.element'),
//     type: CARD,
//     ref:null,
//     props: {
//         title: 'perfume',
//         brand: 'shinal',
//         img: 'https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png',
//         price: '$100',
//         key: 3
//     }
// })

// root.render(React.createElement(CARD, {
//     title: 'perfume',
//     brand: 'shinal',
//     img: 'https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png',
//     price: '$100',
//     key: 3
// }))

// root.render(<CARD
//     title="perfume"
//     img="https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png"
//     price="200"
// />
// )
