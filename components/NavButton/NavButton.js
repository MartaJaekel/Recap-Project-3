export function navButton() {
    const buttonPrevious = document.createElement("button");
    
    
   buttonPrevious.innerHTML = `
   
      <button class="button button--prev" data-js="button-prev">
        previous
      </button>`
      
     

      
    
return buttonPrevious;

}
export function span() {
const span = document.createElement("span")
span.innerHTML = `
<span class="navigation__pagination" data-js="pagination">1 / 42</span>` 
return span}

export function buttonNext() {
const buttonNext = document.createElement("button")
      buttonNext.innerHTML = `
      <button class="button button--next" data-js="button-next">next</button>`
    return buttonNext}
      
