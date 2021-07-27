import React from 'react';
import ReactDOM from 'react-dom';

let arr = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];
            let listArr = arr.map(function(val, idx){
                return React.createElement("li", { key : idx }, val);
            });
            let ulist = React.createElement("ul", {class : 'box'}, listArr);
ReactDOM.render(ulist,document.querySelector("#root"));