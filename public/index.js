"use strict";
const saveBtn = document.getElementById('save-btn');
const incrementBtn = document.getElementById('increment-btn');
const counter = document.getElementById('count-el');
const entries = document.getElementById('save-el');
let count = 0;
const increment = () => {
    count += 1;
    counter.textContent = count.toString();
};
const save = () => {
    entries.textContent += `${count} - `;
};
