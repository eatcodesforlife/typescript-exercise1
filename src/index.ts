const saveBtn = document.getElementById('save-btn') as HTMLButtonElement;
const incrementBtn = document.getElementById('increment-btn') as HTMLButtonElement;
const counter = document.getElementById('count-el') as HTMLElement;
const entries = document.getElementById('save-el') as HTMLParagraphElement

let count:number = 0;	

const increment = ():void => {
  count +=1;
  counter.textContent = count.toString();
}


const save = ():void => {
  entries.textContent += `${count} - `;
}



